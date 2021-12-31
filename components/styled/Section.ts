import { styled } from 'lib/stitches'

export const Section = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    position: 'relative',

    mt: '4rem',

    variants: {
        noMarginTop: { true: { mt: 0 } },
    },
})
