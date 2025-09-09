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
import { savedEffectStorage } from '../store/storePersistence'
import errorHandler from '../utils/errorHandler'
import { useSafeNavigate } from '../hooks/useSafeNavigate'

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
    const navigate = useSafeNavigate()

    const handleCreate = () => {
        ;(async () => {
            const newEffect = createNewEffect(name)
            await savedEffectStorage.saveEffect(newEffect)
            navigate(`/effect/${newEffect.id}`)
            onClose()
        })().catch(errorHandler)
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
