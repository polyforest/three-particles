import log from 'loglevel'

// Configure log level based on environment
if (process.env.NODE_ENV === 'development') {
    log.setLevel('debug')
} else {
    log.setLevel('warn')
}

// Create structured logging functions
export const logger = {
    debug: (message: string, ...args: any[]) => log.debug(`[DEBUG] ${message}`, ...args),
    info: (message: string, ...args: any[]) => log.info(`[INFO] ${message}`, ...args),
    warn: (message: string, ...args: any[]) => log.warn(`[WARN] ${message}`, ...args),
    error: (message: string, error?: any, ...args: any[]) => {
        if (error instanceof Error) {
            log.error(`[ERROR] ${message}`, error.message, error.stack, ...args)
        } else {
            log.error(`[ERROR] ${message}`, error, ...args)
        }
    },
}

export default logger
