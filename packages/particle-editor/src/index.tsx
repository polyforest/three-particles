import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import {
    CssBaseline,
    Container,
    Box,
    Card,
    CardContent,
    Typography,
} from '@mui/material'
import { ParticleEffectModelJson } from 'three-particles'
import { AppHeader } from './components/AppHeader'
import { ParticleEffectCreationDialog } from './components/ParticleEffectCreationDialog'
import { saveEffect, updateEffect } from './storage/indexedDBStorage'

const App: React.FC = () => {
    const [currentEffect, setCurrentEffect] =
        useState<ParticleEffectModelJson | null>(null)
    const [currentEffectId, setCurrentEffectId] = useState<string | null>(null)
    const [currentEffectName, setCurrentEffectName] = useState<string>('')
    const [isNewEffectDialogOpen, setIsNewEffectDialogOpen] = useState(false)

    const handleNewEffect = () => {
        setIsNewEffectDialogOpen(true)
    }

    const handleCreateEffect = async (
        name: string,
        effect: ParticleEffectModelJson,
    ) => {
        try {
            const id = await saveEffect(name, effect)
            setCurrentEffect(effect)
            setCurrentEffectId(id)
            setCurrentEffectName(name)
        } catch (error) {
            console.error('Failed to save new effect:', error)
        }
    }

    const handleOpenEffect = (effect: ParticleEffectModelJson) => {
        setCurrentEffect(effect)
    }

    const handleSaveEffect = async (name: string) => {
        if (!currentEffect) return

        try {
            if (currentEffectId) {
                await updateEffect(currentEffectId, name, currentEffect)
            } else {
                const id = await saveEffect(name, currentEffect)
                setCurrentEffectId(id)
            }
            setCurrentEffectName(name)
        } catch (error) {
            console.error('Failed to save effect:', error)
        }
    }

    return (
        <>
            <CssBaseline />
            <AppHeader
                onNewEffect={handleNewEffect}
                onOpenEffect={handleOpenEffect}
                onSaveEffect={handleSaveEffect}
                currentEffect={currentEffect}
                title={currentEffectName || 'Particle Editor'}
            />

            <Container maxWidth="lg" sx={{ mt: 4 }}>
                {currentEffect ? (
                    <Box sx={{ p: 2 }}>
                        {/* Placeholder for actual particle editor UI */}
                        <Typography variant="h5" gutterBottom>
                            Editing: {currentEffectName || 'Untitled Effect'}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Particle Editor UI will be implemented here
                        </Typography>
                        <pre
                            style={{
                                background: '#f5f5f5',
                                padding: '1rem',
                                borderRadius: '4px',
                                overflow: 'auto',
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
                        <Card sx={{ maxWidth: 600, width: '100%' }}>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    gutterBottom
                                    align="center"
                                >
                                    Welcome to the Particle Editor
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
        </>
    )
}

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
