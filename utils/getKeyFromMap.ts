import { TableKey } from 'contexts/PathFindingContext'

export const getKeyFromMap = (key: string): TableKey => {
    const splitKey = key.split('-')

    const x = parseInt(splitKey[0])
    const y = parseInt(splitKey[1])

    return { x, y }
}
