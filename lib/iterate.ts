import { ReactNode } from 'react'

export const iterate = (n: number, f: (key: number) => ReactNode) => {
    const helper = new Array(n).fill(0)

    return helper.map((_, i) => f(i))
}
