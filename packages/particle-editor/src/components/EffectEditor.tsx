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

import { EmitterList } from './EmitterList'

export const EffectEditor: React.FC = () => {
    const { currentEffect } = useEffectStore()
    const [isPreviewVisible, setIsPreviewVisible] = useState(true)
    const location = useLocation()
    const isSourceEditor = location.pathname.endsWith('/source')
    const isEmitterList = location.pathname.endsWith('/emitters')

    useEffectRouting()

    const renderMainContent = () => {
        if (isSourceEditor) {
            return (
                <SourceEditor
                    isPreviewVisible={isPreviewVisible}
                    setIsPreviewVisible={setIsPreviewVisible}
                    sx={{ width: '100%', height: '100%' }}
                />
            )
        } else if (isEmitterList) {
            return <EmitterList />
        } else {
            return (
                <EffectGuiEditor
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            )
        }
    }

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
                        {renderMainContent()}

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
