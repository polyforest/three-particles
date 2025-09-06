import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { ParticleEffectModelJson } from 'three-particles'
import { FileMenu } from './FileMenu'
import { SavedEffectStorage } from '../storage/SavedEffectStorage'

interface AppHeaderProps {
    onNewEffect: () => void
    onOpenEffect: (effect: ParticleEffectModelJson) => void
    onSaveEffect: () => void
    currentEffect: ParticleEffectModelJson | null
    title: string
    storage: SavedEffectStorage
}

export const AppHeader: React.FC<AppHeaderProps> = ({
    onNewEffect,
    onOpenEffect,
    onSaveEffect,
    currentEffect,
    title,
    storage,
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
                    currentEffect={currentEffect}
                    storage={storage}
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
