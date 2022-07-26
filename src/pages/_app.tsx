import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Gustavo</title>
                <meta
                    name="description"
                    content="I'm a 18 years old software engineer from Brazil. I'm really into full stack web development and problem solving in general."
                />
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="https://www.gravatar.com/avatar/05385faec6136dc4ca10e3729fca6c57?s=256&d=identicon&r=PG"
                />
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
