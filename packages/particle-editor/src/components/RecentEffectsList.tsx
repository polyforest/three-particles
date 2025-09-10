import React, { useEffect, useState } from 'react'
import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import RestoreIcon from '@mui/icons-material/Restore'
import { SavedEffectMetadata } from '../storage/SavedEffectMetadata'
import errorHandler from '../utils/errorHandler'
import { logger } from '../utils/logger'
import { savedEffectStorage } from '../store/storePersistence'
import { useSafeNavigate } from '../hooks/useSafeNavigate'

interface RecentEffectsListProps {
    onEffectSelected?: () => void
    filter?: 'all' | 'deleted' | 'active'
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}))

export const RecentEffectsList: React.FC<RecentEffectsListProps> = ({
    onEffectSelected,
    filter = 'active',
}) => {
    const storage = savedEffectStorage
    const [effectsMetadata, setEffectsMetadata] = useState<
        SavedEffectMetadata[]
    >([])
    const [loading, setLoading] = useState(true)
    const navigate = useSafeNavigate()

    const loadEffects = async () => {
        try {
            setLoading(true)
            const metadata = await storage.getMetadataIndex()
            logger.debug('metadata:', metadata)

            // Filter based on the filter prop
            let filterFn: (metadata: SavedEffectMetadata) => boolean
            if (filter === 'deleted') {
                filterFn = (item) => item.deleted === true
            } else if (filter === 'active') {
                filterFn = (item) => !item.deleted
            } else {
                // 'all' shows everything without filtering
                filterFn = () => true
            }
            const filteredMetadata = metadata.filter(filterFn)

            // Sort by the last modified date, the newest first
            filteredMetadata.sort((a, b) => b.lastModified - a.lastModified)
            setEffectsMetadata(filteredMetadata)
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
        navigate(`/effect/${id}`)
        onEffectSelected?.()
    }

    const handleDeleteEffect = async (event: React.MouseEvent, id: string) => {
        event.stopPropagation()
        await storage.deleteEffect(id)
        await loadEffects()
    }

    const handleRestoreEffect = async (event: React.MouseEvent, id: string) => {
        event.stopPropagation()
        await storage.restoreEffect(id)
        await loadEffects()
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
                    {effectsMetadata.map((metadata, index) => {
                        const secondaryAction = metadata.deleted ? (
                            <IconButton
                                edge="end"
                                onClick={(e) => {
                                    handleRestoreEffect(e, metadata.id).catch(
                                        errorHandler,
                                    )
                                }}
                                title={'Restore Effect'}
                            >
                                <RestoreIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                edge="end"
                                onClick={(e) => {
                                    handleDeleteEffect(e, metadata.id).catch(
                                        errorHandler,
                                    )
                                }}
                                title={'Delete Effect'}
                            >
                                <DeleteIcon />
                            </IconButton>
                        )

                        return (
                            <React.Fragment key={metadata.id}>
                                <StyledListItem
                                    onClick={() => {
                                        handleSelectEffect(metadata.id).catch(
                                            errorHandler,
                                        )
                                    }}
                                    secondaryAction={secondaryAction}
                                >
                                    <ListItemText
                                        primary={metadata.name}
                                        secondary={formatDate(
                                            metadata.lastModified,
                                        )}
                                    />
                                </StyledListItem>
                                {index < effectsMetadata.length - 1 && (
                                    <Divider />
                                )}
                            </React.Fragment>
                        )
                    })}
                </List>
            )}
        </>
    )
}
