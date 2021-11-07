import React, { useContext, useRef } from 'react'
import { Node } from 'components/pathfinding/Node'
import { styled } from 'lib/stitches'
import { PathFindingContext } from 'contexts/PathFindingContext'

const PathTable = styled('table', { userSelect: 'none' })

export const Table: React.FC = () => {
    const { table, addObserver, updateTable, start } =
        useContext(PathFindingContext)

    const isMouseDownRef = useRef(0)

    /**
     * Mouse Events Functions
     */
    const setMouseDown = (e: React.MouseEvent<HTMLTableElement>) => {
        if (e.button === 0) isMouseDownRef.current = 1
        else if (e.button === 2) isMouseDownRef.current = 2
    }

    const setMouseUp = () => (isMouseDownRef.current = 0)

    const getIsMouseDown = () => isMouseDownRef.current

    return (
        <div className="flex flex-col">
            <button className="text-white mb-5" onClick={start}>
                Start
            </button>
            <PathTable
                onMouseDown={setMouseDown}
                onMouseUp={setMouseUp}
                onContextMenu={(e) => e.preventDefault()}
            >
                <tbody>
                    {table.current.map((row, k) => {
                        return (
                            <tr key={k}>
                                {row.map((node, j) => {
                                    return (
                                        <Node
                                            key={k + j}
                                            itemKey={[k, j]}
                                            getIsMouseDown={getIsMouseDown}
                                            updateTable={updateTable}
                                            addObserver={addObserver}
                                        />
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </PathTable>
        </div>
    )
}
