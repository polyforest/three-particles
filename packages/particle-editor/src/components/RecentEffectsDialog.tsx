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
import { SavedEffectMetadata } from '../storage/SavedEffectMetadata'
import { SavedEffectStorage } from '../storage/SavedEffectStorage'
import errorHandler from '../utils/errorHandler'
import { logger } from '../utils/logger'

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
    const [effectsMetadata, setEffectsMetadata] = useState<
        SavedEffectMetadata[]
    >([])
    const [loading, setLoading] = useState(true)

    const loadEffects = async () => {
        try {
            setLoading(true)
            const metadata = await storage.getAllEffectsMetadata()
            logger.debug('metadata:', metadata)
            // Sort by the last modified date, the newest first
            metadata.sort((a, b) => b.lastModified - a.lastModified)
            setEffectsMetadata(metadata)
        } catch (error) {
            logger.error('Failed to load effects metadata', error)
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
            logger.error('Failed to load effect', error, { effectId: id })
        }
    }

    const handleDeleteEffect = async (event: React.MouseEvent, id: string) => {
        event.stopPropagation()
        try {
            await storage.deleteEffect(id)
            await loadEffects()
        } catch (error) {
            logger.error('Failed to delete effect', error, { effectId: id })
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
                ) : effectsMetadata.length === 0 ? (
                    <Typography>No saved effects found.</Typography>
                ) : (
                    <List>
                        {effectsMetadata.map((metadata, index) => (
                            <React.Fragment key={metadata.id}>
                                <StyledListItem
                                    onClick={() => {
                                        handleSelectEffect(metadata.id).catch(
                                            errorHandler,
                                        )
                                    }}
                                >
                                    <ListItemText
                                        primary={metadata.name}
                                        secondary={formatDate(
                                            metadata.lastModified,
                                        )}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            onClick={(e) => {
                                                handleDeleteEffect(
                                                    e,
                                                    metadata.id,
                                                ).catch(errorHandler)
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </StyledListItem>
                                {index < effectsMetadata.length - 1 && (
                                    <Divider />
                                )}
                            </React.Fragment>
                        ))}
                    </List>
                )}
            </DialogContent>
        </Dialog>
    )
}
