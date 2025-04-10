import { useEffect, useState } from 'react'
import './account.sass'
import { TUrerData } from '../logInComponent/types/auth.types'
import { useInfoAccountAPI } from './api.account'
import { useDeleteAccountAPI } from '../logInComponent/api/deleteacc.api'
import {
	toastrForSuccess,
	toastrForError,
} from '../../store/toastr/toastrForFavorites'
interface IAccountProps {
	exitHendler: () => void
	isAccessJWT: string
	updateHendler: () => void
	setOldValue: (val: TUrerData) => void
}
const Account = ({
	exitHendler,
	isAccessJWT,
	updateHendler,
	setOldValue,
}: IAccountProps) => {
	const [info, setInfo] = useState<TUrerData | null>(null)
	const [delAcc, setdDelAcc] = useState<boolean>(false)

	const loadInfo = async (jwt: string) => {
		const data = await useInfoAccountAPI(jwt)
		data && setInfo(data.data)
		data && data.data && setOldValue(data.data)
	}

	const deleteAccHendler = async () => {
		const response = await useDeleteAccountAPI(isAccessJWT)
		if (response) {
			response.data && toastrForSuccess(response.data)
			response.error && toastrForError(response.error)
			exitHendler()
			setdDelAcc(!delAcc)
		}
	}

	useEffect(() => {
		loadInfo(isAccessJWT)
	}, [])

	return (
		<div className="account">
			{delAcc && (
				<div className="account__delbox">
					<h3>delete {info?.username} account?</h3>
					<div className="account__delbox__btn">
						<h4 onClick={() => deleteAccHendler()}>DEL</h4>
						<h4 onClick={() => setdDelAcc(!delAcc)}>ESC</h4>
					</div>
				</div>
			)}
			<h2>account info</h2>
			<div>
				<p> username: {info?.username}</p>
				<p> FirstName: {info?.FirstName}</p>
				<p> LastName: {info?.LastName}</p>
				<p> City:{info?.City}</p>
				<p> Country: {info?.Country}</p>
				<p> Email: {info?.Email}</p>
				<p> Phone: {info?.Phone}</p>
			</div>
			<div className="account__bottombtnbox">
				<h4 onClick={() => updateHendler()} className="account__exitbtn">
					UPDATE INFO
				</h4>
				<h4 onClick={() => setdDelAcc(!delAcc)} className="account__exitbtn">
					DELETE ACCOUNT
				</h4>
				<h4 onClick={() => exitHendler()} className="account__exitbtn">
					EXIT
				</h4>
			</div>
		</div>
	)
}

export default Account
