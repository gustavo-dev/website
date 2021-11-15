import { styled } from 'lib/stitches'

export const Grid = styled('div', {
    display: 'flex',
    flexFlow: 'row wrap',

    mt: -16,
    ml: -16,
    width: 'calc(100% + 16px)',
})

export const GridItem = styled('div', {
    pt: '1rem',
    pl: '1rem',

    boxSizing: 'border-box',

    flexBasis: '100%',

    variants: {
        xs: {
            4: {
                '@xs': {
                    flexBasis: '33%',
                },
            },
            6: {
                '@xs': {
                    flexBasis: '50%',
                },
            },
            12: {
                '@xs': {
                    flexBasis: '100%',
                },
            },
        },
        sm: {
            4: {
                '@sm': {
                    flexBasis: '33%',
                },
            },
            6: {
                '@sm': {
                    flexBasis: '50%',
                },
            },
            12: {
                '@sm': {
                    flexBasis: '100%',
                },
            },
        },
        md: {
            4: {
                '@md': {
                    flexBasis: '33%',
                },
            },
            6: {
                '@md': {
                    flexBasis: '50%',
                },
            },
            12: {
                '@md': {
                    flexBasis: '100%',
                },
            },
        },
    },
})
