import './image.sass'

interface ImageProps {
	src: string
	alt: string
	width?: string
	height?: string
}

export default function Image({
	src,
	alt,
	width = '100%',
	height = '75%',
}: ImageProps) {
	return (
		<div style={{ width, height }} className="picturebox">
			<img className="picture" src={src} alt={alt} />
		</div>
	)
}
