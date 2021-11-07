import React from 'react'
import { ButtonBase } from 'components/ButtonBase'
import { YTVideoRenderer } from 'components/YTVideoRenderer'

import { styled } from 'lib/stitches'

const Background = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '$gray12',
    width: '100vw',
    height: '100vh',
    gap: 50,
})

const Ripple: React.FC = ({}) => {
    return (
        <Background>
            <ButtonBase>Ripple Button</ButtonBase>
            <YTVideoRenderer>
                <div>Youtube Video Renderer</div>
            </YTVideoRenderer>
        </Background>
    )
}

export default Ripple
