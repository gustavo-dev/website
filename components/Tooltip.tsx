import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentDescription } from 'components/styled/Text'
import { styled } from 'lib/stitches'

interface TooltipProps {
    trigger: JSX.Element
    delay?: number
}

const StyledArrow = styled(TooltipPrimitive.Arrow, {
    fill: '$tooltip',
})

const StyledContent = styled(TooltipPrimitive.Content, {
    background: '$tooltip',

    boxSizing: 'border-box',

    br: 2,

    p: '.8rem',

    boxShadow: '0 1px 2px rgba(0, 0, 0, .4)',
})

export const Tooltip: React.FC<TooltipProps> = ({
    trigger,
    delay = 350,
    children,
}) => {
    return (
        <TooltipPrimitive.Root delayDuration={delay}>
            <TooltipPrimitive.Trigger asChild>
                {trigger}
            </TooltipPrimitive.Trigger>
            <StyledContent sideOffset={5}>
                <ComponentDescription>{children}</ComponentDescription>
                <StyledArrow />
            </StyledContent>
        </TooltipPrimitive.Root>
    )
}
