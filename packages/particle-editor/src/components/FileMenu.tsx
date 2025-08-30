import React, { useState } from 'react'
import {
    Button,
    Menu,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from '@mui/material'
import { ParticleEffectModelJson } from 'three-particles'
import {
    exportEffectToFile,
    importEffectFromFile,
} from '../storage/fileStorage'
import { RecentEffectsDialog } from './RecentEffectsDialog'

interface FileMenuProps {
    onNewEffect: () => void
    onOpenEffect: (effect: ParticleEffectModelJson) => void
    onSaveEffect: (name: string) => void
    currentEffect: ParticleEffectModelJson | null
}

export const FileMenu: React.FC<FileMenuProps> = ({
    onNewEffect,
    onOpenEffect,
    onSaveEffect,
    currentEffect,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [saveDialogOpen, setSaveDialogOpen] = useState(false)
    const [recentDialogOpen, setRecentDialogOpen] = useState(false)
    const [filename, setFilename] = useState('MyParticleEffect')

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
        setSaveDialogOpen(true)
        handleMenuClose()
    }

    const handleSaveConfirm = () => {
        if (currentEffect) {
            onSaveEffect(filename)
            exportEffectToFile(currentEffect, filename)
        }
        setSaveDialogOpen(false)
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
                    Save As...
                </MenuItem>
            </Menu>

            <Dialog
                open={saveDialogOpen}
                onClose={() => setSaveDialogOpen(false)}
            >
                <DialogTitle>Save Particle Effect</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Filename"
                        fullWidth
                        value={filename}
                        onChange={(e) => setFilename(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSaveDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSaveConfirm}>Save</Button>
                </DialogActions>
            </Dialog>

            <RecentEffectsDialog
                open={recentDialogOpen}
                onClose={() => setRecentDialogOpen(false)}
                onSelectEffect={onOpenEffect}
            />
        </>
    )
}
