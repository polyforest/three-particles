import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { importEffectFromFile } from '../storage/fileStorage'
import { RecentEffectsDialog } from './RecentEffectsDialog'
import { logger } from '../utils/logger'
import { useEffectStore } from '../store/effectStore'
import { downloadJson } from '../utils/downloadUtils'
import handleError from '../utils/errorHandler'
import { ParticleEffectCreationDialog } from './ParticleEffectCreationDialog'
import { savedEffectStorage } from '../store/storePersistence'
import { useSafeNavigate } from '../hooks/useSafeNavigate'

export const FileMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [recentDialogOpen, setRecentDialogOpen] = useState(false)
    const [trashDialogOpen, setTrashDialogOpen] = useState(false)
    const [isNewEffectDialogOpen, setIsNewEffectDialogOpen] = useState(false)
    const { currentEffect } = useEffectStore()
    const navigate = useSafeNavigate()

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleNew = () => {
        setIsNewEffectDialogOpen(true)
        handleMenuClose()
    }

    const handleOpen = () => {
        ;(async () => {
            const effect = await importEffectFromFile()
            await savedEffectStorage.saveEffect(effect)
            navigate(`/effect/${effect.metadata.id}`)
        })()
            .then(handleMenuClose)
            .catch((error) => {
                logger.error('Failed to import effect', error)
            })
    }

    const handleSave = () => {
        if (currentEffect) {
            logger.info('saving effect:', currentEffect)
            try {
                downloadJson(
                    currentEffect.effect,
                    currentEffect.metadata.name || 'untitled-effect',
                )
            } catch (error: any) {
                handleError(error, 'downloading effect')
            }
        }
        handleMenuClose()
    }

    const handleOpenRecent = () => {
        setRecentDialogOpen(true)
        handleMenuClose()
    }

    const handleOpenTrash = () => {
        setTrashDialogOpen(true)
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
                <MenuItem onClick={handleOpenTrash}>Trash...</MenuItem>
                <MenuItem onClick={handleSave} disabled={!currentEffect}>
                    Download...
                </MenuItem>
            </Menu>

            <RecentEffectsDialog
                open={recentDialogOpen}
                onClose={() => setRecentDialogOpen(false)}
                filter="active"
            />
            <RecentEffectsDialog
                open={trashDialogOpen}
                onClose={() => setTrashDialogOpen(false)}
                filter="deleted"
            />
            <ParticleEffectCreationDialog
                open={isNewEffectDialogOpen}
                onClose={() => setIsNewEffectDialogOpen(false)}
            />
        </>
    )
}
