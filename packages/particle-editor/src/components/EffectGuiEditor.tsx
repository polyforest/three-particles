import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { EditableTitle } from './EditableTitle'
import EditIcon from '@mui/icons-material/Edit'
import { useEffectStore } from '../store/effectStore'
import { useParams } from 'react-router-dom'
import { useSafeNavigate } from '../hooks/useSafeNavigate'
import { BoxProps } from '@mui/material/Box/Box'

export const EffectGuiEditor: React.FC<BoxProps> = (boxProps: BoxProps) => {
    const { currentEffect, updateName } = useEffectStore()
    const navigate = useSafeNavigate()
    const { id } = useParams<{ id: string }>()

    const handleEditSource = () => {
        if (id) {
            navigate(`/effect/${id}/source`)
        }
    }

    if (!currentEffect) return null

    return (
        <Box
            {...boxProps}
            sx={{
                ...boxProps.sx,
                overflowY: 'auto',
                p: 4,
            }}
        >
            <EditableTitle
                value={currentEffect.metadata.name}
                onChange={updateName}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Typography variant="body1">Effect Editor</Typography>
                <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={handleEditSource}
                    size="small"
                >
                    Edit Source
                </Button>
            </Box>
            <pre
                style={{
                    background: '#2a2a2a',
                    padding: '1rem',
                    borderRadius: '4px',
                    overflow: 'auto',
                    color: '#e0e0e0',
                }}
            >
                {JSON.stringify(currentEffect.effect, null, 2)}
            </pre>
        </Box>
    )
}
