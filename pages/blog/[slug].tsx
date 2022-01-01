import Head from 'next/head'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { Blog } from '.contentlayer/types'
import { SiteLayout } from 'components/SiteLayout'
import { MetaText, Title } from 'components/styled/Text'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { format } from 'date-fns'

import components from 'components/MDXComponents'
import MDXStyling from 'components/MDXStyling'

import { allBlogs } from '.contentlayer/data'
import { AdBlockAlert } from 'components/AdBlockAlert'
import { Box } from 'lib/stitches'
import { ClockIcon } from '@radix-ui/react-icons'
import { ViewCounter } from 'components/ViewCounter'

const Article: React.FC<{ post: Blog }> = ({ post }) => {
    const Component = useMDXComponent(post.body.code)

    return (
        <SiteLayout>
            <NextSeo title={post.title} description={post.summary} />
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6590273505513552"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <AdBlockAlert />
            <Title>{post.title}</Title>
            <Box
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <MetaText>
                    Gustavo Vargas Waack Chevrand /{' '}
                    {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                </MetaText>
                <Box css={{ display: 'inline-flex' }}>
                    <MetaText css={{ display: 'flex', alignItems: 'center' }}>
                        <ClockIcon style={{ marginRight: '0.25rem' }} />{' '}
                        {post.readingTime.text}
                        {` | `}
                        <ViewCounter slug={post.slug} />
                    </MetaText>
                </Box>
            </Box>
            <MDXStyling>
                <Component
                    components={{
                        ...components,
                    }}
                />
            </MDXStyling>
        </SiteLayout>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = params
        ? allBlogs.find((post) => post.slug === params.slug)
        : {}

    return { props: { post } }
}

export default Article
