/* eslint-disable react/no-unescaped-entities */
import { InferGetStaticPropsType } from 'next'
import React, { useState } from 'react'
import { SiteLayout } from 'components/SiteLayout'
import { NextSeo } from 'next-seo'
import { Section } from 'components/styled/Section'
import { BodyText, SectionTitle, Title } from 'components/styled/Text'
import { Box, styled } from 'lib/stitches'

import { allBlogs } from '.contentlayer/data'
import { pick } from 'contentlayer/client'
import { BlogPost } from 'components/BlogPost'
import Head from 'next/head'
import { AdBlockAlert } from 'components/AdBlockAlert'

import { prisma } from 'lib/prisma'

const SearchInput = styled('input', {
    py: '0.5rem',
    px: '1rem',

    width: '100%',
    appearance: 'none',

    backgroundColor: '$bg-4',

    borderColor: '$bg-4',
    borderWidth: '1px',
    borderRadius: '0.375rem',

    color: '$primary-text',

    fontSize: '100%',
})

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    posts,
}) => {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <SiteLayout>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6590273505513552"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <NextSeo
                title="Blog"
                description="This is the place where I post my content and other's as well"
            />
            <Section noMarginTop>
                <AdBlockAlert />

                <Title>Blog</Title>
                <BodyText css={{ mb: '2rem' }}>
                    This is the place where I post my content and other's as
                    well. If you want to know more about posting your own
                    article, contact me!
                </BodyText>
                <Box css={{ display: 'inline-flex' }}>
                    <SearchInput
                        aria-label="Search"
                        placeholder="Search"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </Box>
            </Section>
            {!searchValue && false && (
                <Section>
                    <SectionTitle>Popular Articles</SectionTitle>
                </Section>
            )}
            <Section>
                <SectionTitle>All Articles</SectionTitle>
                {!filteredBlogPosts.length && <p>No posts found.</p>}
                {filteredBlogPosts.map((post) => (
                    <BlogPost key={post.title} {...post} />
                ))}
            </Section>
        </SiteLayout>
    )
}

export const getStaticProps = async () => {
    const views = await prisma.views.findMany()

    const posts = allBlogs
        .map((post) => {
            const _post = views.find((p) => p.slug === post.slug)
            const postViews = _post ? _post.count : 0

            return {
                ...pick(post, ['slug', 'title', 'summary', 'publishedAt']),
                views: postViews,
            }
        })
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) -
                Number(new Date(a.publishedAt))
        )

    return { props: { posts }, revalidate: 10 * 60 }
}

export default Blog
