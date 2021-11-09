import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { NavLink } from 'components/NavLink'
import { styled } from 'lib/stitches'

import { SunIcon } from '@radix-ui/react-icons'
import { YTInteraction } from 'components/YTInteraction'

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

    alignItems: 'center',

    width: '100%',
    height: 36,

    mx: 'auto',

    '@md': {
        ml: '-.75rem',
    },
})

const Hamburger = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    fixedSize: '2.25rem',
    color: '$icons',

    cursor: 'pointer',

    ml: '-.8rem',
    background: 'transparent',

    '@md': { display: 'none' },
})

const ThemeSwitcher = styled('button', {
    cursor: 'pointer',

    boxSizing: 'border-box',

    mr: '-.2rem',

    color: 'White',
    background: 'transparent',
})

export const Header: React.FC = () => {
    return (
        <Container>
            <NavBar>
                <Hamburger>
                    <YTInteraction circular>
                        <HamburgerMenuIcon />
                    </YTInteraction>
                </Hamburger>
                <NavLink href="/" text="Home" />
                <NavLink href="/blog" text="Blog" />
            </NavBar>
            <ThemeSwitcher aria-label="Toggle Dark Mode" type="button">
                <YTInteraction circular>
                    <SunIcon />
                </YTInteraction>
            </ThemeSwitcher>
        </Container>
    )
}
