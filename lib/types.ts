import type { NextRequest, NextFetchEvent } from 'next/server'

export type Middleware = (
    request: NextRequest,
    event: NextFetchEvent
) => Promise<Response | undefined> | Response | undefined
