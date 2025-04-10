export interface logInComponentProps {
	close: () => void
}

export type LoginForm = {
	login: {
		value: string
	}
	password: {
		value: string
	}
}
export type TRegisterForm = {
	reglogin: {
		value: string
	}
	regpassword: {
		value: string
	}
}

export enum TypeSetInfo {
	ADD = 'ADD',
	UPDATE = 'UPDATE',
}

export type TLogInResponse = {
    error: string | null,
    data: TData | null 
}
export type TRegisterResponse = {
    error: string | null,
    data: string | null 
}
export type TAddInfoResponse = {
    error: string | null,
    data: TaddInfoData | null 
}

export type TaddInfoData = {
	status: string
	info: string
}

export type TData = {
    jwt: string
}

export interface IAddInfo {
		firstName: string
		lastName: string
		city: string
		country: string
		email: string
		phone: string
}
export interface IAddInfoForm {
		firstName: {
			value: string
		}
		lastName: {
			value: string
		}
		city: {
			value: string
		}
		country: {
			value: string
		}
		email: {
			value: string
		}
		phone: {
			value: string
		}
}

export type TAccountResponse = {
    data: TUrerData | null,
    error: string | null
}

export type TUrerData = {
    id: number,
    username: string,
    FirstName: string,
    LastName: string,
    City: string,
    Country: string,
    Email: string,
    Phone: string
}