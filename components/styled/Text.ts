import { styled } from 'lib/stitches'

export const Title = styled('h1', {
    color: '$primaryText',

    fontSize: '$6',
    fontWeight: 700,
    lineHeight: '$5',

    letterSpacing: '-.025em',

    '@md': {
        fontSize: '$8',
        lineHeight: '$1',
    },
})

export const Subtitle = styled('h2', {
    fontSize: '$2',
    fontWeight: 400,
    color: '$secondaryText',

    lineHeight: '$3',
})

export const SectionTitle = styled('h3', {})

export const BodyText = styled('p', {
    fontSize: '$2',
    fontWeight: 400,
    color: '$bodyText',

    lineHeight: '$3',
})

export const NavLink = styled('a', {
    display: 'none',

    fontSize: '$2',
    fontWeight: 600,

    color: '$linkText',

    borderRadius: '$1',

    '@md': { display: 'block' },
    variants: { selected: { true: { color: '$secondaryText' } } },
})
