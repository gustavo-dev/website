import { motion } from 'framer-motion'

export interface RippleComponentProps {
    key: number
    left: number
    top: number
    width: number
    deleteLastRipple: () => void
}

export const RippleComponent: React.FC<RippleComponentProps> = ({
    key,
    left,
    top,
    width,
    deleteLastRipple,
}) => {
    return (
        <motion.span
            key={key}
            style={{ width, height: width, left, top }}
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0, 0, 0.2, 1] }}
            onAnimationComplete={deleteLastRipple}
        />
    )
}
