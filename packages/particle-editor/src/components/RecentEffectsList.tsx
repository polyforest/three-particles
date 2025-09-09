import React, { useEffect, useState } from 'react'
import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import { SavedEffectMetadata } from '../storage/SavedEffectMetadata'
import errorHandler from '../utils/errorHandler'
import { logger } from '../utils/logger'
import { useEffectStore } from '../store/effectStore'
import { savedEffectStorage } from '../store/storePersistence'

interface RecentEffectsListProps {
    onEffectSelected?: () => void
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}))

export const RecentEffectsList: React.FC<RecentEffectsListProps> = ({
    onEffectSelected,
}) => {
    const storage = savedEffectStorage
    const [effectsMetadata, setEffectsMetadata] = useState<
        SavedEffectMetadata[]
    >([])
    const [loading, setLoading] = useState(true)
    const { setCurrentEffect } = useEffectStore()

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
        loadEffects().catch(errorHandler)
    }, [])

    const handleSelectEffect = async (id: string) => {
        try {
            const savedEffect = await storage.getEffectById(id)
            if (savedEffect) {
                setCurrentEffect(savedEffect)
                onEffectSelected?.()
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
        <>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : effectsMetadata.length === 0 ? (
                <Typography color="text.secondary">
                    No saved effects found.
                </Typography>
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
                            {index < effectsMetadata.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            )}
        </>
    )
}
