import { FormEvent } from 'react'

interface reguserformProps {
	submit: (e: FormEvent) => Promise<void>
	errorReg: string | null
	setErrorReg: (val: string | null) => void
}
const RegisterForm = ({ submit, errorReg, setErrorReg }: reguserformProps) => {
	return (
		<form onSubmit={submit}>
			<h1>REGISTRATION</h1>
			<div className="inputbox">
				<input
					required
					name="reglogin"
					type="text"
					id="reglogin"
					pattern="\w{4,30}"
				/>
				<label className="" htmlFor="reglogin">
					<p>login</p>
				</label>
				<p style={{ color: 'red', textAlign: 'center' }}>
					lenght between 4 and 30. only a-z, 0-9
				</p>
			</div>

			<div className="inputbox">
				<input
					required
					pattern="[\S]{6,50}"
					name="regpassword"
					type="password"
					id="regpassword"
				/>
				<label id="passwordlabel" className="" htmlFor="regpassword">
					<p>password</p>
				</label>
				<p style={{ color: 'red', textAlign: 'center' }}>
					lenght between 6 and 50
				</p>
			</div>
			{errorReg ? (
				<h4 style={{ cursor: 'pointer' }} onClick={() => setErrorReg(null)}>
					{errorReg}
				</h4>
			) : (
				<button className="logincomponent__submit">OK</button>
			)}
		</form>
	)
}

export default RegisterForm
