import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
    Alert,
    Box,
    Button,
    IconButton,
    TextField,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { debounce } from 'lodash'
import Visibility from '@mui/icons-material/Visibility'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useEffectStore } from '../store/effectStore'
import errorHandler from '../utils/errorHandler'
import { SavedEffect } from '../storage/SavedEffect'
import { useParams } from 'react-router-dom'
import { BoxProps } from '@mui/material/Box/Box'
import { useSafeNavigate } from '../hooks/useSafeNavigate'

const JsonEditor = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        fontFamily: 'Monaco, "Courier New", monospace',
        fontSize: '14px',
        lineHeight: '1.5',
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(2),
    },
}))

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
}))

interface SourceEditorProps extends BoxProps {
    isPreviewVisible: boolean
    setIsPreviewVisible: (visible: boolean) => void
}

export const SourceEditor: React.FC<SourceEditorProps> = ({
    isPreviewVisible,
    setIsPreviewVisible,
    ...boxProps
}) => {
    const { currentEffect, setCurrentEffect } = useEffectStore()
    const navigate = useSafeNavigate()
    const { id } = useParams<{ id: string }>()
    const [sourceCode, setSourceCode] = useState('')
    const [isDirty, setIsDirty] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [lastSavedSource, setLastSavedSource] = useState('')

    const initialLoadRef = useRef(false)

    // Initialize source code when effect loads
    useEffect(() => {
        if (currentEffect && !initialLoadRef.current) {
            const formatted = JSON.stringify(currentEffect.effect, null, 2)
            setSourceCode(formatted)
            setLastSavedSource(formatted)
            initialLoadRef.current = true
        }
    }, [currentEffect])

    // Save function
    const saveEffect = useCallback(
        (source: string) => {
            ;(async () => {
                if (!currentEffect) return

                try {
                    const parsedEffect = JSON.parse(source)

                    // Update the effect
                    const updatedEffect: SavedEffect = {
                        ...currentEffect,
                        effect: parsedEffect,
                        lastModified: Date.now(),
                    }
                    setCurrentEffect(updatedEffect)
                    setLastSavedSource(source)
                    setIsDirty(false)
                    setError(null)
                } catch (err) {
                    setError(
                        err instanceof Error ? err.message : 'Invalid JSON',
                    )
                }
            })().catch(errorHandler)
        },
        [currentEffect, setCurrentEffect],
    )

    // Debounced save function using lodash
    const debouncedSave = useMemo(
        () => debounce(saveEffect, 1000),
        [saveEffect],
    )

    // Handle source code changes
    const handleSourceChange = useCallback(
        (newSource: string) => {
            setSourceCode(newSource)
            setIsDirty(newSource !== lastSavedSource)
            debouncedSave(newSource)
        },
        [debouncedSave, lastSavedSource],
    )

    // Cleanup debounced function on unmount
    useEffect(() => {
        return () => {
            debouncedSave.cancel()
        }
    }, [debouncedSave])

    const handleFormatJson = () => {
        try {
            const parsed = JSON.parse(sourceCode)
            const formatted = JSON.stringify(parsed, null, 2)
            setSourceCode(formatted)
            handleSourceChange(formatted)
        } catch (err) {
            setError('Cannot format invalid JSON')
        }
    }

    if (!currentEffect) {
        return (
            <Box {...boxProps} sx={{ ...boxProps.sx, p: 4 }}>
                <Typography variant="h6">Loading effect...</Typography>
            </Box>
        )
    }

    return (
        <Box
            {...boxProps}
            sx={{
                ...boxProps.sx,
                overflowY: 'auto',
                p: 4,
            }}
        >
            <ButtonContainer>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => id && navigate(`/effect/${id}`)}
                >
                    Back
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleFormatJson}
                    disabled={!sourceCode.trim()}
                >
                    Format JSON
                </Button>
                {isDirty && (
                    <Typography
                        variant="body2"
                        sx={{
                            alignSelf: 'center',
                            color: 'warning.main',
                        }}
                    >
                        Unsaved changes (auto-save in 1s)
                    </Typography>
                )}
            </ButtonContainer>

            {error && (
                <Alert
                    severity="error"
                    sx={{ mb: 2 }}
                    onClose={() => setError(null)}
                >
                    {error}
                </Alert>
            )}

            <JsonEditor
                multiline
                fullWidth
                variant="outlined"
                value={sourceCode}
                onChange={(e) => handleSourceChange(e.target.value)}
                placeholder="Enter JSON for the particle effect..."
                sx={{
                    flex: 1,
                    '& .MuiOutlined-notchedOutline': {
                        borderColor: error ? 'error.main' : undefined,
                    },
                }}
            />

            {!isPreviewVisible && (
                <IconButton
                    sx={{
                        position: 'absolute',
                        right: '24px',
                        top: '10px',
                    }}
                    onClick={() => setIsPreviewVisible(true)}
                    color="primary"
                    title="Show Preview"
                >
                    <Visibility />
                </IconButton>
            )}
        </Box>
    )
}
