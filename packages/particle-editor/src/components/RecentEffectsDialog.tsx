import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Typography,
    Divider,
    Paper,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import { ParticleEffectModelJson } from 'three-particles'
import { SavedEffect } from '../storage/SavedEffect'
import { SavedEffectStorage } from '../storage/SavedEffectStorage'
import errorHandler from '../utils/errorHandler'

interface RecentEffectsDialogProps {
    open: boolean
    onClose: () => void
    onSelectEffect: (effect: ParticleEffectModelJson) => void
    storage: SavedEffectStorage
}

// Create a styled Paper component for dialog background
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
}))

const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}))

export const RecentEffectsDialog: React.FC<RecentEffectsDialogProps> = ({
    open,
    onClose,
    onSelectEffect,
    storage,
}) => {
    const [effects, setEffects] = useState<SavedEffect[]>([])
    const [loading, setLoading] = useState(true)

    const loadEffects = async () => {
        try {
            setLoading(true)
            const savedEffects = await storage.getAllEffects()
            // Sort by the last modified date, the newest first
            savedEffects.sort((a, b) => b.lastModified - a.lastModified)
            setEffects(savedEffects)
        } catch (error) {
            console.error('Failed to load effects:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (open) {
            loadEffects().catch(errorHandler)
        }
    }, [open])

    const handleSelectEffect = async (id: string) => {
        try {
            const savedEffect = await storage.getEffectById(id)
            if (savedEffect) {
                onSelectEffect(savedEffect.effect)
                onClose()
            }
        } catch (error) {
            console.error('Failed to load effect:', error)
        }
    }

    const handleDeleteEffect = async (event: React.MouseEvent, id: string) => {
        event.stopPropagation()
        try {
            await storage.deleteEffect(id)
            await loadEffects()
        } catch (error) {
            console.error('Failed to delete effect:', error)
        }
    }

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleString()
    }

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
                {loading ? (
                    <Typography>Loading...</Typography>
                ) : effects.length === 0 ? (
                    <Typography>No saved effects found.</Typography>
                ) : (
                    <List>
                        {effects.map((effect, index) => (
                            <React.Fragment key={effect.id}>
                                <StyledListItem
                                    onClick={() => {
                                        handleSelectEffect(effect.id).catch(
                                            errorHandler,
                                        )
                                    }}
                                >
                                    <ListItemText
                                        primary={effect.name}
                                        secondary={formatDate(
                                            effect.lastModified,
                                        )}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            onClick={(e) => {
                                                handleDeleteEffect(
                                                    e,
                                                    effect.id,
                                                ).catch(errorHandler)
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </StyledListItem>
                                {index < effects.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                )}
            </DialogContent>
        </Dialog>
    )
}
