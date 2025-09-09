import { Box, Typography, Divider, IconButton } from '@mui/material'
import { EditableTitle } from './EditableTitle'
import { PreviewPanel } from './PreviewPanel'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import { Resizable } from 're-resizable'
import { styled } from '@mui/material/styles'
import { useEffectStore } from '../store/effectStore'
import { useEffectRouting } from '../hooks/useEffectRouting'
import { AppHeader } from './AppHeader'

const StyledDivider = styled(Divider)(({ theme }) => ({
    width: '4px',
    cursor: 'col-resize',
    margin: '0 -2px',
    background: theme.palette.divider,
    '&:hover': {
        background: theme.palette.primary.main,
    },
}))

export const EffectEditor: React.FC = () => {
    const { currentEffect, updateName } = useEffectStore()
    const [editorWidth, setEditorWidth] = useState('70%')
    const [isPreviewVisible, setIsPreviewVisible] = useState(true)
    useEffectRouting()
    return (
        currentEffect && (
            <>
                <AppHeader />
                <Box
                    sx={{
                        display: 'flex',
                        height: '100%',
                        p: 0,
                    }}
                >
                    <Resizable
                        size={{
                            width: isPreviewVisible ? editorWidth : '100%',
                            height: '100%',
                        }}
                        onResizeStop={(e, direction, ref, d) => {
                            const containerWidth =
                                ref.parentElement?.clientWidth ||
                                window.innerWidth
                            const currentWidth =
                                (parseFloat(editorWidth) / 100) * containerWidth
                            const newWidth = currentWidth + d.width
                            const newWidthPercent =
                                (newWidth / containerWidth) * 100
                            setEditorWidth(`${newWidthPercent}%`)
                        }}
                        minWidth={'10%'}
                        maxWidth={isPreviewVisible ? '90%' : undefined}
                        enable={{
                            top: false,
                            right: isPreviewVisible,
                            bottom: false,
                            left: false,
                            topRight: false,
                            bottomRight: false,
                            bottomLeft: false,
                            topLeft: false,
                        }}
                        handleComponent={{
                            right: <StyledDivider orientation="vertical" />,
                        }}
                    >
                        <Box
                            sx={{
                                height: '100%',
                                overflowY: 'auto',
                                p: 4,
                            }}
                        >
                            <EditableTitle
                                value={currentEffect.name}
                                onChange={updateName}
                            />
                            <Typography variant="body1" gutterBottom>
                                Effect Editor
                            </Typography>
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
                    </Resizable>
                    {isPreviewVisible && (
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <PreviewPanel
                                onMinimize={() => setIsPreviewVisible(false)}
                            />
                        </Box>
                    )}
                </Box>
            </>
        )
    )
}
