import React from 'react'
import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { RecentEffectsList } from './RecentEffectsList'

interface RecentEffectsDialogProps {
    open: boolean
    onClose: () => void
    filter?: 'all' | 'deleted' | 'active'
}

// Create a styled Paper component for dialog background
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
}))

export const RecentEffectsDialog: React.FC<RecentEffectsDialogProps> = ({
    open,
    onClose,
    filter = 'active',
}) => {
    const getDialogTitle = () => {
        switch (filter) {
            case 'deleted':
                return 'Trash (items removed after 30 days)'
            case 'all':
                return 'All Effects'
            default:
                return 'Recent Effects'
        }
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            slotProps={{ paper: { component: StyledPaper } }}
        >
            <DialogTitle>{getDialogTitle()}</DialogTitle>
            <DialogContent>
                <RecentEffectsList onEffectSelected={onClose} filter={filter} />
            </DialogContent>
        </Dialog>
    )
}
