import React from 'react'
import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { RecentEffectsList } from './RecentEffectsList'

interface RecentEffectsDialogProps {
    open: boolean
    onClose: () => void
}

// Create a styled Paper component for dialog background
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
}))

export const RecentEffectsDialog: React.FC<RecentEffectsDialogProps> = ({
    open,
    onClose,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            slotProps={{ paper: { component: StyledPaper } }}
        >
            <DialogTitle>Recent Effects</DialogTitle>
            <DialogContent>
                <RecentEffectsList onEffectSelected={onClose} />
            </DialogContent>
        </Dialog>
    )
}
