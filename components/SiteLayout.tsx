import React from 'react'
import { Layout } from 'components/styled/Layout'
import { Container } from 'components/styled/Container'
import { Header } from 'components/Header'
import { Box, styled } from 'lib/stitches'
import { Link } from 'components/styled/Text'
import { FaDiscord } from 'react-icons/fa'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

const AppWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',

    overflow: 'hidden auto',
})

const Footer = styled('footer', {
    '& hr': { borderTopWidth: '1px', borderColor: '$bg-8', mb: '3rem' },
})

export const SiteLayout: React.FC = ({ children }) => {
    return (
        <AppWrapper>
            <Container id="layout">
                <Layout>
                    <Header />
                    <Box
                        id="layout-inner"
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: '3rem',
                        }}
                    >
                        {children}
                    </Box>
                    <Footer>
                        <hr />
                        <Box
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 30,
                            }}
                        >
                            <Link
                                href="https://www.github.com/gustavo-dev"
                                css={{ display: 'flex', alignItems: 'center' }}
                            >
                                <GitHubLogoIcon style={{ marginRight: 5 }} />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                href="#"
                                onClick={() =>
                                    navigator.clipboard.writeText('tavin#5205')
                                }
                                css={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <FaDiscord style={{ marginRight: 5 }} />
                                <span>tavin#5205</span>
                            </Link>
                        </Box>
                    </Footer>
                </Layout>
            </Container>
        </AppWrapper>
    )
}
