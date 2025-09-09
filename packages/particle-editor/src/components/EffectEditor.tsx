import { Box, Typography } from '@mui/material'
import { EditableTitle } from './EditableTitle'
import { PreviewPanel } from './PreviewPanel'
import React from 'react'
import { useEffectStore } from '../store/effectStore'
import { useEffectRouting } from '../hooks/useEffectRouting'
import { AppHeader } from './AppHeader'

export const EffectEditor: React.FC = () => {
    const { currentEffect, updateName } = useEffectStore()
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
                    <Box
                        sx={{
                            flex: 1,
                            width: '100%',
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
                    </Box>
                    <PreviewPanel />
                </Box>
            </>
        )
    )
}
