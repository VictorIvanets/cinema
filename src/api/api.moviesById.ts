import axios, { AxiosError } from 'axios'
import { IMovieByID } from './api.types'

// const API_KEY = import.meta.env.VITE_API_KEY
// const API_URL = import.meta.env.VITE_API_URL

const API_KEY = 'caa5de32'
const API_URL = 'https://www.omdbapi.com'

const apiLoadMovieById = async (
        id: string,
    ): Promise<IMovieByID | AxiosError | undefined>=> {
            
            try {
            const {data} = await axios.get<IMovieByID>(
                `${API_URL}/?apikey=${API_KEY}&i=${id}`, 
            )
            return data
            } catch (e) {
                if (e instanceof AxiosError) {
                    return e
                }
            } 
        }
const LoadMovieById = async (
        id: string,
        setData: React.Dispatch<React.SetStateAction<IMovieByID | null>>,
        setErrors: React.Dispatch<React.SetStateAction<string | null>>,
    ) => {
        setErrors(null)
        const data = await apiLoadMovieById(id)
        if (data instanceof AxiosError) {
            setErrors(data.message)
        } else {
            data && setData(data)
        }
    }
    export default LoadMovieById