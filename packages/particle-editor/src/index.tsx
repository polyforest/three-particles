import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import {
    Box,
    Card,
    CardContent,
    CssBaseline,
    Divider,
    Typography,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AppHeader } from './components/AppHeader'
import { EditableTitle } from './components/EditableTitle'
import { PreviewPanel } from './components/PreviewPanel'
import { RecentEffectsList } from './components/RecentEffectsList'
import { useEffectStore } from './store/effectStore'
import { darkTheme } from './theme/darkTheme'
import { GlobalStyles } from './theme/GlobalStyles'
import { useEffectStorePersistence } from './store/storePersistence'

const App: React.FC = () => {
    const { currentEffect, updateName } = useEffectStore()

    // Enable auto-save persistence for effect changes
    useEffectStorePersistence()

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
                <AppHeader title={currentEffect?.name || 'Particle Editor'} />

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
                                value={currentEffect.name}
                                onChange={updateName}
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
                                {JSON.stringify(currentEffect.effect, null, 2)}
                            </pre>
                        </Box>
                        <PreviewPanel />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '70vh',
                            p: 4,
                        }}
                    >
                        <Card
                            sx={{
                                maxWidth: 600,
                                width: '100%',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                                mb: 4,
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
                                <Divider sx={{ mt: 2 }} />
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ mt: 3 }}
                                >
                                    Recent Effects
                                </Typography>
                                <RecentEffectsList />
                            </CardContent>
                        </Card>
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    )
}

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
