import './ThemText.sass'

interface ThemTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	type?: 'default' | 'small' | 'big' | 'medium'
	children?: string
	color?: string
}
const ThemText = ({ type = 'default', children, color }: ThemTextProps) => {
	return (
		<p style={{ color: color }} className={`ThemText-${type}`}>
			{children}
		</p>
	)
}

export default ThemText
