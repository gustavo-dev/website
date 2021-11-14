import { YTInteraction } from 'components/YTInteraction'
import React from 'react'
import { motion } from 'framer-motion'
import { styled } from 'lib/stitches'
import { ComponentDescription, ComponentTitle } from 'components/styled/Text'
import { EyeOpenIcon } from '@radix-ui/react-icons'

interface BlogPostProps {
    title: string
    views: number
}

const BlogPostContainer = styled(motion.div, {
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
            <BlogPostContainer>
                <ComponentTitle css={{ mb: '1rem' }}>{title}</ComponentTitle>
                <ComponentDescription>
                    <IconSpan>
                        <EyeOpenIcon />
                    </IconSpan>
                    {views}
                </ComponentDescription>
            </BlogPostContainer>
        </YTInteraction>
    )
}
