import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffectStore } from '../store/effectStore'
import errorHandler from '../utils/errorHandler'
import { savedEffectStorage } from '../store/storePersistence'
import logger from '../utils/logger'

export const useEffectRouting = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { setCurrentEffectFile, currentEffect } = useEffectStore()

    useEffect(() => {
        const loadEffect = async () => {
            if (!id) return

            // Avoid resetting history by only loading when the route id differs from the loaded effect
            if (currentEffect?.metadata.id === id) return

            const effect = await savedEffectStorage.getEffectById(id)
            const deleted = effect?.metadata.deleted
            if (effect && !deleted) {
                logger.debug('Loaded effect', effect)
                setCurrentEffectFile(effect)
            } else {
                // Effect not found, show message and navigate home
                alert(deleted ? 'Effect is in the trash' : 'Effect not found')
                await navigate('/')
            }
        }

        loadEffect().catch(errorHandler)
        // Intentionally exclude setCurrentEffectFile from deps to avoid effect re-running on store updates
    }, [id, currentEffect?.metadata.id])

    return { navigate }
}
