import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { FileMenu } from './FileMenu'
import { SavedEffect } from '../storage/SavedEffect'

interface AppHeaderProps {
    onNewEffect: () => void
    onOpenEffect: (effect: SavedEffect) => void
    onSaveEffect: (effect: SavedEffect) => void
    title: string
}

export const AppHeader: React.FC<AppHeaderProps> = ({
    onNewEffect,
    onOpenEffect,
    onSaveEffect,
    title,
}) => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}
        >
            <Toolbar>
                <FileMenu
                    onNewEffect={onNewEffect}
                    onOpenEffect={onOpenEffect}
                    onSaveEffect={onSaveEffect}
                />
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
