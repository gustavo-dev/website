import { BasePathFinding } from 'lib/algorithims/BasePathFinding'
import { AdjacencyList } from 'utils/createAdjacencyList'

export class DepthFirstSearch extends BasePathFinding {
    constructor() {
        super()
    }

    static run = (
        graph: AdjacencyList,
        start: string,
        visited = new Set<string>()
    ) => {
        visited.add(start)

        const neighbours = graph.get(start)

        if (!neighbours) return

        const unvisited = Array.from(neighbours).filter((x) => !visited.has(x))

        for (const next of unvisited) {
            DepthFirstSearch.run(graph, next, visited)
        }

        return Array.from(visited)
    }
}
