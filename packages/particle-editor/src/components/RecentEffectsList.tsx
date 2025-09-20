import React, { useEffect } from 'react'
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
import errorHandler from '../utils/errorHandler'
import { useSafeNavigate } from '../hooks/useSafeNavigate'
import { useRecentEffectsStore } from '../store/recentEffectsStore'

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
    const { metadataIndex, loading, loadIndex, deleteEffect, undeleteEffect } =
        useRecentEffectsStore()
    const navigate = useSafeNavigate()

    useEffect(() => {
        loadIndex().catch(errorHandler)
    }, [])

    const effectsMetadata = React.useMemo(() => {
        let filterFn: (metadata: any) => boolean
        if (filter === 'deleted') {
            filterFn = (item) => item.deleted === true
        } else if (filter === 'active') {
            filterFn = (item) => !item.deleted
        } else {
            // 'all' shows everything without filtering
            filterFn = () => true
        }
        return metadataIndex.filter(filterFn)
    }, [metadataIndex, filter])

    const handleSelectEffect = async (id: string) => {
        navigate(`/effect/${id}`)
        onEffectSelected?.()
    }

    const handleDeleteEffect = async (event: React.MouseEvent, id: string) => {
        event.stopPropagation()
        await deleteEffect(id)
    }

    const handleRestoreEffect = async (event: React.MouseEvent, id: string) => {
        event.stopPropagation()
        await undeleteEffect(id)
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
