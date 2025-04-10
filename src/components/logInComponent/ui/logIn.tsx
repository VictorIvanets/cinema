import { useState, FormEvent, useEffect } from 'react'
import { toastrForError } from '../../../store/toastr/toastrForFavorites'
import { uselogitAPI } from '../api/auth.api'
import { LOCAL_JWT_KEY } from '../key/jwtkey'
import { TData, LoginForm } from '../types/auth.types'
import { PreLoaderGradient } from '../../preloaders/PreloaderGradient'

const LogIn = ({ close }: { close: () => void }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [data, setData] = useState<TData | null>(null)
	const [errorLog, setErrorLog] = useState<string | null>(null)
	const [errorPass, setErrorPass] = useState<string | null>(null)
	const [inputPass, setInputPass] = useState<string | null>(null)
	const [inputLogin, setInputLogin] = useState<string | null>(null)

	const submit = async (e: FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		const target = e.target as typeof e.target & LoginForm
		const { login, password } = target
		const response = await uselogitAPI(login.value, password.value)
		if (response) {
			response.data && setData(response.data)
			response.error && toastrForError(response.error) // toastr redux
			response.error && errorHendler(response.error)

			setIsLoading(false)
		}
	}

	const errorHendler = (error: string) => {
		error.includes('password') && setErrorPass(error)
		error.includes('not found') && setErrorLog(error)
	}

	useEffect(() => {
		data && localStorage.setItem(LOCAL_JWT_KEY, data?.jwt)
		data && close()
	}, [data])

	useEffect(() => {
		setErrorPass(null)
		setErrorLog(null)
	}, [inputPass, inputLogin])

	return (
		<div className="logincomponent__login">
			{isLoading ? (
				<PreLoaderGradient />
			) : (
				<form onSubmit={submit}>
					<h1>enter account</h1>
					<div className="inputbox">
						<input
							onChange={(e) => setInputLogin(e.target.value)}
							required
							name="login"
							type="text"
							id="login"
						/>
						<label className="" htmlFor="login">
							<p>login</p>
						</label>
					</div>
					{errorLog ? (
						<p style={{ color: 'red', textAlign: 'center' }}>{errorLog}</p>
					) : (
						<p>
							<br />
						</p>
					)}
					<div className="inputbox">
						<input
							required
							name="password"
							type="password"
							onChange={(e) => setInputPass(e.target.value)}
							id="password"
						/>
						<label id="passwordlabel" className="" htmlFor="password">
							<p>password</p>
						</label>
					</div>
					{errorPass ? (
						<p style={{ color: 'red', textAlign: 'center' }}>{errorPass}</p>
					) : (
						<p>
							<br />
						</p>
					)}
					<button className="logincomponent__submit">SUBMIT</button>
				</form>
			)}
		</div>
	)
}

export default LogIn
