import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'
import {
    BodyText,
    Subtitle,
    Title,
    SectionTitle,
    ComponentTitle,
} from 'components/styled/Text'

import { CheckCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons'

import { styled } from 'lib/stitches'

import * as Avatar from '@radix-ui/react-avatar'

import { SiteLayout } from 'components/SiteLayout'
import { Section } from 'components/styled/Section'
import { BlogPost } from 'components/BlogPost'

import CURRICULUM_DATA from 'data/curriculum.json'
import { Tooltip } from 'components/Tooltip'
import { Grid, GridItem } from 'components/styled/Grid'

const ImageRoot = styled(Avatar.Root, {
    display: 'inline-flex',

    position: 'relative',

    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    fixedSize: 80,
    borderRadius: '100%',
    backgroundColor: '#8888881F',

    mb: '2rem',

    '@sm': { fixedSize: 121, mb: 0 },
})
const StyledImage = styled(Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
})

const StyledFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
    color: '$primaryText',
    fontSize: '1.25rem',
    lineHeight: 1,
    fontWeight: 500,
})

const Hero = styled('div', {
    display: 'flex',
    flexDirection: 'column-reverse',

    width: '100%',

    textSizeAdjust: '100%',

    '@sm': { flexDirection: 'row', justifyContent: 'space-between' },
})

const HeroText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    pr: '2rem',

    alignItems: 'start',

    textSizeAdjust: '100%',
})

const PostsContainer = styled('div', {
    px: '1rem',
    py: '.85rem',

    background: '$bg-1',
})

const CurriculumComponent = styled('div', {
    height: 250,

    flexGrow: 0,
    flexBasis: '100%',

    background: '$bg-1',

    p: '2rem',

    br: 4,

    boxSizing: 'border-box',

    overflow: 'hidden auto',

    '@sm': {
        flexBasis: '50%',
    },
    '@lg': {
        flexBasis: '33%',
    },
})

const CurriculumCheckListContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    gap: 15,

    px: '.5rem',
})

const CheckListComponent = styled('div', {
    display: 'flex',
    alignItems: 'center',

    gap: 15,
})

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Gustavo Vargas</title>
            </Head>
            <SiteLayout>
                <Hero>
                    <HeroText>
                        <Title
                            css={{
                                mb: '.5rem',
                                ml: '-.08rem',
                                '@md': { mb: '.7rem' },
                            }}
                        >
                            Gustavo Vargas
                        </Title>
                        <Subtitle css={{ mb: '1rem' }}>
                            High school student, 17 y.o in love with programming
                        </Subtitle>
                        <BodyText>
                            Studying programming before going to college. In
                            love with web development :)
                        </BodyText>
                    </HeroText>
                    <ImageRoot>
                        <StyledImage
                            src="/images/me.png"
                            alt="Gustavo Vargas"
                            layout="fill"
                            quality={100}
                            priority
                        />
                        <StyledFallback delayMs={1000}>G</StyledFallback>
                    </ImageRoot>
                </Hero>
                <Section>
                    <SectionTitle>Trending Posts</SectionTitle>
                    <PostsContainer>
                        <Grid>
                            <GridItem md={6}>
                                <BlogPost
                                    title="What is a JavaScript Framework?"
                                    views={122}
                                />
                            </GridItem>
                            <GridItem md={6}>
                                <BlogPost
                                    title="Which backend should I use?"
                                    views={12895}
                                />
                            </GridItem>
                            <GridItem md={6}>
                                <BlogPost
                                    title="What is the difference between Angular and React?"
                                    views={122}
                                />
                            </GridItem>
                        </Grid>
                    </PostsContainer>
                </Section>
                <Section>
                    <SectionTitle>Curriculum</SectionTitle>
                    <Grid>
                        {CURRICULUM_DATA.blocks.map(
                            ({ title, checklist }, i) => {
                                return (
                                    <GridItem key={`block-${i}`} xs={12} sm={6}>
                                        <CurriculumComponent>
                                            <ComponentTitle
                                                css={{
                                                    marginBottom: '1.25rem',
                                                }}
                                            >
                                                {title}
                                            </ComponentTitle>
                                            <CurriculumCheckListContainer>
                                                {checklist.map(
                                                    ({ name, status }, j) => {
                                                        return (
                                                            <CheckListComponent
                                                                key={`checklist-${j}`}
                                                            >
                                                                {status ===
                                                                    'complete' && (
                                                                    <CheckCircledIcon color="green" />
                                                                )}
                                                                {status ===
                                                                    'due' && (
                                                                    <Tooltip
                                                                        trigger={
                                                                            <InfoCircledIcon
                                                                                color="orange"
                                                                                cursor="pointer"
                                                                            />
                                                                        }
                                                                    >
                                                                        Scheduled
                                                                    </Tooltip>
                                                                )}
                                                                <BodyText>
                                                                    {name}
                                                                </BodyText>
                                                            </CheckListComponent>
                                                        )
                                                    }
                                                )}
                                            </CurriculumCheckListContainer>
                                        </CurriculumComponent>
                                    </GridItem>
                                )
                            }
                        )}
                    </Grid>
                </Section>
            </SiteLayout>
        </>
    )
}

export default Home
