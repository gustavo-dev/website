import React from 'react'
import { Layout } from 'components/styled/Layout'
import { Container } from 'components/styled/Container'
import { Header } from 'components/Header'
import { styled } from 'lib/stitches'

const AppWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',

    overflow: 'hidden auto',
})

export const SiteLayout: React.FC = ({ children }) => {
    return (
        <AppWrapper>
            <Container id="layout">
                <Layout>
                    <Header />
                    <div>{children}</div>
                </Layout>
            </Container>
        </AppWrapper>
    )
}
