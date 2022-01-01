import { styled } from 'lib/stitches'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

interface NavLinkProps {
    text: string
    href: string
}

const StyledLink = styled('div', {
    display: 'none',

    fontSize: '$2',
    fontWeight: 400,

    textDecoration: 'none',

    color: '$link-text',

    borderRadius: '.5rem',

    pd: '.5rem .75rem',

    transition: 'background 200ms ease-in',

    cursor: 'pointer',

    '&:hover': {
        background: '$bg-2',
    },

    '@md': { display: 'block' },

    variants: {
        isActive: {
            true: {
                color: '$link-text--active',
                fontWeight: 600,
            },
        },
    },
})

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
    const router = useRouter()
    const isActive = router.asPath === href

    return (
        <StyledLink isActive={isActive} aria-label={text}>
            <Link href={href}>{text}</Link>
        </StyledLink>
    )
}
