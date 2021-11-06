import React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/Header'
import { Background } from 'components/styled/Background'
import { Container } from 'components/styled/Container'
import { BodyText, Subtitle, Title } from 'components/styled/Text'
import { Scrollable } from 'components/styled/Scrollable'

import { styled } from 'lib/stitches'
import * as Avatar from '@radix-ui/react-avatar'

const ImageRoot = styled(Avatar.Root, {
    display: 'inline-flex',

    position: 'relative',

    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    avatarSize: 80,
    borderRadius: '100%',
    backgroundColor: '#8888881F',

    mb: '2rem',

    '@sm': { avatarSize: 121, mb: 0 },
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

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Gustavo Vargas</title>
            </Head>
            <Background>
                <Scrollable>
                    <Container>
                        <Header />
                        <main>
                            <Hero>
                                <HeroText css={{ mb: '4rem' }}>
                                    <Title
                                        css={{ mb: '.85rem', ml: '-.25rem' }}
                                    >
                                        Gustavo Vargas
                                    </Title>
                                    <Subtitle css={{ mb: '1rem' }}>
                                        High school student, 17 y.o in love with
                                        programming
                                    </Subtitle>
                                    <BodyText>
                                        Just studying programming before going
                                        to college. I'm into web development :)
                                    </BodyText>
                                </HeroText>
                                <ImageRoot>
                                    <StyledImage
                                        src="/images/me.png"
                                        alt="Gustavo Vargas"
                                        layout="fill"
                                    />
                                    <StyledFallback delayMs={600}>
                                        GV
                                    </StyledFallback>
                                </ImageRoot>
                            </Hero>
                        </main>
                    </Container>
                </Scrollable>
            </Background>
        </>
    )
}

export default Home
