import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { NavLink } from 'components/styled/Text'
import { styled } from 'lib/stitches'

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

    size: 40,
    color: '$icons',

    '@md': { display: 'none' },
})

const ThemeSwitcher = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    size: '1.875rem',
    borderRadius: '$1',
    background: '$themeSwitcherBg',
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
                <ThemeSwitcher aria-label="Toggle Dark Mode" />
            </NavBar>
        </Container>
    )
}
