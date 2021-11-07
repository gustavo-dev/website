import { NextResponse } from 'next/server'
import { Middleware } from 'lib/types'

const middleware: Middleware = () => {
    return NextResponse.next()
}

export default middleware
