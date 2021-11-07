import { useState } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'

interface YTIteraction {
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
            duration: 0.3,
        },
    },
}
const variants_border: Variants = {
    border: {
        opacity: 0.2,
        transition: {
            duration: 0,
        },
    },
    border_followup: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
}

export const YTIteraction: React.FC<YTIteraction> = ({ children }) => {
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
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={onMouseLeave}
        >
            {children}
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={variants_border}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={variants_background}
                />
            </div>
        </div>
    )
}
