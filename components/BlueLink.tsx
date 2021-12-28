import { Link, Span } from 'components/styled/Text'

interface BlueLinkProps {
    href: string
}

export const BlueLink: React.FC<BlueLinkProps> = ({ href, children }) => (
    <Span
        css={{
            color: '#09F',
            textDecoration: 'underline',
        }}
    >
        <Link href={href} target="_blank">
            {children}
        </Link>
    </Span>
)
