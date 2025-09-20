import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Switch,
    IconButton,
    Button,
    Typography,
    Tooltip,
    ListItemButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useEffectStore } from '../store/effectStore'
import { useParams } from 'react-router-dom'
import { useSafeNavigate } from '../hooks/useSafeNavigate'
import { MathUtils } from 'three'
import { ParticleEmitterModelJson } from 'three-particles'

export const EmitterList: React.FC = () => {
    const { currentEffect, updateEffect, addEmitter, canUndo } =
        useEffectStore()
    const navigate = useSafeNavigate()
    const { id } = useParams<{ id: string }>()

    if (!currentEffect) return null

    const emitters = currentEffect.effect.emitters || []

    const handleEmitterClick = (emitterUuid: string) => {
        if (id) {
            navigate(`/effect/${id}/emitter/${emitterUuid}`)
        }
    }

    const handleToggleEnabled = (index: number) => {
        const updatedEmitters = [...emitters]
        updatedEmitters[index] = {
            ...updatedEmitters[index],
            enabled: !updatedEmitters[index].enabled,
        }
        updateEffect({
            ...currentEffect.effect,
            emitters: updatedEmitters,
        })
    }

    const handleToggleAll = () => {
        const hasEnabledEmitters = emitters.some((emitter) => emitter.enabled)
        const updatedEmitters = emitters.map((emitter) => ({
            ...emitter,
            enabled: !hasEnabledEmitters,
        }))
        updateEffect({
            ...currentEffect.effect,
            emitters: updatedEmitters,
        })
    }

    const handleAddEmitter = () => {
        const newEmitter = {
            uuid: MathUtils.generateUUID(),
            enabled: true,
            loops: true,
            count: 100,
            duration: {
                duration: { min: 10, max: 10, ease: 'linear' },
                delayBefore: { min: 0, max: 0, ease: 'linear' },
                delayAfter: { min: 0, max: 0, ease: 'linear' },
            },
            emissionRate: {
                property: 'emissionRate',
                relative: false,
                low: { min: 10, max: 10, ease: 'linear' },
                high: { min: 10, max: 10, ease: 'linear' },
                timeline: [0, 1],
            },
            particleLifeExpectancy: {
                property: 'particleLifeExpectancy',
                relative: false,
                low: { min: 2, max: 2, ease: 'linear' },
                high: { min: 2, max: 2, ease: 'linear' },
                timeline: [0, 1],
            },
            spawn: { type: 'point' as const, w: 0, h: 0, d: 0 },
            orientToForwardDirection: false,
            propertyTimelines: [],
            material: null,
        } as const satisfies ParticleEmitterModelJson

        addEmitter(newEmitter)

        // Navigate to the new emitter
        if (id) {
            navigate(`/effect/${id}/emitter/${newEmitter.uuid}`)
        }
    }

    const handleRemoveEmitter = (index: number) => {
        const updatedEmitters = emitters.filter((_, i) => i !== index)
        updateEffect({
            ...currentEffect.effect,
            emitters: updatedEmitters,
        })
    }

    return (
        <Box
            sx={{
                p: 3,
                height: '100%',
                overflow: 'auto',
                width: '100%',
                maxWidth: 500,
                minWidth: 400,
                mx: 'auto',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                }}
            >
                <Typography variant="h6">Emitters</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddEmitter}
                    size="small"
                    sx={{ ml: 'auto' }}
                >
                    Add
                </Button>
            </Box>

            {emitters.length === 0 ? (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center', py: 4 }}
                >
                    No emitters found. Click "Add Emitter" to create one.
                </Typography>
            ) : (
                <>
                    <List>
                        {emitters.map((emitter, index) => (
                            <ListItem
                                key={emitter.uuid}
                                sx={{
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 1,
                                    mb: 1,
                                    p: 0,
                                }}
                            >
                                <ListItemButton
                                    onClick={() =>
                                        handleEmitterClick(emitter.uuid!)
                                    }
                                    sx={{ flex: 1 }}
                                >
                                    <ListItemText
                                        primary={
                                            emitter.uuid ||
                                            `Emitter ${index + 1}`
                                        }
                                        secondary={`${emitter.count || 0} particles`}
                                    />
                                </ListItemButton>
                                <ListItemSecondaryAction sx={{ right: 8 }}>
                                    <Switch
                                        edge="end"
                                        checked={emitter.enabled !== false}
                                        onChange={(e) => {
                                            e.stopPropagation()
                                            handleToggleEnabled(index)
                                        }}
                                        color="primary"
                                        size="small"
                                    />
                                    <Tooltip title="Delete Emitter">
                                        <IconButton
                                            edge="end"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleRemoveEmitter(index)
                                            }}
                                            size="small"
                                            sx={{ ml: 1 }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>

                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={handleToggleAll}
                            size="small"
                        >
                            {emitters.some((e) => e.enabled)
                                ? 'Disable All'
                                : 'Enable All'}
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    )
}
