import { createStitches } from '@stitches/react'
import {
    gray,
    grayDark,
    violetDark,
    mauveDark,
    mintDark,
    pinkDark,
    amberDark,
} from '@radix-ui/colors'

export const {
    styled,
    getCssText,
    createTheme,
    globalCss,
    css,
    config,
    keyframes,
    prefix,
    reset,
    theme,
} = createStitches({
    theme: {
        colors: {
            ...grayDark,
            ...violetDark,
            ...mauveDark,
            ...mintDark,
            ...pinkDark,
            ...amberDark,
            pathWall: mintDark.mint10,
            bg: gray.gray1,
            primaryText: gray.gray12,
            secondaryText: gray.gray11,
            bodyText: gray.gray11,
            linkText: gray.gray11,
            themeSwitcherBg: '#444',
            icons: '#000',
        },
        fontSizes: {
            1: '0.875rem',
            2: '1rem',
            3: '1.125rem',
            4: '1.25rem',
            5: '1.5rem',
            6: '1.875rem',
            7: '2.25rem',
            8: '3rem',
        },
        lineHeights: {
            1: '1rem',
            2: '1.15rem',
            3: '1.5rem',
            4: '1.175rem',
            5: '2.25rem',
        },
        sizes: {
            1: 4,
            2: 8,
            4: 16,
            8: 32,
            16: 64,
            24: 96,
            32: 128,
            48: 192,
            64: 256,
            xl: '1200px',
            lg: '992px',
            md: '768px',
            sm: '640px',
        },
        space: {
            1: 4,
            2: 8,
            4: 16,
            8: 32,
            16: 64,
            24: 96,
            32: 128,
            48: 192,
            64: 256,
            sm: 32,
            md: 40,
            lg: 48,
            gap: 24,
            gap_half: 12,
            gap_quarter: 8,
        },
        radii: { 1: '.5rem', 2: '1rem', full: '9999px' },
        shadows: {
            shadow: '',
        },
    },

    media: {
        xl: '(min-width: 1200px)',
        lg: '(min-width: 992px)',
        md: '(min-width: 768px)',
        sm: '(min-width: 640px)',
        xs: '(min-width: 0px)',
    },
    utils: {
        m: (value: string | number) => ({
            margin: value,
        }),
        mt: (value: string | number) => ({
            marginTop: value,
        }),
        mr: (value: string | number) => ({
            marginRight: value,
        }),
        mb: (value: string | number) => ({
            marginBottom: value,
        }),
        ml: (value: string | number) => ({
            marginLeft: value,
        }),
        mx: (value: string | number) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: string | number) => ({
            marginTop: value,
            marginBottom: value,
        }),
        p: (value: string | number) => ({
            padding: value,
        }),
        px: (value: string | number) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: string | number) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        pb: (value: string | number) => ({
            paddingBottom: value,
        }),
        pr: (value: string | number) => ({
            paddingRight: value,
        }),
        // A property for applying width/height together
        size: (value: string | number) => ({
            width: value,
            height: value,
        }),

        // An abbreviated property for border-radius
        br: (value: string | number) => ({
            borderRadius: value,
        }),
        fixedSize: (value: string | number) => ({
            minWidth: value,
            maxWidth: value,
            minHeight: value,
            maxHeight: value,
        }),
    },
})

export const darkTheme = createTheme({
    colors: {
        bg: '#151515',
        primaryText: '#FFFFFF',
        secondaryText: '#EAEAEA',
        bodyText: '#898989',
        linkText: '#898989',
        themeSwitcherBg: '#444',
        icons: '#FFFFFF',
    },
})
