import { useState, FormEvent } from 'react'
import { toastrForError } from '../../../store/toastr/toastrForFavorites'
import { uselogitAPI } from '../api/auth.api'
import { TData, TRegisterForm, TypeSetInfo } from '../types/auth.types'
import { PreLoaderGradient } from '../../preloaders/PreloaderGradient'
import { useRegisterAPI } from '../api/register.api'
import RegisterForm from './registerForm'
import SetUserInfo from './setUserInfo'

const Registration = ({ close }: { close: () => void }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [data, setData] = useState<TData | null>(null)
	const [errorReg, setErrorReg] = useState<string | null>(null)

	const submit = async (e: FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		const target = e.target as typeof e.target & TRegisterForm
		const { reglogin, regpassword } = target
		const response = await useRegisterAPI(reglogin.value, regpassword.value)
		console.log(reglogin.value, regpassword.value)
		if (response) {
			if (response.data) {
				const response = await uselogitAPI(reglogin.value, regpassword.value)
				response && response.data && setData(response?.data)
			}
			if (response.error) {
				setErrorReg(response.error)
				toastrForError(response.error)
			}
			setIsLoading(false)
		}
	}

	return (
		<div className="logincomponent__registration">
			{isLoading ? (
				<PreLoaderGradient />
			) : (
				<>
					{!data ? (
						<RegisterForm
							submit={submit}
							errorReg={errorReg}
							setErrorReg={setErrorReg}
						/>
					) : (
						<SetUserInfo type={TypeSetInfo.ADD} close={close} jwt={data.jwt} />
					)}
				</>
			)}
		</div>
	)
}

export default Registration
