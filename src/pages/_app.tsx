import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Gustavo Vargas</title>
            </Head>
            <div className="mx-auto max-w-4xl py-10 px-5">
                <main className="mx-auto space-y-12 md:py-24">
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    )
}
export default MyApp
