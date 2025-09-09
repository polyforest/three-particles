import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { FileMenu } from './FileMenu'

interface AppHeaderProps {
    title: string
}

export const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}
        >
            <Toolbar>
                <FileMenu />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, ml: 2, fontWeight: 500 }}
                >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
