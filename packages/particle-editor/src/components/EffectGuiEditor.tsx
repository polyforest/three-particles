import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { EditableTitle } from './EditableTitle'
import EditIcon from '@mui/icons-material/Edit'
import ListIcon from '@mui/icons-material/List'
import { useEffectStore } from '../store/effectStore'
import { useParams } from 'react-router-dom'
import { useSafeNavigate } from '../hooks/useSafeNavigate'
import { BoxProps } from '@mui/material/Box/Box'
import { EmitterEditor } from './EmitterEditor'

export const EffectGuiEditor: React.FC<BoxProps> = (boxProps: BoxProps) => {
    const { currentEffect, updateName } = useEffectStore()
    const navigate = useSafeNavigate()
    const { id } = useParams<{ id: string }>()

    const handleEditSource = () => {
        if (id) {
            navigate(`/effect/${id}/source`)
        }
    }

    const handleOpenEmitterList = () => {
        if (id) {
            navigate(`/effect/${id}/emitters`)
        }
    }

    if (!currentEffect) return null

    return (
        <Box
            {...boxProps}
            sx={{
                ...boxProps.sx,
                overflow: 'auto',
                p: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    minWidth: '400px',
                }}
            >
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        variant="outlined"
                        startIcon={<ListIcon />}
                        onClick={handleOpenEmitterList}
                        size="small"
                    >
                        Emitters
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={handleEditSource}
                        size="small"
                    >
                        Source
                    </Button>
                </Box>
            </Box>
            <EditableTitle
                value={currentEffect.metadata.name}
                onChange={updateName}
            />
            <EmitterEditor />
        </Box>
    )
}
