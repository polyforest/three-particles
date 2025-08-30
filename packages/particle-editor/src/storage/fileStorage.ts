import { ParticleEffectModelJson } from 'three-particles'

export const exportEffectToFile = (
    effect: ParticleEffectModelJson,
    filename: string,
): void => {
    const jsonString = JSON.stringify(effect, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = filename.endsWith('.json') ? filename : `${filename}.json`
    document.body.appendChild(link)
    link.click()

    // Clean up
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}

export const importEffectFromFile = (): Promise<{
    filename: string
    effect: ParticleEffectModelJson
}> => {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.json'

        input.onchange = (event) => {
            const file = (event.target as HTMLInputElement).files?.[0]
            if (!file) {
                reject(new Error('No file selected'))
                return
            }

            const reader = new FileReader()

            reader.onload = (e) => {
                try {
                    const content = e.target?.result as string
                    const effect = JSON.parse(
                        content,
                    ) as ParticleEffectModelJson
                    const filename = file.name.replace(/\.json$/, '')
                    resolve({ filename, effect })
                } catch (_error: any) {
                    reject(new Error('Invalid JSON file'))
                }
            }

            reader.onerror = () => {
                reject(new Error('Failed to read file'))
            }

            reader.readAsText(file)
        }

        input.click()
    })
}
