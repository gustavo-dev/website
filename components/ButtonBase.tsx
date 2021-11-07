import { RippleComponent } from 'components/Ripple'
import { motion } from 'framer-motion'
import React, { useRef, useState, MouseEventHandler, useCallback } from 'react'

interface ButtonBaseProps {
    className?: string
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({ children }) => {
    const nextKey = useRef(0)

    const [ripples, setRipples] = useState<JSX.Element[]>([])

    const deleteLastRipple = () => {
        setRipples((old) => old.slice(1))
    }

    const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
        async (e) => {
            const button = e.currentTarget
            const diameter =
                Math.max(button.clientWidth, button.clientHeight) * 2
            const radius = diameter / 2

            const width = diameter
            const left = e.clientX - (button.offsetLeft + radius)
            const top = e.clientY - (button.offsetTop + radius)

            setRipples((old) => {
                return [
                    ...old,
                    <RippleComponent
                        key={nextKey.current}
                        left={left}
                        top={top}
                        width={width}
                        deleteLastRipple={deleteLastRipple}
                    />,
                ]
            })

            nextKey.current += 1
        },
        []
    )

    return (
        <motion.div onClick={handleClick}>
            {children}
            <span className="ripple-root">{ripples}</span>
        </motion.div>
    )
}
