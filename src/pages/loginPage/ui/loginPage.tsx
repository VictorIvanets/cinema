import { memo, useEffect } from 'react'
import './loginpage.sass'
import { useLoadingBar } from 'react-top-loading-bar'

//page for testing LoadingBar
interface loginPageProps {}
const loginPage = memo(({}: loginPageProps) => {
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
			<div className="logincontainer">
				<h1>LogiPage</h1>
			</div>
		</>
	)
})

export default loginPage
