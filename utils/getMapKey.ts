import { TableKey } from 'contexts/PathFindingContext'

export const getMapKey = ({ x, y }: TableKey) => `${x}-${y}`
