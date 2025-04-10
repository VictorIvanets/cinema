import axios, { AxiosError } from "axios"
import { TLogInResponse } from "../types/auth.types"
import { myhost } from "../../../api/api-host"

export const uselogitAPI = async (username: string, password: string): Promise<TLogInResponse | undefined> => {
		try {
			const data = await axios.post<TLogInResponse>(
				`http://${myhost}:3200/auth/login`,			
					{ username, password },
			)
			return data && data.data
		}
		catch(e) {
			if (e instanceof AxiosError)
			return {error: e.message, data: null}
		}
}
