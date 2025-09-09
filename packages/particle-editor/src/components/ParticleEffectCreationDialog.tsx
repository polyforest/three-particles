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
import { createNewEffect } from '../storage/SavedEffect'
import { useEffectStore } from '../store/effectStore'

interface ParticleEffectCreationDialogProps {
    open: boolean
    onClose: () => void
}

// Create a styled Paper component for dialog background
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
}))

export const ParticleEffectCreationDialog: React.FC<
    ParticleEffectCreationDialogProps
> = ({ open, onClose }) => {
    const [name, setName] = useState('New Particle Effect')
    const { setCurrentEffect } = useEffectStore()

    const handleCreate = () => {
        setCurrentEffect(createNewEffect(name))
        onClose()
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
