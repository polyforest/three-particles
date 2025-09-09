import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import { RecentEffectsList } from './RecentEffectsList'
import React from 'react'
import { AppHeader } from './AppHeader'

export const WelcomeScreen: React.FC = () => {
    return (
        <>
            <AppHeader />
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
                            Create a new particle effect or open an existing one
                            to get started.
                        </Typography>
                        <Typography
                            variant="body2"
                            align="center"
                            color="text.secondary"
                        >
                            Use the File menu in the top left to create a new
                            effect or open an existing one.
                        </Typography>
                        <Divider sx={{ mt: 2 }} />
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Recent Effects
                        </Typography>
                        <RecentEffectsList />
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
