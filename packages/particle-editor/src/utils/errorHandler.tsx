import React from 'react'
import { Alert, Snackbar } from '@mui/material'
import { createRoot } from 'react-dom/client'

interface ErrorToastProps {
    message: string
    severity?: 'error' | 'warning' | 'info' | 'success'
    duration?: number
}

/**
 * Shows a toast message for errors or notifications
 * @param props - ErrorToastProps configuration
 */
const ErrorToast: React.FC<ErrorToastProps> = ({
    message,
    severity = 'error',
    duration = 5000,
}) => {
    const [open, setOpen] = React.useState(true)

    const handleClose = (): void => {
        setOpen(false)
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={duration}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

/**
 * Shows an error toast with the provided message
 * @param error - Error object or error message string
 * @param duration - Optional duration in milliseconds
 */
export const showErrorToast = (
    error: Error | string,
    duration?: number,
): void => {
    const message = error instanceof Error ? error.message : error
    showToast({ message, severity: 'error', duration })
}

/**
 * Shows a success toast with the provided message
 * @param message - Success message
 * @param duration - Optional duration in milliseconds
 */
export const showSuccessToast = (message: string, duration?: number): void => {
    showToast({ message, severity: 'success', duration })
}

/**
 * Shows a warning toast with the provided message
 * @param message - Warning message
 * @param duration - Optional duration in milliseconds
 */
export const showWarningToast = (message: string, duration?: number): void => {
    showToast({ message, severity: 'warning', duration })
}

/**
 * Shows an info toast with the provided message
 * @param message - Info message
 * @param duration - Optional duration in milliseconds
 */
export const showInfoToast = (message: string, duration?: number): void => {
    showToast({ message, severity: 'info', duration })
}

/**
 * Generic function to show a toast notification
 * @param props - ErrorToastProps configuration
 */
const showToast = (props: ErrorToastProps): void => {
    // Create a container element for the toast
    const container = document.createElement('div')
    document.body.appendChild(container)

    // Create a root for the toast
    const root = createRoot(container)

    // Render the toast component
    root.render(<ErrorToast {...props} />)

    // Clean up after toast closes
    setTimeout(
        () => {
            root.unmount()
            container.remove()
        },
        (props.duration || 5000) + 1000,
    ) // Add 1 second for animation
}

/**
 * Handles errors by logging them and showing a toast notification
 * @param error - Error object or error message string
 * @param context - Optional context information
 * @returns void
 */
export const handleError = (error: Error | string, context?: string): void => {
    // Log the error to the console
    if (context) {
        console.error(`Error in ${context}:`, error)
    } else {
        console.error('Error:', error)
    }

    // Show toast notification
    showErrorToast(error)
}

export default handleError
