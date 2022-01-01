import { styled } from 'lib/stitches'

const MDXStyling = styled('article', {
    mt: '1rem',
    fontSize: '1rem',
    lineHeight: 1.75,
    color: '$primary-text',
    display: 'flex',
    flexDirection: 'column',
    '& >:first-child': { my: '1.25em' },
    '& :where(h2)': {
        fontWeight: 700,
        fontSize: '1.5rem',
        mt: '2em',
        mb: '1em',
        lineHeight: 1.3333333,
    },
    '& :where(h3)': {
        fontWeight: 600,
        fontSize: '1.25rem',
        mt: '1.6em',
        mb: '0.6em',
        lineHeight: 1.6,
    },
    '& :where(a), .link': {
        color: '$primary-color',
        textDecoration: 'underline',
        fontWeight: 500,
    },
    '& :where(p)': { my: '1.25rem' },
    '& :where(h2+*)': {
        mt: 0,
    },
    '& :where(ol)': {
        listStyleType: 'decimal',
        pl: '1.625em',
    },
    '& :where(ul)': {
        listStyleType: 'disc',
        pl: '1.625em',
    },
    '& :where(li)': { my: '0.5em' },
    '& :where(ol>li)': { pl: '0.375em', my: '0.5em' },
    '& :where(ul>li)': { pl: '0.375em' },
    '& :where(strong)': {
        fontWeight: 600,
    },
    '& :where(pre)': {
        border: '0 solid',
        boxSizing: 'border-box',
        borderColor: '$bg-16',
        borderWidth: '1px',
        overflowX: 'auto',
        fontWeight: 400,
        fontSize: '0.875em',
        lineHeight: 1.7142857,
        my: 1.7142857,
        br: '0.375em',
        py: '0.8571429em',
        px: '1.1428571em',
    },
    '& :where(code)': {
        br: '0.5em',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
    },
    '& :where(hr)': {
        borderTopWidth: '1px',
        borderColor: '$bg-6',
        my: '3em',
    },
    '.token.string, .token.attr-value, .token.attr-value>.token.punctuation': {
        color: '#FF0',
    },
    '.token.tag, .token.keyword, .token.operator, .token.attr-value>.token.punctuation.attr-equals, .token.script-punctuation':
        {
            color: '#F0D',
        },
    '.token.number, .token.boolean': {
        color: '#0FF',
    },
    '.token.function, .token.attr-name': {
        color: '$primary-color',
    },
    '.token.parameter': { color: '#F90' },
    '.token.class-name': { color: '#AAF' },
    '.token.punctuation': { color: '$primary-text' },
})

export default MDXStyling
