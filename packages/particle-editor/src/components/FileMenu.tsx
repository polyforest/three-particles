import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { ParticleEffectModelJson } from 'three-particles'
import { importEffectFromFile } from '../storage/fileStorage'
import { RecentEffectsDialog } from './RecentEffectsDialog'
import { SavedEffectStorage } from '../storage/SavedEffectStorage'
import { logger } from '../utils/logger'

interface FileMenuProps {
    onNewEffect: () => void
    onOpenEffect: (effect: ParticleEffectModelJson) => void
    onSaveEffect: () => void
    currentEffect: ParticleEffectModelJson | null
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
            const { filename, effect } = await importEffectFromFile()

            // Save the imported effect to storage
            try {
                await storage.saveEffect(filename, effect)
                logger.info('Imported and saved effect', { filename })
            } catch (saveError) {
                logger.error('Failed to save imported effect', saveError, {
                    filename,
                })
                // Continue even if save fails - user can still work with the effect
            }

            await onOpenEffect(effect, filename)
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
