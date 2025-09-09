import { Box, IconButton } from '@mui/material'
import { PreviewPanel } from './PreviewPanel'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import { useEffectStore } from '../store/effectStore'
import { useEffectRouting } from '../hooks/useEffectRouting'
import { AppHeader } from './AppHeader'
import { EffectGuiEditor } from './EffectGuiEditor'
import { SourceEditor } from './SourceEditor'
import { useLocation } from 'react-router-dom'
import { SplitPane } from './SplitPane'

export const EffectEditor: React.FC = () => {
    const { currentEffect } = useEffectStore()
    const [isPreviewVisible, setIsPreviewVisible] = useState(true)
    const location = useLocation()
    const isSourceEditor = location.pathname.endsWith('/source')

    useEffectRouting()

    return (
        currentEffect && (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    p: 0,
                }}
            >
                <AppHeader />
                <Box
                    sx={{
                        position: 'relative',
                        flexGrow: 1,
                        overflow: 'hidden',
                    }}
                >
                    <SplitPane
                        direction={'horizontal'}
                        sx={{
                            p: 0,
                        }}
                        onUpdate={(sizes) => {
                            console.log('size:', sizes)
                        }}
                    >
                        {isSourceEditor ? (
                            <SourceEditor
                                isPreviewVisible={isPreviewVisible}
                                setIsPreviewVisible={setIsPreviewVisible}
                                sx={{ width: '100%', height: '100%' }}
                            />
                        ) : (
                            <EffectGuiEditor
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        )}

                        {isPreviewVisible && (
                            <Box sx={{ flex: 1 }}>
                                <PreviewPanel
                                    onMinimize={() =>
                                        setIsPreviewVisible(false)
                                    }
                                />
                            </Box>
                        )}
                    </SplitPane>
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
            </Box>
        )
    )
}
