import { styled } from 'lib/stitches'

export const Title = styled('h1', {
    color: '$primary-text',

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
    color: '$secondary-text',

    fontSize: '$2',
    fontWeight: 400,

    lineHeight: '$3',
})

export const SectionTitle = styled('h3', {
    color: '$primary-text',
    fontSize: '$5',

    '@md': { fontSize: '$7' },
})

export const ComponentTitle = styled('h3', {
    color: '$secondary-text',

    fontSize: '$3',
    lineHeight: '$4',

    fontWeight: 500,
    letterSpacing: '-.025em',
})

export const ComponentDescription = styled('p', {
    display: 'flex',

    color: '$description-text',
})

export const BodyText = styled('p', {
    color: '$body-text',

    fontSize: '$2',
    fontWeight: 400,

    lineHeight: '$3',
})
