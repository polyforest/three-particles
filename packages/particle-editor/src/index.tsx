import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Box, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme } from './theme/darkTheme'
import { GlobalStyles } from './theme/GlobalStyles'
import { useEffectStorePersistence } from './store/storePersistence'
import { EffectEditor } from './components/EffectEditor'
import { WelcomeScreen } from './components/WelcomeScreen'

const App: React.FC = () => {
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
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<WelcomeScreen />} />
                        <Route path="/effect/:id" element={<EffectEditor />} />
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
