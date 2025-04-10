import axios, { AxiosError } from "axios"
import {  TRegisterResponse } from "../types/auth.types"
import { myhost } from "../../../api/api-host"

export const useDeleteAccountAPI = async (jwt: string): Promise<TRegisterResponse | undefined> => {
    try {
        const data = await axios.delete<TRegisterResponse>(
            `http://${myhost}:3200/auth/delete`,	
            { headers: {"Authorization" : jwt} },
        )
        return data && data.data
    }
    catch(e) {
        if (e instanceof AxiosError)
        return {error: e.message, data: null}
    }
}