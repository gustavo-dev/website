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

const WorkInProgressWarning = styled('div', {
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',

    background: '$amber9',
    color: '$gray1',

    height: '2.26rem',
    width: '100%',

    fontSize: '$2',
    fontWeight: 700,
    letterSpacing: '-.02rem',

    boxSizing: 'border-box',
})

export const SiteLayout: React.FC = ({ children }) => {
    return (
        <AppWrapper>
            <WorkInProgressWarning>Work in progress</WorkInProgressWarning>
            <Container id="layout">
                <Layout>
                    <Header />
                    <div>{children}</div>
                </Layout>
            </Container>
        </AppWrapper>
    )
}
