import { EyeOpenIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

interface ViewCounterProps {
    slug: string
}

export const ViewCounter: React.FC<ViewCounterProps> = ({ slug }) => {
    const [views, setViews] = useState(0)

    useEffect(() => {
        const updateAndFetchViews = () =>
            fetch(`/api/views/${slug}`, {
                method: 'POST',
            }).then(async (res) => {
                const data = await res.json()

                setViews(data.count)
            })

        updateAndFetchViews()
    }, [slug])

    return (
        <>
            <EyeOpenIcon style={{ margin: '0 .3rem' }} />
            {views > 0 ? views.toLocaleString() : '---'}
        </>
    )
}
