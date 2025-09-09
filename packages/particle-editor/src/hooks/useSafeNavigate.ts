import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import errorHandler from '../utils/errorHandler'
import {
    g as NavigateOptions,
    T as To,
} from 'react-router/dist/development/routeModules-rOzWJJ9x'

export function useSafeNavigate(): (to: To, options?: NavigateOptions) => void {
    const navigate = useNavigate()

    return useCallback(
        (to, options): void => {
            Promise.resolve(navigate(to, options)).catch(errorHandler)
        },
        [navigate, errorHandler],
    )
}
