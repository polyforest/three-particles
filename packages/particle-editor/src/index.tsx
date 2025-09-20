import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Box, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme } from './theme/darkTheme'
import { GlobalStyles } from './theme/GlobalStyles'
import { useEffectStorePersistence } from './store/storePersistence'
import { useEffect } from 'react'
import { useEffectStore } from './store/effectStore'
import { EffectEditor } from './components/EffectEditor'
import { WelcomeScreen } from './components/WelcomeScreen'

const App: React.FC = () => {
    // Enable auto-save persistence for effect changes
    useEffectStorePersistence()

    // Global undo/redo hotkeys (Cmd/Ctrl+Z and Shift+Cmd/Ctrl+Z)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const isMac = /Mac|iPhone|iPad|iPod/i.test(
                navigator.platform || navigator.userAgent,
            )
            const mod = isMac ? e.metaKey : e.ctrlKey
            if (!mod) return
            const key = e.key.toLowerCase()
            if (key === 'z') {
                const state = useEffectStore.getState()
                if (e.shiftKey) {
                    if (state.canRedo()) {
                        e.preventDefault()
                        state.redo()
                    }
                } else {
                    if (state.canUndo()) {
                        e.preventDefault()
                        state.undo()
                    }
                }
            }
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

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
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<WelcomeScreen />} />
                        <Route path="/effect/:id" element={<EffectEditor />} />
                        <Route
                            path="/effect/:id/source"
                            element={<EffectEditor />}
                        />
                        <Route
                            path="/effect/:id/emitters"
                            element={<EffectEditor />}
                        />
                        <Route
                            path="/effect/:id/emitter/:emitterId"
                            element={<EffectEditor />}
                        />
                        <Route
                            path="/effect/:id/emitters"
                            element={<EffectEditor />}
                        />
                        <Route
                            path="/effect/:id/emitter/:emitterId"
                            element={<EffectEditor />}
                        />
                    </Routes>
                </HashRouter>
            </Box>
        </ThemeProvider>
    )
}

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
