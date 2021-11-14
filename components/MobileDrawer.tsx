import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'lib/stitches'
import Link from 'next/link'

interface MobileDrawerProps {
    open: boolean
    onDrawerCloseComplete: () => void
}

const DRAWER_LINKS = [{ text: 'Home', href: '/' }]

const MobileDrawerContainer = styled(motion.ul, {
    position: 'absolute',

    width: '100%',
    height: '100vh',

    top: 58,

    background: '#151515',

    zIndex: 1000,

    fontSize: '.875rem',
    lineHeight: '1.25rem',
    fontWeight: 600,

    color: '#FAFAFA',
})

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
    open,
    onDrawerCloseComplete,
}) => {
    return (
        <AnimatePresence>
            {open && (
                <MobileDrawerContainer
                    key="drawer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onAnimationComplete={onDrawerCloseComplete}
                >
                    {DRAWER_LINKS.map((link, i) => (
                        <motion.li key={i}>
                            <Link href={link.href}>{link.text}</Link>
                        </motion.li>
                    ))}
                </MobileDrawerContainer>
            )}
        </AnimatePresence>
    )
}
