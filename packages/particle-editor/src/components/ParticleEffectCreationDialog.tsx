import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    TextField,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { createNewEffect, SavedEffect } from '../storage/SavedEffect'
import logger from '../utils/logger'

interface ParticleEffectCreationDialogProps {
    open: boolean
    onClose: () => void
    onCreate: (savedEffect: SavedEffect) => Promise<void>
}

// Create a styled Paper component for dialog background
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
}))

export const ParticleEffectCreationDialog: React.FC<
    ParticleEffectCreationDialogProps
> = ({ open, onClose, onCreate }) => {
    const [name, setName] = useState('New Particle Effect')

    const handleCreate = () => {
        const savedEffect = createNewEffect(name)

        onCreate(savedEffect)
            .then(onClose)
            .catch((error) => {
                logger.error('Failed to create particle effect', error, {
                    name,
                })
            })
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            slotProps={{
                paper: { component: StyledPaper },
            }}
        >
            <DialogTitle>Create New Particle Effect</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Effect Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={handleCreate}
                    variant="contained"
                    color="primary"
                >
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}
