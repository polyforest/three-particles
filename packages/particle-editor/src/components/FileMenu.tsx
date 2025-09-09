import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { importEffectFromFile } from '../storage/fileStorage'
import { RecentEffectsDialog } from './RecentEffectsDialog'
import { logger } from '../utils/logger'
import { SavedEffect } from '../storage/SavedEffect'
import { useEffectStore } from '../store/effectStore'

interface FileMenuProps {
    onNewEffect: () => void
    onOpenEffect: (effect: SavedEffect) => void
    onSaveEffect: (effect: SavedEffect) => void
}

export const FileMenu: React.FC<FileMenuProps> = ({
    onNewEffect,
    onOpenEffect,
    onSaveEffect,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [recentDialogOpen, setRecentDialogOpen] = useState(false)
    const { currentEffect } = useEffectStore()

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
            const savedEffect = await importEffectFromFile()
            onOpenEffect(savedEffect)
        })()
            .then(handleMenuClose)
            .catch((error) => {
                logger.error('Failed to import effect', error)
            })
    }

    const handleSave = () => {
        if (currentEffect) {
            onSaveEffect(currentEffect)
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
