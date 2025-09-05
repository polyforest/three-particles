import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
    ParticleEffect,
    ParticleEffectLoader,
    ParticleEffectModelJson,
} from 'three-particles'
import { Box, IconButton, SxProps, Theme } from '@mui/material'
import Fullscreen from '@mui/icons-material/Fullscreen'
import FullscreenExit from '@mui/icons-material/FullscreenExit'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import ColorLens from '@mui/icons-material/ColorLens'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Pause from '@mui/icons-material/Pause'
import styled from '@emotion/styled'
import { handleError } from '../utils/errorHandler'

const ButtonGroup = styled(Box)`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
    display: flex;
    gap: 8px;
`

const ControlButton = styled(IconButton)`
    background-color: rgba(0, 0, 0, 0.3);
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`

interface PreviewPanelProps {
    effect?: ParticleEffectModelJson
    defaultWidth?: string | number
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
    effect,
    defaultWidth = '30%',
}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const controlsRef = useRef<OrbitControls | null>(null)
    const particleEffectRef = useRef<ParticleEffect | null>(null)
    const clockRef = useRef<THREE.Clock | null>(null)

    const [isMaximized, setIsMaximized] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isPaused, setIsPaused] = useState(false)
    const [width] = useState<string | number>(defaultWidth)
    const [bgColor, setBgColor] = useState<string>('#111111')
    const colorInputRef = useRef<HTMLInputElement>(null)

    // Init Three.js scene
    useEffect(() => {
        if (!canvasRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        })

        scene.background = new THREE.Color(bgColor)
        scene.fog = new THREE.Fog(bgColor, 20, 100)

        camera.position.set(0, 10, 20)
        camera.lookAt(new THREE.Vector3(0, 2, 0))

        const grid = new THREE.GridHelper(200, 40, 0x000000, 0xffffff)
        grid.material.opacity = 0.2
        grid.material.transparent = true
        scene.add(grid)

        const controls = new OrbitControls(camera, renderer.domElement)
        const clock = new THREE.Clock()

        sceneRef.current = scene
        cameraRef.current = camera
        rendererRef.current = renderer
        controlsRef.current = controls
        clockRef.current = clock

        clock.start()

        return () => {
            if (particleEffectRef.current) {
                scene.remove(particleEffectRef.current)
                particleEffectRef.current = null
            }
            controls.dispose()
            renderer.dispose()
        }
    }, [])

    // Update scene bg/fog when color changes
    useEffect(() => {
        if (!sceneRef.current) return
        sceneRef.current.background = new THREE.Color(bgColor)
        sceneRef.current.fog = new THREE.Fog(bgColor, 20, 100)
    }, [bgColor])

    // Effect loader on prop change
    useEffect(() => {
        if (!effect || !sceneRef.current) return

        if (particleEffectRef.current) {
            sceneRef.current.remove(particleEffectRef.current)
            particleEffectRef.current = null
        }

        const loader = new ParticleEffectLoader()
        loader
            .parseAsync(effect)
            .then((newEffect) => {
                particleEffectRef.current = newEffect
                sceneRef.current?.add(newEffect)
            })
            .catch((error) => handleError(error, 'loading particle effect'))
    }, [effect])

    // Animation loop
    useEffect(() => {
        let animationId = 0

        const animate = () => {
            animationId = requestAnimationFrame(animate)

            if (
                !isVisible ||
                !clockRef.current ||
                !rendererRef.current ||
                !sceneRef.current ||
                !cameraRef.current
            ) {
                return
            }

            // Always update controls for camera movement
            controlsRef.current?.update()

            // Only update effect and render if not paused
            if (!isPaused) {
                const dT = clockRef.current.getDelta()
                particleEffectRef.current?.update(dT)
            } else {
                // Still call getDelta to prevent time accumulation when unpausing
                clockRef.current.getDelta()
            }

            rendererRef.current.render(sceneRef.current, cameraRef.current)
        }

        animate()
        return () => cancelAnimationFrame(animationId)
    }, [isVisible, isPaused])

    // --- resize helpers & observers ---
    const refreshSize = () => {
        const el = containerRef.current
        if (!el || !cameraRef.current || !rendererRef.current) return
        const rect = el.getBoundingClientRect()
        const w = rect.width
        const h = rect.height
        const widthPx = Math.max(1, Math.floor(w))
        const heightPx = Math.max(1, Math.floor(h))

        rendererRef.current.setPixelRatio(window.devicePixelRatio)
        rendererRef.current.setSize(widthPx, heightPx, false)

        cameraRef.current.aspect = widthPx / heightPx
        cameraRef.current.updateProjectionMatrix()
    }

    useEffect(() => refreshSize(), [containerRef, cameraRef, rendererRef])

    // Observe container size (fires during drag + layout changes)
    useLayoutEffect(() => {
        const el = containerRef.current
        if (!el) return

        const ro = new ResizeObserver(refreshSize)

        ro.observe(el)

        // Kick once after mount / toggles (next frame so the layout settles)
        requestAnimationFrame(refreshSize)

        return () => ro.disconnect()
    }, [containerRef])

    // Window resize/zoom fallback
    useEffect(() => {
        const onWinResize = () => refreshSize()
        window.addEventListener('resize', onWinResize)
        window.addEventListener('orientationchange', onWinResize)
        return () => {
            window.removeEventListener('resize', onWinResize)
            window.removeEventListener('orientationchange', onWinResize)
        }
    }, [])

    // Escape to exit fullscreen
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMaximized) setIsMaximized(false)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isMaximized])

    const maximizedStyles: SxProps<Theme> =
        isVisible && isMaximized
            ? {
                  width: '100%',
                  position: 'absolute',
                  left: 0,
              }
            : {}

    return (
        <Box
            sx={{
                width: isVisible ? width : '65px',
                height: '100%', // parent must define a height
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                minWidth: 0,
                minHeight: 0,
                ...maximizedStyles,
            }}
        >
            <ButtonGroup>
                {isVisible && (
                    <>
                        <ControlButton
                            onClick={() => setIsPaused(!isPaused)}
                            color="primary"
                            title={isPaused ? 'Play' : 'Pause'}
                        >
                            {isPaused ? <PlayArrow /> : <Pause />}
                        </ControlButton>
                        <ControlButton
                            onClick={() => colorInputRef.current?.click()}
                            color="primary"
                            title="Background color"
                        >
                            <ColorLens />
                        </ControlButton>
                        <input
                            ref={colorInputRef}
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            style={{
                                position: 'absolute',
                                opacity: 0,
                                pointerEvents: 'none',
                                width: 0,
                                height: 0,
                            }}
                            aria-hidden
                        />
                        <ControlButton
                            onClick={() => setIsMaximized((v) => !v)}
                            color="primary"
                            title={
                                isMaximized ? 'Exit Fullscreen' : 'Fullscreen'
                            }
                        >
                            {isMaximized ? <FullscreenExit /> : <Fullscreen />}
                        </ControlButton>
                    </>
                )}
                <ControlButton
                    onClick={() => setIsVisible(!isVisible)}
                    color="primary"
                    title="Minimize"
                >
                    {isVisible ? <VisibilityOff /> : <Visibility />}
                </ControlButton>
            </ButtonGroup>

            {/* This flex child is what we observe for size */}
            <div
                ref={containerRef}
                style={{
                    position: 'relative',
                    flex: 1,
                    minHeight: 0, // allow shrink inside flex
                    minWidth: 0, // prevent overflow in some browsers
                }}
            >
                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block', // avoid inline-canvas baseline gap
                    }}
                />
            </div>
        </Box>
    )
}
