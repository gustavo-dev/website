import { styled } from 'lib/stitches'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

interface NavLinkProps {
    text: string
    href: string
}

const StyledLink = styled('a', {
    display: 'none',

    borderRadius: '.5rem',

    transition: 'background 200ms ease-in',

    cursor: 'pointer',

    pd: '.5rem .75rem',

    '&:hover': {
        background: '$bg-2',
    },

    '@md': { display: 'block' },

    '& span': {
        fontSize: '$2',
        fontWeight: 400,

        textDecoration: 'none',

        color: '$link-text',
    },

    variants: {
        isActive: {
            true: {
                '& span': {
                    color: '$link-text--active',
                    fontWeight: 600,
                },
            },
        },
    },
})

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
    const router = useRouter()
    const isActive = router.asPath === href

    return (
        <Link passHref href={href}>
            <StyledLink aria-label={text} isActive={isActive}>
                <span>{text}</span>
            </StyledLink>
        </Link>
    )
}
