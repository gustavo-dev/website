import { styled } from 'lib/stitches'

export const Title = styled('h1', {
    color: '$primaryText',

    fontSize: '$6',
    fontWeight: 700,
    lineHeight: '$3',

    letterSpacing: '-.025rem',

    '@md': {
        fontSize: '$8',
        lineHeight: '$1',
    },
})

export const Subtitle = styled('h2', {})

export const SectionTitle = styled('h3', {})

export const NavLink = styled('a', {
    display: 'none',

    fontSize: '$2',
    fontWeight: 600,

    color: '$linkText',

    borderRadius: '$1',

    '@sm': { display: 'block' },
    variants: { selected: { true: { color: '$secondaryText' } } },
})
