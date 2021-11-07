import { Observer, TableKey } from 'contexts/PathFindingContext'
import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'lib/stitches'
import React, { useEffect, useRef, useState } from 'react'

interface NodeProps {
    getIsMouseDown: () => number
    itemKey: Array<number>
    updateTable: (key: TableKey, value: number) => void
    addObserver: (key: TableKey, o: Observer) => void
}

const PathElement = styled('td', {
    margin: 0,
    padding: 0,
    position: 'relative',
    height: 25,
    width: 25,
    color: '$pathWall',
    border: '1px solid $mauve10',
    variants: {
        visited: {
            true: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                inset: 0,
                background: 'red',
            },
        },
        wall: {
            true: {
                boxSizing: 'border-box',
                border: '1px solid $violet8',
                position: 'absolute',
                background: 'currentColor',
                width: '100%',
                height: '100%',
                inset: 0,
            },
        },
    },
})

export const Node: React.FC<NodeProps> = ({
    getIsMouseDown,
    itemKey,
    updateTable,
    addObserver,
}) => {
    /**
     * Storing this Node's table key for later referencing
     */
    const tableKey = useRef({
        x: itemKey[0],
        y: itemKey[1],
    })

    /**
     * 0: Unvisited
     * 1: Wall
     * 2: Visited
     */
    const [nodeState, setNodeState] = useState(0)

    const handleMouseEnter = (
        e: React.MouseEvent<HTMLTableCellElement>,
        value?: number
    ) => {
        const mouseValue = value || getIsMouseDown()
        /**
         * If mouseValue === 1, then user left-clicked
         * If mouseValue === 2, then user right-clicked
         */
        if (mouseValue === 1 && nodeState !== 1) {
            callUpdateTable(1)
        } else if (mouseValue === 2 && nodeState === 1) {
            callUpdateTable(0)
        }
    }

    const handleClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
        const mouseValue = e.button

        if (mouseValue === 2 && nodeState === 1) callUpdateTable(0)
        else if (mouseValue === 0) callUpdateTable(nodeState ? 0 : 1)
    }

    const onTableUpdate: Observer = (value) => {
        const { x, y } = tableKey.current

        console.log(`[${x}-${y}] | Performing update`)
        setNodeState(value)
    }

    const callUpdateTable = (value: number) => {
        updateTable(tableKey.current, value)
    }

    useEffect(() => {
        /**
         * Maybe do a cleanup?
         */
        addObserver(tableKey.current, onTableUpdate)
    }, [addObserver])

    return (
        <PathElement
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            onContextMenu={handleClick}
        >
            <AnimatePresence>
                {nodeState === 1 && (
                    <PathElement
                        wall
                        as={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.25 }}
                    />
                )}
                {nodeState === 2 && (
                    <PathElement
                        visited
                        as={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.25 }}
                    />
                )}
            </AnimatePresence>
        </PathElement>
    )
}
