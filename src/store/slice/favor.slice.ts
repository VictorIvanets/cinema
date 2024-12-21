import {  createSlice } from '@reduxjs/toolkit'


interface IFavor {
    movieId: string[]
}


const initialState: IFavor = {
	movieId: [],
}


export const favorSlice = createSlice({
	name: 'favor',
	initialState,
	reducers: {
		clearMovie: (state) => {
			state.movieId = []
		},
		delMovie: (state, action) => {
			const index = state.movieId.findIndex((i)=> i === action.payload)
			state.movieId.splice(index, 1)

		},
		AddMovie: (state, action) => {
            if (state.movieId.includes(action.payload)) return
			else state.movieId.push(action.payload)
		},
	},

})

export default favorSlice.reducer
export const favorActions = favorSlice.actions
