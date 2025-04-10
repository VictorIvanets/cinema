import axios, { AxiosError } from "axios"
import { TAccountResponse } from "../logInComponent/types/auth.types"
import { myhost } from "../../api/api-host"

export const useInfoAccountAPI = async (tokenStr: string): Promise<TAccountResponse | undefined> => {
    try {
            const data = await axios.get<TAccountResponse>(
                `http://${myhost}:3200/auth/userinfo`,			
                { headers: {"Authorization" : tokenStr} },
            )
            // console.log(data.data)
            return data && data.data 
        }
        catch(e) {
            if (e instanceof AxiosError)
            return {error: e.message, data: null}
        }
}


