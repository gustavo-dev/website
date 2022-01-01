import { EyeOpenIcon } from '@radix-ui/react-icons'
import fetcher from 'lib/fetcher'
import React, { useEffect } from 'react'
import useSWR from 'swr'

interface ViewCounterProps {
    slug: string
}

export const ViewCounter: React.FC<ViewCounterProps> = ({ slug }) => {
    const { data } = useSWR(`/api/views/${slug}`, fetcher, {
        refreshInterval: 5 * 60 * 1000,
        revalidateOnFocus: false,
    })

    const views = new Number(data?.count)

    useEffect(() => {
        ;(() => fetch(`/api/views/${slug}`, { method: 'POST' }))()
    }, [slug])

    return (
        <>
            <EyeOpenIcon style={{ margin: '0 .3rem' }} />
            {views > 0 ? views.toLocaleString() : '---'}
        </>
    )
}
