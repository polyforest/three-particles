import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { importEffectFromFile } from '../storage/fileStorage'
import { RecentEffectsDialog } from './RecentEffectsDialog'
import { SavedEffectStorage } from '../storage/SavedEffectStorage'
import { logger } from '../utils/logger'
import { SavedEffect } from '../storage/SavedEffect'

interface FileMenuProps {
    onNewEffect: () => void
    onOpenEffect: (effect: SavedEffect) => void
    onSaveEffect: () => void
    currentEffect: SavedEffect | null
    storage: SavedEffectStorage
}

export const FileMenu: React.FC<FileMenuProps> = ({
    onNewEffect,
    onOpenEffect,
    onSaveEffect,
    currentEffect,
    storage,
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
            const savedEffect = await importEffectFromFile()

            // Save the imported effect to storage
            try {
                await storage.saveEffect(savedEffect)
                logger.info('Imported and saved effect', {
                    name: savedEffect.name,
                })
            } catch (saveError) {
                logger.error('Failed to save imported effect', saveError, {
                    name: savedEffect.name,
                })
                // Continue even if save fails - user can still work with the effect
            }

            onOpenEffect(savedEffect)
        })()
            .then(handleMenuClose)
            .catch((error) => {
                logger.error('Failed to import effect', error)
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
                storage={storage}
            />
        </>
    )
}
