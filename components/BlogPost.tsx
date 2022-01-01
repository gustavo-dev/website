import React from 'react'
import { Box, styled } from 'lib/stitches'
import { BodyText, ComponentTitle, MetaText } from 'components/styled/Text'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import useSWR from 'swr'

import fetcher from 'lib/fetcher'

interface BlogPostProps {
    summary: string
    title: string
    slug: string
    publishedAt: string
}

const BlogPostContainer = styled('div', {
    cursor: 'pointer',

    width: '100%',

    boxSizing: 'border-box',

    mx: 'auto',

    mb: '2rem',

    userSelect: 'none',
})

const IconSpan = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    mr: '.5rem',
})

export const BlogPost: React.FC<BlogPostProps> = ({ title, slug, summary }) => {
    const { data } = useSWR(`/api/views/${slug}`, fetcher, {
        refreshInterval: 60 * 1000,
        revalidateOnFocus: false,
    })
    const views = new Number(data?.count)

    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <BlogPostContainer>
                    <Box
                        css={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            mb: '0.75rem',
                        }}
                    >
                        <ComponentTitle css={{ mb: 0 }}>{title}</ComponentTitle>
                        <Box css={{ display: 'flex', alignItems: 'center' }}>
                            <IconSpan>
                                <EyeOpenIcon />
                            </IconSpan>
                            <MetaText>
                                {views > 0 ? views.toLocaleString() : '---'}
                            </MetaText>
                        </Box>
                    </Box>
                    <BodyText>{summary}</BodyText>
                </BlogPostContainer>
            </a>
        </Link>
    )
}
