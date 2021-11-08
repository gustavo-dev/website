import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { NavLink } from 'components/NavLink'
import { styled } from 'lib/stitches'

import { SunIcon } from '@radix-ui/react-icons'

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

    mx: 'auto',

    '@md': {
        ml: '-.75rem',
    },
})

const Hamburger = styled('div', {
    display: 'flex',
    alignItems: 'center',

    size: 30,
    color: '$icons',

    cursor: 'pointer',

    '@md': { display: 'none' },
})

const ThemeSwitcher = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',

    boxSizing: 'border-box',

    size: '2rem',

    borderRadius: '$1',
    background: '$themeSwitcherBg',

    color: 'White',

    transition: 'all 150ms ease-out',

    '&:hover': {
        boxShadow: '0 0 1px 3px white',
    },
})

export const Header: React.FC = () => {
    return (
        <Container>
            <NavBar>
                <Hamburger>
                    <HamburgerMenuIcon scale={2} />
                </Hamburger>
                <NavLink href="/" text="Home" />
                <NavLink href="/blog" text="Blog" />
            </NavBar>
            <ThemeSwitcher aria-label="Toggle Dark Mode" type="button">
                <SunIcon />
            </ThemeSwitcher>
        </Container>
    )
}
