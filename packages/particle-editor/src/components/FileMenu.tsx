import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { ParticleEffectModelJson } from 'three-particles'
import { importEffectFromFile } from '../storage/fileStorage'
import { RecentEffectsDialog } from './RecentEffectsDialog'

interface FileMenuProps {
    onNewEffect: () => void
    onOpenEffect: (effect: ParticleEffectModelJson) => void
    onSaveEffect: () => void
    currentEffect: ParticleEffectModelJson | null
}

export const FileMenu: React.FC<FileMenuProps> = ({
    onNewEffect,
    onOpenEffect,
    onSaveEffect,
    currentEffect,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [recentDialogOpen, setRecentDialogOpen] = useState(false)

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleNew = () => {
        onNewEffect()
        handleMenuClose()
    }

    const handleOpen = () => {
        ;(async () => {
            const { effect } = await importEffectFromFile()
            onOpenEffect(effect)
        })()
            .then(handleMenuClose)
            .catch((error) => {
                console.error('Failed to import effect:', error)
            })
    }

    const handleSave = () => {
        if (currentEffect) {
            onSaveEffect()
        }
        handleMenuClose()
    }

    const handleOpenRecent = () => {
        setRecentDialogOpen(true)
        handleMenuClose()
    }

    return (
        <>
            <Button
                color="inherit"
                onClick={handleMenuOpen}
                sx={{
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                }}
            >
                File
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: '8px',
                        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <MenuItem onClick={handleNew}>New Effect</MenuItem>
                <MenuItem onClick={handleOpen}>Open...</MenuItem>
                <MenuItem onClick={handleOpenRecent}>
                    Recent Effects...
                </MenuItem>
                <MenuItem onClick={handleSave} disabled={!currentEffect}>
                    Download...
                </MenuItem>
            </Menu>

            <RecentEffectsDialog
                open={recentDialogOpen}
                onClose={() => setRecentDialogOpen(false)}
                onSelectEffect={onOpenEffect}
            />
        </>
    )
}
