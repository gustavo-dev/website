import { DepthFirstSearch } from 'lib/algorithims/DepthFirstSearch'
import { createContext, useRef, useState } from 'react'
import { createAdjacencyList } from 'utils/createAdjacencyList'
import { getKeyFromMap } from 'utils/getKeyFromMap'
import { getMapKey } from 'utils/getMapKey'

export interface TableKey {
    x: number
    y: number
}

export interface Observer {
    (value: number): void
}

type UpdateTable = (key: TableKey, value: number) => void
type AddObserver = (key: TableKey, o: Observer) => void

interface PathFindingContext {
    selectedAlgorithm?: string
    selectAlgorithm: (id: string) => void
    start: () => void
    table: React.MutableRefObject<number[][]>
    generateEmptyTable: () => void
    updateTable: UpdateTable
    addObserver: AddObserver
}

// const tableDim = { x: 30, y: 75 }
const tableDim = { x: 5, y: 5 }

const createRow = (length: number): Array<number> => {
    return new Array(length).fill(0)
}

const helperArray = (length: number) => new Array(length).fill(0)

const generateEmptyTable = () =>
    helperArray(tableDim.x).map(() => createRow(tableDim.y))

export const PathFindingContext = createContext({} as PathFindingContext)

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export const PathFindingContextProvider: React.FC = ({ children }) => {
    /**
     * Using 'useRef' is way more performatic than 'useState'
     * because all children would need to unecessarily rerender when the state
     * changed.
     */
    const table = useRef(generateEmptyTable())

    /**
     * Using set allows us to directly find our observer rather than looping through an array
     * and calling each one of them
     */
    const observers = useRef<Map<string, Observer>>(new Map())

    const addObserver: AddObserver = (key, o) =>
        observers.current.set(getMapKey(key), o)

    const updateTable: UpdateTable = (key, value) => {
        const { x, y } = key

        console.log(`Updating Table: ${x}, ${y} | Value: ${value}`)

        table.current[x][y] = value

        // Get observer from observers map
        const observer = observers.current.get(getMapKey(key))

        if (observer) observer(value)
    }

    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>()

    const selectAlgorithm = (id: string) => setSelectedAlgorithm(id)

    const start = async () => {
        console.log('Starting algorithm')

        const result = DepthFirstSearch.run(
            createAdjacencyList(table.current),
            '0-0'
        )

        if (result)
            result.forEach(async (key, i) => {
                await sleep(150 * i)

                updateTable(getKeyFromMap(key), 2)
            })
    }

    return (
        <PathFindingContext.Provider
            value={{
                selectAlgorithm,
                selectedAlgorithm,
                start,
                table,
                generateEmptyTable,
                addObserver,
                updateTable,
            }}
        >
            {children}
        </PathFindingContext.Provider>
    )
}
