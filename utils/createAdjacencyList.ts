import { getMapKey } from 'utils/getMapKey'

type GraphTable = number[][]
type Neighbours = [string, number][]
export type AdjacencyList = Map<string, Set<string>>

export const createAdjacencyList = (table: GraphTable) => {
    const adjacencyList: AdjacencyList = new Map()

    for (let x = 0; x < table.length; x++) {
        for (let y = 0; y < table[x].length; y++) {
            const tableKey = getMapKey({ x, y })

            if (table[x][y] !== 1) {
                // holy shit
                const neighbours = [
                    [
                        getMapKey({ x, y: y - 1 }),
                        y - 1 >= 0 ? table[x][y - 1] : -1,
                    ],
                    [
                        getMapKey({ x, y: y + 1 }),
                        y + 1 < table[0].length ? table[x][y + 1] : -1,
                    ],
                    [
                        getMapKey({ x: x - 1, y }),
                        x - 1 >= 0 ? table[x - 1][y] : -1,
                    ],
                    [
                        getMapKey({ x: x + 1, y }),
                        x + 1 < table.length ? table[x + 1][y] : -1,
                    ],
                ].filter((el) => el[1] !== 1 && el[1] !== -1) as Neighbours

                adjacencyList.set(
                    tableKey,
                    new Set(neighbours.map((el) => el[0]))
                )
            }
        }
    }

    return adjacencyList
}
