import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'GET') {
            const views = await prisma.views.findMany()

            return res.status(200).json({ views })
        }
    } catch (e: unknown) {
        return res.status(500).json({ message: 'Unknown Error' })
    }
}
