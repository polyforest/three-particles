import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import { SavedEffectMetadata } from '../storage/SavedEffectMetadata'
import errorHandler from '../utils/errorHandler'
import { logger } from '../utils/logger'
import { SavedEffect } from '../storage/SavedEffect'
import { savedEffectStorage } from '../store/storePersistence'

interface RecentEffectsDialogProps {
    open: boolean
    onClose: () => void
    onSelectEffect: (effect: SavedEffect) => void
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

const loadAllEffects = async () => {
    const metadata = await savedEffectStorage.getAllEffectsMetadata()
    logger.debug('metadata:', metadata)
    // Sort by the last modified date, the newest first
    metadata.sort((a, b) => b.lastModified - a.lastModified)
    return metadata
}

export const RecentEffectsDialog: React.FC<RecentEffectsDialogProps> = ({
    open,
    onClose,
    onSelectEffect,
}) => {
    const [effectsMetadata, setEffectsMetadata] = useState<
        SavedEffectMetadata[]
    >([])
    const [loading, setLoading] = useState(true)
    const storage = savedEffectStorage

    const loadEffects = () => {
        setLoading(true)
        loadAllEffects()
            .then((value) => setEffectsMetadata(value))
            .catch(errorHandler)
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (open) loadEffects()
    }, [open])

    const handleSelectEffect = async (id: string) => {
        try {
            const savedEffect = await storage.getEffectById(id)
            if (savedEffect) {
                onSelectEffect(savedEffect)
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
            loadEffects()
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
