import { Inter } from '@next/font/google';
import '../styles/global.css';

const inter = Inter({
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
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
            </head>
            <div className={`max-w-4xl p-5 mx-auto ${inter.className}`}>
                {children}
            </div>
        </html>
    );
}
