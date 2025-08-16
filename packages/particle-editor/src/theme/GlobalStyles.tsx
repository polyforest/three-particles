import React from 'react'
import { GlobalStyles as MuiGlobalStyles } from '@mui/material'

export const GlobalStyles: React.FC = () => {
    return (
        <MuiGlobalStyles
            styles={{
                'html, body': {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#121212 !important',
                    color: '#ffffff !important',
                },
                '#root': {
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#121212 !important',
                    color: '#ffffff !important',
                },
                '*': {
                    boxSizing: 'border-box',
                },
                // Override any other global styles that might be causing issues
                '.app-container': {
                    backgroundColor: '#121212 !important',
                    color: '#ffffff !important',
                },
            }}
        />
    )
}
