import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    Box,
} from '@mui/material'

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Box sx={{ minWidth: 275, margin: 2 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Particle Editor
                        </Typography>
                        <Typography variant="body2">
                            Welcome to the Particle Editor! This is a
                            Material-UI example component. You can use this card
                            as a container for particle system controls.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Create Particle System</Button>
                        <Button size="small">Reset</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
