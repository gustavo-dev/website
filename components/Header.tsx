import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import * as Toggle from '@radix-ui/react-toggle'
import { NavLink } from 'components/NavLink'
import { Box, styled } from 'lib/stitches'

import { SunIcon } from '@radix-ui/react-icons'
import { YTInteraction } from 'components/YTInteraction'
import { useEffect, useState } from 'react'
import { MobileDrawer } from 'components/MobileDrawer'
import { useTheme } from 'next-themes'

const Container = styled('header', {
    display: 'flex',

    boxSizing: 'border-box',

    justifyContent: 'space-between',
    alignItems: 'center',

    py: '2rem',

    '@sm': {
        pb: '4rem',
    },
})

const NavBar = styled('nav', {
    display: 'flex',

    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'relative',

    width: '100%',
    height: 36,

    mx: 'auto',
})

const Hamburger = styled(Toggle.Root, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    fixedSize: '2.25rem',
    color: '$icon',

    cursor: 'pointer',

    background: 'transparent',

    '@md': { display: 'none' },
})

const ThemeSwitcher = styled(Toggle.Root, {
    cursor: 'pointer',

    mr: '-.5rem',

    boxSizing: 'border-box',

    color: '$icon',

    background: 'transparent',

    fixedSize: '2.25rem',
})

export const Header: React.FC = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        if (document)
            if (mobileDrawerOpen) {
                document
                    .getElementById('layout')
                    ?.setAttribute('style', `overflow: hidden`)
            } else {
                document.getElementById('layout')?.removeAttribute('style')
            }
    }, [mobileDrawerOpen])

    return (
        <Container>
            <NavBar>
                <Box
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: '-.75rem',
                    }}
                >
                    <Hamburger
                        aria-label="Toggle Drawer"
                        onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                    >
                        <YTInteraction circular>
                            <Box centered css={{ fixedSize: '2.25rem' }}>
                                <HamburgerMenuIcon />
                            </Box>
                        </YTInteraction>
                    </Hamburger>
                    <NavLink href="/" text="Home" />
                    {/* <NavLink href="/blog" text="Blog" /> */}
                    {/* <NavLink href="/pathfinding" text="Pathfinding" /> */}
                </Box>
                <ThemeSwitcher
                    aria-label="Toggle Dark Mode"
                    onClick={() =>
                        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                    }
                >
                    <YTInteraction circular>
                        <Box centered css={{ fixedSize: '2.25rem' }}>
                            <SunIcon />
                        </Box>
                    </YTInteraction>
                </ThemeSwitcher>
                <MobileDrawer open={mobileDrawerOpen} />
            </NavBar>
        </Container>
    )
}
