import React, { useState } from 'react'
import { Typography, TextField, Box } from '@mui/material'

interface EditableTitleProps {
    value: string
    onChange: (newValue: string) => void
    defaultValue?: string
}

export const EditableTitle: React.FC<EditableTitleProps> = ({
    value,
    onChange,
    defaultValue = 'Untitled Effect',
}) => {
    const [isEditing, setIsEditing] = useState(false)
    const displayValue = value || defaultValue

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            setIsEditing(false)
        }
        if (event.key === 'Escape') {
            setIsEditing(false)
        }
    }

    const handleBlur = () => {
        setIsEditing(false)
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isEditing ? (
                <TextField
                    autoFocus
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    variant="standard"
                    sx={{
                        '& .MuiInputBase-input': {
                            fontSize: 'h5.fontSize',
                            fontWeight: 'h5.fontWeight',
                            color: 'text.primary',
                        },
                    }}
                />
            ) : (
                <Typography
                    variant="h5"
                    onClick={() => setIsEditing(true)}
                    sx={{
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        },
                        padding: '4px 8px',
                        borderRadius: 1,
                    }}
                >
                    {displayValue}
                </Typography>
            )}
        </Box>
    )
}
