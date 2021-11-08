import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { NavLink } from 'components/styled/Text'
import { styled } from 'lib/stitches'

import { SunIcon } from '@radix-ui/react-icons'

const Container = styled('header', {
    display: 'flex',

    boxSizing: 'border-box',

    py: '2rem',

    '@sm': {
        pb: '4rem',
    },
})

const NavBar = styled('nav', {
    display: 'flex',

    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',

    mx: 'auto',
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
                <div>
                    <Hamburger>
                        <HamburgerMenuIcon scale={2} />
                    </Hamburger>
                    <NavLink selected>Home</NavLink>
                </div>
                <ThemeSwitcher aria-label="Toggle Dark Mode" type="button">
                    <SunIcon />
                </ThemeSwitcher>
            </NavBar>
        </Container>
    )
}
