import {  createSlice } from '@reduxjs/toolkit'
import { IMovieByID } from '../../api/api.types'


interface IFavorData {
    movieData: IMovieByID[]
}


const initialState: IFavorData = {
	movieData: [],
}

export const favorDataSlice = createSlice({
	name: 'favorData',
	initialState,
	reducers: {
		clearMovie: (state) => {
			state.movieData = []
		},
		delItemMovie: (state, action) => {
			const index = state.movieData.findIndex((i)=> i.imdbID === action.payload)
			state.movieData.splice(index, 1)
		},
		AddMovie: (state, action) => {
			const check = state.movieData.find((i)=> i.imdbID === action.payload.imdbID)
			if(check) return
			else state.movieData.unshift(action.payload)
		},
	},

})

export default favorDataSlice.reducer
export const favorDataActions = favorDataSlice.actions
