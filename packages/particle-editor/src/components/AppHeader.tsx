import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { FileMenu } from './FileMenu'

export const AppHeader: React.FC = () => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}
        >
            <Toolbar>
                <IconButton
                    component={RouterLink}
                    to="/"
                    size="small"
                    aria-label="Home"
                >
                    <Box
                        component="img"
                        src="/favicon.svg"
                        alt="Particle Editor Logo"
                        sx={{ width: 24, height: 24, display: 'block' }}
                    />
                </IconButton>
                <FileMenu />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, ml: 2, fontWeight: 500 }}
                >
                    PolyForest<sup>®</sup> Particle Editor
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
