import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { Box, styled } from 'lib/stitches'

const CustomLink: React.FC<{ href: string }> = (props) => {
    const href = props.href
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props}>{props.children}</a>
            </Link>
        )
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const _Image = styled(Image, { borderRadius: '0.5rem' })

const MDXImage: React.FC<ImageProps> = (props) => (
    <Box
        css={{
            position: 'relative',
            pt: '56.25%',
            boxSizing: 'border-box',
        }}
    >
        <_Image {...props} />
    </Box>
)

const MDXComponents = {
    a: CustomLink,
    Image: MDXImage,
}

export default MDXComponents
