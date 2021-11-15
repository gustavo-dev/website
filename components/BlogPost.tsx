import React from 'react'
import { YTInteraction } from 'components/YTInteraction'
import { styled } from 'lib/stitches'
import { ComponentDescription, ComponentTitle } from 'components/styled/Text'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface BlogPostProps {
    title: string
    views: number
    slug?: string
}

const BlogPostContainer = styled('div', {
    cursor: 'pointer',

    width: '100%',

    boxSizing: 'border-box',

    p: '1rem',
    mx: 'auto',

    userSelect: 'none',
})

const IconSpan = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    mr: '.5rem',
})

export const BlogPost: React.FC<BlogPostProps> = ({ title, views }) => {
    return (
        <YTInteraction aria-label={title}>
            <Link href="/blog">
                <a>
                    <BlogPostContainer>
                        <ComponentTitle css={{ mb: '1rem' }}>
                            {title}
                        </ComponentTitle>
                        <ComponentDescription>
                            <IconSpan>
                                <EyeOpenIcon />
                            </IconSpan>
                            {views}
                        </ComponentDescription>
                    </BlogPostContainer>
                </a>
            </Link>
        </YTInteraction>
    )
}
