import Link from 'next/link'
import Image from 'next/image'
import { Box, styled } from 'lib/stitches'

const StyledLink = styled(Link, {
    color: '$primary-color',
})

const CustomLink: React.FC<{ href: string }> = (props) => {
    const href = props.href
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <StyledLink href={href}>
                <a>
                    <span className="link">{props.children}</span>
                </a>
            </StyledLink>
        )
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const _Image = styled(Image, { borderRadius: '0.5rem' })

const MDXImage: React.FC<{ src: string }> = ({ src }) => (
    <Box
        css={{
            position: 'relative',
            boxSizing: 'border-box',
        }}
    >
        <_Image src={src} layout="responsive" width="100%" height="56.25%" />
    </Box>
)

const MDXComponents = {
    Link: CustomLink,
    Image: MDXImage,
}

export default MDXComponents
