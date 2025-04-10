import axios, { AxiosError } from "axios"
import { TRegisterResponse } from "../types/auth.types"
import { myhost } from "../../../api/api-host"

export const useRegisterAPI = async (username: string, password: string): Promise<TRegisterResponse | undefined> => {
    try {
        const data = await axios.post<TRegisterResponse>(
            `http://${myhost}:3200/auth/register`,			
                { username, password },
        )
        return data && data.data
    }
    catch(e) {
        if (e instanceof AxiosError)
        return {error: e.message, data: null}
    }
}