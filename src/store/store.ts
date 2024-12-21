import { configureStore } from '@reduxjs/toolkit'
import favorSlice from './slice/favor.slice'
import  favorDataSlice  from './slice/favoriteData.slice'


export const store = configureStore({
	reducer: {
        favor: favorSlice,
        favorData: favorDataSlice
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch 