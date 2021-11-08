import { styled } from 'lib/stitches'

export const Title = styled('h1', {
    color: '$primaryText',

    fontSize: '$6',
    fontWeight: 700,
    lineHeight: '$5',

    letterSpacing: '-.025em',

    '@md': {
        fontSize: '$8',
        lineHeight: 1,
    },
})

export const Subtitle = styled('h2', {
    fontSize: '$2',
    fontWeight: 400,
    color: '$secondaryText',

    lineHeight: '$3',
})

export const SectionTitle = styled('h3', {
    color: 'white',
    fontSize: '$5',

    '@md': { fontSize: '$7' },
})

export const BodyText = styled('p', {
    fontSize: '$2',
    fontWeight: 400,
    color: '$bodyText',

    lineHeight: '$3',
})
