import log from 'loglevel'

log.setLevel('debug')

// Create structured logging functions
export const logger = {
    debug: (message: string, ...args: any[]) =>
        log.debug(`[DEBUG] ${message}`, ...args),
    info: (message: string, ...args: any[]) =>
        log.info(`[INFO] ${message}`, ...args),
    warn: (message: string, ...args: any[]) =>
        log.warn(`[WARN] ${message}`, ...args),
    error: (message: string, error?: any, ...args: any[]) => {
        if (error instanceof Error) {
            log.error(`[ERROR] ${message}`, error.message, error.stack, ...args)
        } else {
            log.error(`[ERROR] ${message}`, error, ...args)
        }
    },
}

export default logger
