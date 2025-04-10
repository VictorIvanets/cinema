import './logInComponent.sass'
import { logInComponentProps } from '../types/auth.types'

import LogIn from './logIn'
import { useState } from 'react'
import Registration from './registration'

const LogInComponent = ({ close }: logInComponentProps) => {
	const [isLogin, setIsLogin] = useState(false)

	return (
		<div className="logincomponent">
			<div className="logincomponent__box">
				<button onClick={() => close()} className="logincomponent__close">
					<p>✕</p>
				</button>
				{!isLogin ? (
					<>
						<LogIn close={close} />
						<p
							onClick={() => setIsLogin(!isLogin)}
							style={{ cursor: 'pointer' }}
						>
							Don't have an account? Please register
						</p>
					</>
				) : (
					<div>
						<Registration close={close} />
						<p
							onClick={() => setIsLogin(!isLogin)}
							style={{ cursor: 'pointer' }}
						>
							log in
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default LogInComponent
