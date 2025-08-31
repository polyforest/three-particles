import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import {
    Box,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Typography,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { ParticleEffectModelJson } from 'three-particles'
import { AppHeader } from './components/AppHeader'
import { EditableTitle } from './components/EditableTitle'
import { ParticleEffectCreationDialog } from './components/ParticleEffectCreationDialog'
import { saveEffect } from './storage/indexedDBStorage'
import { darkTheme } from './theme/darkTheme'
import { handleError, showSuccessToast } from './utils/errorHandler'
import { downloadJson } from './utils/downloadUtils'
import { GlobalStyles } from './theme/GlobalStyles'

const App: React.FC = () => {
    const [currentEffect, setCurrentEffect] =
        useState<ParticleEffectModelJson | null>(null)
    const [currentEffectName, setCurrentEffectName] = useState<string>('')
    const [isNewEffectDialogOpen, setIsNewEffectDialogOpen] = useState(false)

    const handleNewEffect = () => {
        setIsNewEffectDialogOpen(true)
    }

    const handleCreateEffect = async (
        name: string,
        effect: ParticleEffectModelJson,
    ): Promise<void> => {
        try {
            await saveEffect(name, effect)
            setCurrentEffect(effect)
            setCurrentEffectName(name)
        } catch (error) {
            console.error('Failed to save new effect:', error)
        }
    }

    const handleOpenEffect = (effect: ParticleEffectModelJson) => {
        setCurrentEffect(effect)
    }

    const handleSaveEffect = () => {
        if (!currentEffect) return

        try {
            downloadJson(currentEffect, currentEffectName || 'untitled-effect')
            showSuccessToast('Effect downloaded successfully')
        } catch (error: any) {
            handleError(error, 'downloading effect')
        }
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <GlobalStyles />
            <AppHeader
                onNewEffect={handleNewEffect}
                onOpenEffect={handleOpenEffect}
                onSaveEffect={handleSaveEffect}
                currentEffect={currentEffect}
                title={currentEffectName || 'Particle Editor'}
            />

            <Container
                maxWidth="lg"
                sx={{
                    mt: 4,
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                }}
            >
                {currentEffect ? (
                    <Box sx={{ p: 2 }}>
                        {/* Placeholder for actual particle editor UI */}
                        <EditableTitle
                            value={currentEffectName}
                            onChange={setCurrentEffectName}
                        />
                        <Typography variant="body1" gutterBottom>
                            Particle Editor UI will be implemented here
                        </Typography>
                        <pre
                            style={{
                                background: '#2a2a2a',
                                padding: '1rem',
                                borderRadius: '4px',
                                overflow: 'auto',
                                color: '#e0e0e0',
                            }}
                        >
                            {JSON.stringify(currentEffect, null, 2)}
                        </pre>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '70vh',
                        }}
                    >
                        <Card
                            sx={{
                                maxWidth: 600,
                                width: '100%',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    gutterBottom
                                    align="center"
                                >
                                    Welcome to the [WIP] Particle Editor
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align="center"
                                >
                                    Create a new particle effect or open an
                                    existing one to get started.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center"
                                    color="text.secondary"
                                >
                                    Use the File menu in the top left to create
                                    a new effect or open an existing one.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                )}
            </Container>

            <ParticleEffectCreationDialog
                open={isNewEffectDialogOpen}
                onClose={() => setIsNewEffectDialogOpen(false)}
                onCreate={handleCreateEffect}
            />
        </ThemeProvider>
    )
}

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
