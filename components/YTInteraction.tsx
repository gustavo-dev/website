import { useState } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { styled } from 'lib/stitches'

interface YTInteraction {
    circular?: boolean
}

const variants_background: Variants = {
    background: {
        opacity: 0.3,
        transition: {
            duration: 0.1,
        },
    },
    background_followup: {
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
}
const variants_border: Variants = {
    border: {
        opacity: 0.4,
        transition: {
            duration: 0.05,
        },
    },
    border_followup: {
        opacity: 0,
        transition: { duration: 0.4 },
    },
}

const ComponentWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
    size: '100%',
})

const IteractionWrapper = styled('div', {
    display: 'inline-block',
    position: 'absolute',
    inset: 0,

    size: '100%',
})
const Iteraction = styled(motion.div, {
    position: 'absolute',
    inset: 0,

    size: '100%',

    boxSizing: 'border-box',

    variants: {
        circular: { true: { borderRadius: '$full' } },
        border: {
            true: {
                border: '1px solid white',
            },
        },
        background: {
            true: {
                backgroundColor: 'white',
            },
        },
    },
})

export const YTInteraction: React.FC<YTInteraction> = ({
    circular,
    children,
}) => {
    const [entered, setEntered] = useState(false)
    const controls = useAnimation()

    const handleMouseDown = async () => {
        await controls.start('background')
        setEntered(true)
    }

    const handleMouseUp = async () => {
        controls.start('background_followup')
        await controls.start('border')
        controls.start('border_followup')
        setEntered(false)
    }

    const onMouseLeave = () => {
        if (entered) {
            handleMouseUp()
        }
    }

    return (
        <ComponentWrapper
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={onMouseLeave}
        >
            {children}
            <IteractionWrapper>
                <Iteraction
                    border
                    circular={circular}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={variants_border}
                />
                <Iteraction
                    background
                    circular={circular}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={variants_background}
                />
            </IteractionWrapper>
        </ComponentWrapper>
    )
}
