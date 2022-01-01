import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'
import { darkTheme, globalCss, theme } from 'lib/stitches'
import { ThemeProvider } from 'next-themes'

const globalStyle = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily: 'Inter,ui-sans-serif;',

        transition: 'background 200ms',

        boxSizing: 'border-box',

        border: '0 solid',
    },
    button: {
        border: 'none',
        ' -webkit-tap-highlight-color': 'transparent',
    },

    a: {
        textDecoration: 'inherit',
        color: 'inherit',
    },

    'a:visited': {
        color: 'inherit',
    },

    '::-webkit-scrollbar': {
        width: 8,
        height: 8,
    },

    '::-webkit-scrollbar-thumb': {
        background: '$bg-16',
        borderRadius: 10,
    },
})

function MyApp({ Component, pageProps }: AppProps) {
    globalStyle()
    return (
        <IdProvider>
            <ThemeProvider
                attribute="class"
                value={{
                    light: theme.toString(),
                    dark: darkTheme.toString(),
                }}
            >
                <Component {...pageProps} />
            </ThemeProvider>
        </IdProvider>
    )
}
export default MyApp
