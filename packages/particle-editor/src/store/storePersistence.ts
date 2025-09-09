import { useEffectStore } from './effectStore'
import { throttle } from 'lodash'
import { IndexedDBStorage } from '../storage/IndexedDBStorage'
import { SavedEffectStorage } from '../storage/SavedEffectStorage'

import { useEffect } from 'react'
import errorHandler from '../utils/errorHandler'
import logger from '../utils/logger'

// Initialize storage
const indexedDBStorage = new IndexedDBStorage(
    'ParticleEditorDB',
    'particleEffects',
    1,
)
export const savedEffectStorage = new SavedEffectStorage({
    storage: indexedDBStorage,
})

export function useEffectStorePersistence() {
    const currentEffect = useEffectStore((state) => state.currentEffect)

    const throttledSave = throttle(
        () => {
            if (currentEffect) {
                logger.debug('Saving effect', currentEffect)
                savedEffectStorage.saveEffect(currentEffect).catch(errorHandler)
            }
        },
        500,
        { leading: true, trailing: true },
    )

    useEffect(() => {
        throttledSave()
        return () => throttledSave.flush()
    }, [currentEffect])
}
