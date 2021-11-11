import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'
import { darkTheme, globalCss, theme } from 'lib/stitches'
import { ThemeProvider } from 'next-themes'

const globalStyle = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily:
            'Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;',
    },

    button: {
        border: 'none',
        ' -webkit-tap-highlight-color': 'transparent',
    },

    'ol, ul, li': {
        listStyle: 'none',
    },

    a: {
        textDecoration: 'inherit',
    },

    'a:visited': {
        color: 'inherit',
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
