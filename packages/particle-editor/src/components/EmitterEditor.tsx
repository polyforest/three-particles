import React from 'react'
import { Box, Typography, Alert } from '@mui/material'
import { useEffectStore } from '../store/effectStore'
import { useParams } from 'react-router-dom'
import { EditableTitle } from './EditableTitle'

export const EmitterEditor: React.FC = () => {
    const { currentEffect, updateEmitter } = useEffectStore()
    const { emitterId } = useParams<{ emitterId: string }>()

    if (!currentEffect) {
        return (
            <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                    No effect loaded
                </Typography>
            </Box>
        )
    }

    const emitters = currentEffect.effect.emitters || []

    if (emitters.length === 0) {
        return (
            <Box sx={{ p: 4 }}>
                <Alert severity="info">
                    No emitters found. Use the "Emitters" button to add
                    emitters.
                </Alert>
            </Box>
        )
    }

    // If no specific emitter ID, show the first emitter
    const targetEmitterId =
        emitterId || (emitters.length > 0 ? emitters[0].uuid : null)
    const emitter = emitters.find((e) => e.uuid === targetEmitterId)

    if (emitterId && !emitter) {
        return (
            <Box sx={{ p: 4 }}>
                <Alert severity="error">
                    Emitter "{emitterId}" could not be found.
                </Alert>
            </Box>
        )
    }

    if (!emitter) {
        return (
            <Box sx={{ p: 4 }}>
                <Alert severity="info">No emitter selected.</Alert>
            </Box>
        )
    }

    return (
        <Box sx={{ minWidth: '400px' }}>
            <EditableTitle
                label="EMITTER"
                value={emitter.name || ''}
                onChange={(newName) =>
                    updateEmitter({ ...emitter, name: newName })
                }
                defaultValue={`[Untitled Emitter]`}
            />

            <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ mb: 3 }}
            >
                Emitter editor interface will be implemented here.
            </Typography>
        </Box>
    )
}
