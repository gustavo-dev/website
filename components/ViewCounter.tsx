import { EyeOpenIcon } from '@radix-ui/react-icons'
import fetcher from 'lib/fetcher'
import React, { useEffect } from 'react'
import useImmutableSWR from 'swr/immutable'

interface ViewCounterProps {
    slug: string
}

export const ViewCounter: React.FC<ViewCounterProps> = ({ slug }) => {
    const { data } = useImmutableSWR(`/api/views/${slug}`, fetcher)

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
