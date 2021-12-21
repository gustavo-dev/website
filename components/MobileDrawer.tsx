import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'lib/stitches'
import Link from 'next/link'

interface MobileDrawerProps {
    open: boolean
}

const DRAWER_LINKS = [
    { text: 'Home', href: '/' },
    { text: 'Blog', href: '/blog' },
]

const MobileDrawerContainer = styled(motion.ul, {
    position: 'absolute',

    width: '100%',
    height: '100vh',

    top: 58,

    background: '$bg',

    zIndex: 1000,

    fontSize: '.875rem',
    lineHeight: '1.25rem',
    fontWeight: 600,

    color: '#FAFAFA',
})

const DrawerLink = styled(motion.li, {
    marginBottom: '.5rem',
    position: 'relative',

    py: '1rem',

    width: '100%',

    cursor: 'pointer',

    color: '$primary-text',

    '&::after': {
        content: '',
        position: 'absolute',
        width: '100%',

        bottom: 0,
        left: 0,

        borderBottom: '1px solid gray',

        boxSizing: 'border-box',
    },
})

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ open }) => {
    return (
        <AnimatePresence>
            {open && (
                <MobileDrawerContainer
                    key="drawer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {DRAWER_LINKS.map((link, i) => (
                        <Link passHref key={i} href={link.href}>
                            <DrawerLink
                                initial={{
                                    translateX: '-50%',
                                    opacity: 0.2,
                                }}
                                animate={{ translateX: 0, opacity: 1 }}
                                transition={{ delay: 0.08 * i }}
                            >
                                {link.text}
                            </DrawerLink>
                        </Link>
                    ))}
                </MobileDrawerContainer>
            )}
        </AnimatePresence>
    )
}
