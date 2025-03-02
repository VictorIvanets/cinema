import { memo, useEffect } from 'react'
import './loginpage.sass'
import { useLoadingBar } from 'react-top-loading-bar'
import AnimatabelItem from '../../../components/animation/AnimatabelItem'
import AnimatableElasticItem from '../../../components/animation/AnimatableElasticItem'
import { Power } from '../../../components/animation/AnimatableElasticItem.types'

//page for testing LoadingBar

const loginPage = memo(() => {
	const { start, complete } = useLoadingBar({
		color: 'red',
		height: 10,
	})
	useEffect(() => {
		start()
		let timerId = setTimeout(() => {
			complete()
		}, 500)
		return () => clearTimeout(timerId)
	}, [])

	return (
		<>
			<AnimatabelItem className="logincontainer">
				<AnimatableElasticItem
					power={Power.hadrd}
					duration={4000}
					starting={true}
					valuePercent={100}
				>
					<h1>LOGIN PAGE</h1>
					<h1>тут ще не придумав що робити</h1>
					<a href="https://victorivanets.github.io/fishapp/">
						<h3>відвідайте, поки що, Fishing App</h3>
					</a>
				</AnimatableElasticItem>
			</AnimatabelItem>
		</>
	)
})

export default loginPage
