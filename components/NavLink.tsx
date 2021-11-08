import { styled } from 'lib/stitches'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

interface NavLinkProps {
    text: string
    href: string
}

const StyledLink = styled('a', {
    display: 'none',

    fontSize: '$2',
    fontWeight: 400,

    color: '$linkText',

    borderRadius: '.5rem',

    p: '.5rem .75rem',

    '@md': { display: 'block' },

    '&:hover': {
        background: '$gray4',
    },

    variants: {
        isActive: {
            true: {
                color: '$secondaryText',
                fontWeight: 600,
            },
        },
    },
})

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
    const router = useRouter()
    const isActive = router.asPath === href

    return (
        <Link passHref href={href}>
            <StyledLink isActive={isActive}>{text}</StyledLink>
        </Link>
    )
}
