import axios, { AxiosError } from "axios"
import { IAddInfo, TAddInfoResponse } from "../types/auth.types"
import { myhost } from "../../../api/api-host"

export const useAddInfoAPI = async (info: IAddInfo, jwt: string): Promise<TAddInfoResponse | undefined> => {
    try {
        const data = await axios.post<TAddInfoResponse>(
            `http://${myhost}:3200/auth/addinfo`,
            { ...info },	
            { headers: {"Authorization" : jwt} },
        )
        return data && data.data
    }
    catch(e) {
        if (e instanceof AxiosError)
        return {error: e.message, data: null}
    }
}