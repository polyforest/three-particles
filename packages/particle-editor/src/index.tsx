import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import { Box, Card, CardContent, CssBaseline, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { ParticleEffectModelJson } from 'three-particles'
import { AppHeader } from './components/AppHeader'
import { EditableTitle } from './components/EditableTitle'
import { ParticleEffectCreationDialog } from './components/ParticleEffectCreationDialog'
import { PreviewPanel } from './components/PreviewPanel'
import { saveEffect } from './storage/indexedDBStorage'
import { darkTheme } from './theme/darkTheme'
import { handleError } from './utils/errorHandler'
import { downloadJson } from './utils/downloadUtils'
import { GlobalStyles } from './theme/GlobalStyles'

const App: React.FC = () => {
    const [currentEffect, setCurrentEffect] =
        useState<ParticleEffectModelJson | null>(() => {
            // Restore effect from localStorage on hot reload
            if (typeof window !== 'undefined') {
                const saved = localStorage.getItem('current-effect')
                return saved ? JSON.parse(saved) : null
            }
            return null
        })
    const [currentEffectName, setCurrentEffectName] = useState<string>(() => {
        // Restore effect name from localStorage on hot reload
        if (typeof window !== 'undefined') {
            return localStorage.getItem('current-effect-name') || ''
        }
        return ''
    })
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
            // Save to localStorage for hot reload persistence
            localStorage.setItem('current-effect', JSON.stringify(effect))
            localStorage.setItem('current-effect-name', name)
        } catch (error) {
            console.error('Failed to save new effect:', error)
        }
    }

    const handleOpenEffect = (effect: ParticleEffectModelJson) => {
        setCurrentEffect(effect)
        // Save to localStorage for hot reload persistence
        localStorage.setItem('current-effect', JSON.stringify(effect))
    }

    const handleSaveEffect = () => {
        if (!currentEffect) return

        try {
            downloadJson(currentEffect, currentEffectName || 'untitled-effect')
        } catch (error: any) {
            handleError(error, 'downloading effect')
        }
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <GlobalStyles />
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 0,
                }}
            >
                <AppHeader
                    onNewEffect={handleNewEffect}
                    onOpenEffect={handleOpenEffect}
                    onSaveEffect={handleSaveEffect}
                    currentEffect={currentEffect}
                    title={currentEffectName || 'Particle Editor'}
                />

                {currentEffect ? (
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100%',
                            p: 0,
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                width: '100%',
                                height: '100%',
                                overflowY: 'auto',
                                p: 4,
                            }}
                        >
                            <EditableTitle
                                value={currentEffectName}
                                onChange={(name) => {
                                    setCurrentEffectName(name)
                                    localStorage.setItem(
                                        'current-effect-name',
                                        name,
                                    )
                                }}
                            />
                            <Typography variant="body1" gutterBottom>
                                Effect Editor
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
                        <PreviewPanel effect={currentEffect} />
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
                                <Typography variant="body1" align="center">
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

                <ParticleEffectCreationDialog
                    open={isNewEffectDialogOpen}
                    onClose={() => setIsNewEffectDialogOpen(false)}
                    onCreate={handleCreateEffect}
                />
            </Box>
        </ThemeProvider>
    )
}

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
