import { useRef, AnimationEvent, useState, useEffect } from 'react'
import { AnmationName, PropsType } from './animation.types'

const AnimatabelItem = ({
	children,
	duration = '0.4',
	className,
}: PropsType) => {
	const animationRef = useRef<HTMLDivElement>(null)
	const [animationType, setAnimationType] = useState<string | null>(null)

	const animate = (animeType: AnmationName) => {
		setAnimationType(animeType)

		const divElement = animationRef.current
		divElement?.classList.remove(`${AnmationName.slideIn}-after`)
		divElement?.classList.remove(`${AnmationName.slideOut}-after`)
		divElement?.classList.add(`${animeType}-before`)

		requestAnimationFrame(() => {
			divElement?.classList.add(`${animeType}-active`)
			requestAnimationFrame(() => {
				divElement?.classList.remove(`${animeType}-before`)
			})
		})
	}

	useEffect(() => {
		animate(AnmationName.slideIn)
	})

	const hendelAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
		e.preventDefault()
		const divElement = e.currentTarget
		divElement?.classList.add(`${animationType}-after`)
		requestAnimationFrame(() => {
			divElement?.classList.remove(`${animationType}-active`)
		})
	}

	return (
		<div
			className={className}
			ref={animationRef}
			style={{ animationDuration: `${duration}s` }}
			onAnimationEnd={hendelAnimationEnd}
		>
			{children}
		</div>
	)
}

export default AnimatabelItem
