import { memo, useEffect, useState } from 'react'
import './loginpage.sass'
import { useLoadingBar } from 'react-top-loading-bar'
import AnimatabelItem from '../../../components/animation/AnimatabelItem'
import { LogInComponent } from '../../../components/logInComponent'
import { LOCAL_JWT_KEY } from '../../../components/logInComponent/key/jwtkey'
import Account from '../../../components/account/account'
import SetUserInfo from '../../../components/logInComponent/ui/setUserInfo'
import {
	TUrerData,
	TypeSetInfo,
} from '../../../components/logInComponent/types/auth.types'

const loginPage = memo(() => {
	const [isLogin, setIsLogin] = useState(false)
	const [isUpdate, setIsUpdate] = useState(false)
	const [isAccessJWT, setIsAccessJWT] = useState<string | null>(null)
	const [oldValue, setOldValue] = useState<TUrerData | null>(null)

	const updateHendler = () => setIsUpdate(!isUpdate)

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

	useEffect(() => {
		const localjwt = localStorage.getItem(LOCAL_JWT_KEY)
		localjwt && setIsAccessJWT(localjwt)
	}, [isAccessJWT, isLogin])

	const exitHendler = () => {
		localStorage.removeItem(LOCAL_JWT_KEY)
		setIsAccessJWT(null)
	}

	return (
		<AnimatabelItem className="logincontainer">
			{!isAccessJWT ? (
				<>
					{isLogin ? (
						<LogInComponent close={() => setIsLogin(!isLogin)} />
					) : (
						<h1
							className="logincontainer__enterbtn"
							onClick={() => setIsLogin(!isLogin)}
						>
							☺ вхід у аккаунт
						</h1>
					)}
				</>
			) : (
				<div className="logincontainer__infobar">
					{!isUpdate ? (
						<Account
							isAccessJWT={isAccessJWT}
							exitHendler={() => exitHendler()}
							updateHendler={updateHendler}
							setOldValue={setOldValue}
						/>
					) : (
						<div className="logincontainer__infobar__update">
							<SetUserInfo
								type={TypeSetInfo.UPDATE}
								jwt={isAccessJWT}
								close={updateHendler}
								oldValue={oldValue}
							/>
						</div>
					)}
				</div>
			)}
		</AnimatabelItem>
	)
})

export default loginPage
