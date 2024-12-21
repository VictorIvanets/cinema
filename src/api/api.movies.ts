import axios, { AxiosError } from 'axios'
import { movieType, ResponseMovie, ResponsServer } from './api.types'

// const API_KEY = import.meta.env.VITE_API_KEY
// const API_URL = import.meta.env.VITE_API_URL
const API_KEY = 'caa5de32'
const API_URL = 'https://www.omdbapi.com'


export const apiLoadMovies = async (
        searchparam?: string,
        page: number = 1,
        year?: string, 
        type: movieType = movieType.all,
    ): Promise<ResponsServer | AxiosError | undefined>=> {
            
            try {
            const {data} = await axios.get<ResponsServer>(
                `${API_URL}/?apikey=${API_KEY}&s=${searchparam}*&type=${type}&y=${year}&page=${page}`, 
            )
            
            return data
            } catch (e) {
                if (e instanceof AxiosError) {
                    return e
                }
            } 
        }

export async function getMoviesForStart(
            movies: string,
            year: string,
            setError: React.Dispatch<React.SetStateAction<string | null>>,
        ) {
            let response: ResponseMovie[] = []
            setError(null)
            const data = await apiLoadMovies(movies, 1, year)
    
            if (data instanceof AxiosError) {
                setError(data.message)
            } else {
                data && data.Error && setError(data.Error) // API ERROR Too many results
                if (data && data.Search) response = data && data.Search
                return response
            }
        }


export async function getSearchMovies(
            search: string,
            next: number,
            setData: React.Dispatch<React.SetStateAction<ResponseMovie[]>>,
            setError: React.Dispatch<React.SetStateAction<string | null>>,
            setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
            dataLoad: ResponseMovie[]
        ) {
            setError(null)
            setIsLoading(true)
            const data = await apiLoadMovies(search, next)
    
            if (data instanceof AxiosError) {
                setError(data.message)
                setIsLoading(false)
            } else {
                data && data.Error && setError(data.Error) // API ERROR Too many results
                const alldata = data && data.Search
    
                if (next >= 2) {
                    alldata && setData([...dataLoad, ...alldata])
                } else {
                    alldata && setData(alldata)
                }
                setIsLoading(false)
            }
        }
    


       
        
        
        
    

    





