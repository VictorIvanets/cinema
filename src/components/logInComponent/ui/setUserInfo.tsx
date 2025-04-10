import { FormEvent, useEffect, useState } from 'react'
import {
	IAddInfo,
	IAddInfoForm,
	TUrerData,
	TypeSetInfo,
} from '../types/auth.types'
import { useAddInfoAPI } from '../api/addInfo.api'
import {
	toastrForError,
	toastrForSuccess,
} from '../../../store/toastr/toastrForFavorites'
import { LOCAL_JWT_KEY } from '../key/jwtkey'
import { PreLoaderGradient } from '../../preloaders/PreloaderGradient'

interface setUserInfoProps {
	type: TypeSetInfo
	jwt: string
	close: () => void
	oldValue?: TUrerData | null
}

const SetUserInfo = ({ jwt, close, type, oldValue }: setUserInfoProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [firstNameVal, setfirstNameval] = useState('')
	const [lastNameVal, setlastNameval] = useState('')
	const [cityVal, setcityval] = useState('')
	const [countryVal, setcountryval] = useState('')
	const [emailVal, setemailval] = useState('')
	const [phoneVal, setphoneval] = useState('')

	useEffect(() => {
		if (oldValue) {
			setfirstNameval(oldValue.FirstName)
			setlastNameval(oldValue.LastName)
			setcityval(oldValue.City)
			setcountryval(oldValue.Country)
			setemailval(oldValue.Email)
			setphoneval(oldValue.Phone)
		}
	}, [oldValue])

	const submit = async (e: FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		const target = e.target as typeof e.target & IAddInfoForm
		const dataInfo: IAddInfo = {
			firstName: target.firstName.value,
			lastName: target.lastName.value,
			city: target.city.value,
			country: target.country.value,
			email: target.email.value,
			phone: target.phone.value,
		}
		const response = await useAddInfoAPI(dataInfo, jwt)
		if (response) {
			if (response.data) {
				toastrForSuccess(response.data?.status)
				localStorage.setItem(LOCAL_JWT_KEY, jwt)
				setIsLoading(false)
				close()
			}
			if (response.error) {
				toastrForError(response.error)
			}
		}
	}

	return (
		<>
			<form onSubmit={submit} style={{ gap: '1.5rem' }}>
				{!isLoading ? <h1>{type} USER INFO</h1> : <PreLoaderGradient />}
				<div className="inputbox">
					<input
						onChange={(e) => setfirstNameval(e.target.value)}
						value={firstNameVal}
						required
						name={'firstName'}
						type="text"
						id={'firstName'}
					/>
					<label htmlFor={'firstName'}>
						<p>{'firstName'}</p>
					</label>
				</div>
				<div className="inputbox">
					<input
						onChange={(e) => setlastNameval(e.target.value)}
						value={lastNameVal}
						required
						name={'lastName'}
						type="text"
						id={'lastName'}
					/>
					<label htmlFor={'lastName'}>
						<p>{'lastName'}</p>
					</label>
				</div>
				<div className="inputbox">
					<input
						onChange={(e) => setcityval(e.target.value)}
						value={cityVal}
						required
						name={'city'}
						type="text"
						id={'city'}
					/>
					<label htmlFor={'city'}>
						<p>{'city'}</p>
					</label>
				</div>
				<div className="inputbox">
					<input
						onChange={(e) => setcountryval(e.target.value)}
						value={countryVal}
						required
						name={'country'}
						type="text"
						id={'country'}
					/>
					<label htmlFor={'country'}>
						<p>{'country'}</p>
					</label>
				</div>

				<div className="inputbox">
					<input
						onChange={(e) => setemailval(e.target.value)}
						value={emailVal}
						pattern="([\w\-\+\.]+)@(([\w-]+\.)+[\w-]{2,4})"
						required
						name="email"
						type="text"
						id="email"
					/>
					<label htmlFor="email">
						<p>email</p>
					</label>
				</div>
				<div className="inputbox">
					<input
						onChange={(e) => setphoneval(e.target.value)}
						value={phoneVal}
						required
						pattern="((\+38)?)([\-]|[\(])?\d{3}([\-]|[\)])?\d{3}[\-]?\d{2}[\-]?\d{2}"
						name="phone"
						type="text"
						id="phone"
					/>
					<label htmlFor="phone">
						<p>phone</p>
					</label>
				</div>
				<button className="logincomponent__submit">{type} INFO</button>
			</form>
			{type === TypeSetInfo.UPDATE && (
				<button onClick={close} className="logincomponent__submit">
					CLOSE
				</button>
			)}
		</>
	)
}

export default SetUserInfo
