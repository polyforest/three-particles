import { useEffectStore } from './effectStore'
import { throttle } from 'lodash'
import { IndexedDBStorage } from '../storage/IndexedDBStorage'
import { SavedEffectStorage } from '../storage/SavedEffectStorage'

import { useEffect } from 'react'
import errorHandler from '../utils/errorHandler'

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

    useEffect(() => {
        const throttledSave = throttle(
            () => {
                if (currentEffect)
                    savedEffectStorage
                        .saveEffect(currentEffect)
                        .catch(errorHandler)
            },
            500,
            { leading: true, trailing: true },
        )
        return () => throttledSave.flush()
    }, [currentEffect])
}
