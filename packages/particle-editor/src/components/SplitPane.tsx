import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { BoxProps } from '@mui/material/Box/Box'

interface PaneSize {
    value: number
    valuePercent: number
}

interface SplitPaneProps extends BoxProps {
    children: React.ReactNode[]
    direction: 'horizontal' | 'vertical'
    onUpdate?: (sizes: PaneSize[]) => void
    initialSizes?: number[]
}

const StyledDivider = styled(Box)<{ direction: 'horizontal' | 'vertical' }>(
    ({ theme, direction }) => ({
        backgroundColor: theme.palette.divider,
        cursor: direction === 'horizontal' ? 'col-resize' : 'row-resize',
        flexShrink: 0,
        width: direction === 'horizontal' ? '4px' : '100%',
        height: direction === 'vertical' ? '4px' : '100%',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        '&:active': {
            backgroundColor: theme.palette.primary.main,
        },
    }),
)

const PaneContainer = styled(Box)<{ direction: 'horizontal' | 'vertical' }>(
    ({ direction }) => ({
        overflow: 'hidden',
        display: 'flex',
        flexShrink: 0,
        flexGrow: 0,
        minWidth: direction === 'horizontal' ? '50px' : undefined,
        minHeight: direction === 'vertical' ? '50px' : undefined,
    }),
)

export const SplitPane: React.FC<SplitPaneProps> = ({
    children,
    direction,
    onUpdate,
    initialSizes,
    ...restProps
}) => {
    const nodeChildren = children.filter(
        (child) => child != null && child !== false,
    )

    const containerRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [dragIndex, setDragIndex] = useState(-1)
    const [startPos, setStartPos] = useState(0)
    const [startSizes, setStartSizes] = useState<number[]>([])

    // Initialize sizes - equal distribution if no initial sizes provided
    const calculateDefaultSizes = (): number[] => {
        if (initialSizes && initialSizes.length === nodeChildren.length) {
            return initialSizes
        }
        return Array(nodeChildren.length).fill(1.0 / nodeChildren.length)
    }

    const [sizes, setSizes] = useState<number[]>(calculateDefaultSizes)

    // Handle changes in number of children
    useEffect(() => {
        const currentChildrenCount = nodeChildren.length

        if (sizes.length !== currentChildrenCount) {
            setSizes(calculateDefaultSizes)
        }
    }, [nodeChildren.length])

    const calculateSizeInfo = useCallback(
        (newSizes: number[]) => {
            if (!containerRef.current) return []

            const containerSize =
                direction === 'horizontal'
                    ? containerRef.current.offsetWidth
                    : containerRef.current.offsetHeight

            return newSizes.map((percent) => ({
                value: containerSize * percent,
                valuePercent: percent,
            }))
        },
        [direction],
    )

    const handleMouseDown = useCallback(
        (index: number, e: React.MouseEvent) => {
            e.preventDefault()
            setIsDragging(true)
            setDragIndex(index)
            setStartPos(direction === 'horizontal' ? e.clientX : e.clientY)
            setStartSizes([...sizes])
        },
        [direction, sizes],
    )

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging || dragIndex === -1 || !containerRef.current) return

            e.preventDefault()
            const currentPos =
                direction === 'horizontal' ? e.clientX : e.clientY
            const containerSize =
                direction === 'horizontal'
                    ? containerRef.current.offsetWidth
                    : containerRef.current.offsetHeight

            const delta = currentPos - startPos

            const deltaPercent = delta / containerSize

            const newSizes = [...startSizes]
            const leftPaneIndex = dragIndex
            const rightPaneIndex = dragIndex + 1

            // Calculate new sizes (minimum 5% = 0.05)
            const newLeftSize = Math.max(
                0.05,
                startSizes[leftPaneIndex] + deltaPercent,
            )
            const newRightSize = Math.max(
                0.05,
                startSizes[rightPaneIndex] - deltaPercent,
            )

            // Ensure we don't exceed bounds
            const totalChange =
                newLeftSize +
                newRightSize -
                (startSizes[leftPaneIndex] + startSizes[rightPaneIndex])

            newSizes[leftPaneIndex] = newLeftSize - totalChange / 2
            newSizes[rightPaneIndex] = newRightSize - totalChange / 2

            setSizes(newSizes)
        },
        [isDragging, dragIndex, startPos, startSizes, direction],
    )

    const handleMouseUp = useCallback(() => {
        if (isDragging && onUpdate) {
            onUpdate(calculateSizeInfo(sizes))
        }
        setIsDragging(false)
        setDragIndex(-1)
    }, [isDragging, onUpdate, calculateSizeInfo, sizes])

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
            document.body.style.cursor =
                direction === 'horizontal' ? 'col-resize' : 'row-resize'
            document.body.style.userSelect = 'none'

            return () => {
                document.removeEventListener('mousemove', handleMouseMove)
                document.removeEventListener('mouseup', handleMouseUp)
                document.body.style.cursor = ''
                document.body.style.userSelect = ''
            }
        }
    }, [isDragging, handleMouseMove, handleMouseUp, direction])

    // Notify about initial sizes
    useEffect(() => {
        if (onUpdate && containerRef.current) {
            onUpdate(calculateSizeInfo(sizes))
        }
    }, []) // Only run on mount

    const flexDirection = direction === 'horizontal' ? 'row' : 'column'
    return (
        <Box
            {...restProps}
            ref={containerRef}
            sx={{
                ...restProps.sx,
                display: 'flex',
                flexDirection,
                alignItems: 'stretch',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            {nodeChildren.map((child, index) => {
                return (
                    <React.Fragment key={index}>
                        <PaneContainer
                            direction={direction}
                            sx={{
                                [direction === 'horizontal'
                                    ? 'width'
                                    : 'height']: `${sizes[index] * 100}%`,
                            }}
                        >
                            {child}
                        </PaneContainer>
                        {index < nodeChildren.length - 1 && (
                            <StyledDivider
                                direction={direction}
                                onMouseDown={(e) => handleMouseDown(index, e)}
                            />
                        )}
                    </React.Fragment>
                )
            })}
        </Box>
    )
}
