import { Caption } from 'components/styled/Text'
import { styled } from 'lib/stitches'
import React from 'react'

interface ChipProps {
    value: string
}

const ChipContainer = styled('div', {
    p: '.2rem',
    px: '.75rem',

    color: '$primary-color',

    background: '$primary-color-subtle',

    borderRadius: '1rem',
})

export const Chip: React.FC<ChipProps> = ({ value }) => {
    return (
        <ChipContainer>
            <Caption>{value}</Caption>
        </ChipContainer>
    )
}
