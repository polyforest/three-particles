import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ParticleEffect, ParticleEffectLoader } from 'three-particles'
import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    SxProps,
    Theme,
    Typography,
} from '@mui/material'
import Fullscreen from '@mui/icons-material/Fullscreen'
import FullscreenExit from '@mui/icons-material/FullscreenExit'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import ColorLens from '@mui/icons-material/ColorLens'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Pause from '@mui/icons-material/Pause'
import Speed from '@mui/icons-material/Speed'
import styled from '@emotion/styled'
import { handleError } from '../utils/errorHandler'
import { useEffectStore } from '../store/effectStore'

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
    onMinimize: () => void
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({ onMinimize }) => {
    const { currentEffect } = useEffectStore()
    const effect = currentEffect?.effect

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const controlsRef = useRef<OrbitControls | null>(null)
    const particleEffectRef = useRef<ParticleEffect | null>(null)
    const clockRef = useRef<THREE.Clock | null>(null)

    const [isMaximized, setIsMaximized] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [playbackRate, setPlaybackRate] = useState(1)
    const [speedMenuAnchor, setSpeedMenuAnchor] = useState<null | HTMLElement>(
        null,
    )
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
                const dT = clockRef.current.getDelta() * playbackRate
                particleEffectRef.current?.update(dT)
            } else {
                // Still call getDelta to prevent time accumulation when unpausing
                clockRef.current.getDelta()
            }

            rendererRef.current.render(sceneRef.current, cameraRef.current)
        }

        animate()
        return () => cancelAnimationFrame(animationId)
    }, [isPaused, playbackRate])

    // --- resize helpers & observers ---
    const refreshSize = () => {
        const camera = cameraRef.current
        const renderer = rendererRef.current
        const canvas = canvasRef.current
        if (!camera || !renderer || !canvas) return
        const width = canvas.clientWidth
        const height = canvas.clientHeight
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
    }

    useEffect(() => refreshSize(), [canvasRef, cameraRef, rendererRef])

    // Observe canvas size changes
    useLayoutEffect(() => {
        const el = canvasRef.current
        if (!el) return
        const ro = new ResizeObserver(refreshSize)
        ro.observe(el)
        return () => ro.disconnect()
    }, [canvasRef])

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

    const maximizedStyles: SxProps<Theme> = isMaximized
        ? {
              width: '100%',
              position: 'absolute',
              left: 0,
          }
        : {}

    return (
        <Box
            sx={{
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
                {
                    <>
                        <ControlButton
                            onClick={() => setIsPaused(!isPaused)}
                            color="primary"
                            title={isPaused ? 'Play' : 'Pause'}
                        >
                            {isPaused ? <PlayArrow /> : <Pause />}
                        </ControlButton>
                        <ControlButton
                            onClick={(e) => setSpeedMenuAnchor(e.currentTarget)}
                            color="primary"
                            title={`Playback Rate: ${playbackRate}x`}
                        >
                            <Speed />
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
                }
                <ControlButton
                    onClick={onMinimize}
                    color="primary"
                    title="Minimize"
                >
                    <VisibilityOff />
                </ControlButton>
            </ButtonGroup>

            <Menu
                anchorEl={speedMenuAnchor}
                open={Boolean(speedMenuAnchor)}
                onClose={() => setSpeedMenuAnchor(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {[1 / 8, 1 / 4, 1 / 2, 1, 2, 4].map((rate) => (
                    <MenuItem
                        key={rate}
                        selected={playbackRate === rate}
                        onClick={() => {
                            setPlaybackRate(rate)
                            setSpeedMenuAnchor(null)
                        }}
                    >
                        <Typography>
                            {rate < 1 ? `1/${1 / rate}` : rate}x
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>

            <div
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
