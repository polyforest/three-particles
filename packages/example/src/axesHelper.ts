import { AxesHelper, CanvasTexture, Scene, Sprite, SpriteMaterial } from 'three'

export function addAxesHelper(scene: Scene) {
    const axisLen = 3
    const axesHelper = new AxesHelper(axisLen)
    scene.add(axesHelper)

    // Add axis labels (X, Y, Z) near the ends of the axes
    function makeAxisLabel(text: string, color: string) {
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 128
        const ctx = canvas.getContext('2d')!

        // Background transparent
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Text styling
        ctx.font = '64px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // Outline for contrast
        ctx.lineWidth = 8
        ctx.strokeStyle = 'black'
        ctx.strokeText(text, canvas.width / 2, canvas.height / 2)

        // Fill with axis color
        ctx.fillStyle = color
        ctx.fillText(text, canvas.width / 2, canvas.height / 2)

        const texture = new CanvasTexture(canvas)
        texture.needsUpdate = true

        const material = new SpriteMaterial({
            map: texture,
            transparent: true,
            depthWrite: false,
        })
        const sprite = new Sprite(material)
        // Size in world units
        sprite.scale.set(0.5, 0.25, 1)
        return sprite
    }

    const offset = 0.2
    const labelX = makeAxisLabel('X', '#ff5555')
    labelX.position.set(axisLen + offset, 0, 0)
    scene.add(labelX)

    const labelY = makeAxisLabel('Y', '#55ff55')
    labelY.position.set(0, axisLen + offset, 0)
    scene.add(labelY)

    const labelZ = makeAxisLabel('Z', '#5555ff')
    labelZ.position.set(0, 0, axisLen + offset)
    scene.add(labelZ)
}
