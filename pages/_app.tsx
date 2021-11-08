import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'
import { darkTheme, globalCss } from 'lib/stitches'

const globalStyle = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily:
            'IBM Plex Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;',
    },

    button: {
        border: 'none',
    },
})

function MyApp({ Component, pageProps }: AppProps) {
    globalStyle()
    return (
        <div className={darkTheme}>
            <IdProvider>
                <Component {...pageProps} />
            </IdProvider>
        </div>
    )
}
export default MyApp
