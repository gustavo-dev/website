import { styled } from 'lib/stitches'

export const Title = styled('h1', {
    color: '$primary-text',

    fontSize: '$6',
    fontWeight: 700,
    lineHeight: '$5',

    letterSpacing: '-.025em',

    mb: '.5rem',
    ml: '-.08rem',

    '@md': { mb: '.7rem', fontSize: '$8', lineHeight: 1 },
})

export const Subtitle = styled('h2', {
    color: '$secondary-text',

    fontSize: '$2',
    fontWeight: 400,

    lineHeight: '$3',

    mb: '1rem',
})

export const SectionTitle = styled('h3', {
    color: '$primary-text',
    fontSize: '$5',

    mb: '2rem',

    '@md': { fontSize: '$7' },
})

export const ComponentTitle = styled('h4', {
    color: '$secondary-text',

    fontSize: '1.25rem',
    lineHeight: '1.75rem',

    fontWeight: 500,
    letterSpacing: '-.025em',

    mb: '1rem',
})

export const ComponentDescription = styled('p', {
    color: '$description-text',

    lineHeight: '1.4rem',

    maxWidth: '100%',

    '& a': { color: '#09F', px: '.25rem' },
})

export const BodyText = styled('p', {
    color: '$body-text',

    fontSize: '$2',
    fontWeight: 400,

    lineHeight: '$3',
})

export const Link = styled('a', {
    transition: 'all 500ms',
    position: 'relative',
    cursor: 'pointer',

    '& :hover': { textDecoration: 'underline' },
})

export const Caption = styled('p', {
    fontSize: '.75rem',
    lineHeight: '1.375rem',
})

export const MetaText = styled('p', {
    color: '$body-text',

    fontSize: '0.875rem',
    lineHeight: '$1.25rem',
})

export const Span = styled('span', {})
