import { styled } from 'lib/stitches'

const StyledButton = styled('button', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    minWidth: 64,

    boxSizing: 'border-box',

    outline: 0,
    border: 0,

    cursor: 'pointer',

    padding: '6px 16px',
    fontSize: '0.875rem',

    userSelect: 'none',

    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,

    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',

    color: 'rgba(0, 0, 0, .87)',
    boxShadow:
        'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;',

    verticalAlign: 'middle',

    borderRadius: 4,

    variants: {
        size: {
            small: {
                fontSize: '0.8125rem',
                padding: '4px 10px',
            },
            medium: {},
            large: {},
        },
        variant: { primary: {}, secondary: { color: 'red' } },
    },
})

const Button: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> &
        typeof StyledButton.defaultProps
> = ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
