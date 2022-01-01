import { styled } from 'lib/stitches'
import { useDetectAdBlock } from 'adblock-detect-react'

const AdBlockWarning = styled('div', {
    border: '2px solid $alert-color',
    borderRadius: '0.5rem',

    color: '$alert-color',

    width: '100%',

    mb: '1.5rem',

    fontSize: '.9125rem',
    fontWeight: 500,

    pd: '1rem',
})

export const AdBlockAlert: React.FC = () => {
    const adBlockDetected = useDetectAdBlock()

    return adBlockDetected ? (
        <AdBlockWarning>
            Your Ad Block is active. Please consider removing it since ads are
            our main source of income
        </AdBlockWarning>
    ) : null
}
