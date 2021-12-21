import { useState } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { styled } from 'lib/stitches'

interface YTInteraction {
    circular?: boolean
}

const variants_background: Variants = {
    background: {
        opacity: 0.1,
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
        opacity: 0.2,
        transition: {
            duration: 0.05,
        },
    },
    border_followup: {
        opacity: 0,
        transition: { duration: 0.4 },
    },
}

const InteractionWrapper = styled('div', {
    pointerEvents: 'none',
    display: 'inline-block',
    position: 'absolute',
    inset: 0,

    m: -4,
})

const Interaction = styled(motion.div, {
    opacity: 0,

    position: 'absolute',
    inset: 0,

    boxSizing: 'border-box',

    borderRadius: 4,

    variants: {
        circular: { true: { borderRadius: '$full' } },
        border: {
            true: {
                border: '1px solid',
                borderColor: '$touch-response',
            },
        },
        background: {
            true: {
                backgroundColor: '$touch-response',
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
        <div
            style={{ position: 'relative' }}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseDown}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={onMouseLeave}
        >
            {children}
            <InteractionWrapper data-interaction="extended">
                <Interaction
                    border
                    circular={circular}
                    animate={controls}
                    variants={variants_border}
                />
                <Interaction
                    background
                    circular={circular}
                    animate={controls}
                    variants={variants_background}
                />
            </InteractionWrapper>
        </div>
    )
}
