import { memo, useCallback, useEffect, useState } from 'react'
import MaterialIcon from '../../../shared/icons/Materialicons'
import './moviebyid.sass'
import { IMovieByID } from '../../../api/api.types'
import { favorActions } from '../../../store/slice/favor.slice'
import { favorDataActions } from '../../../store/slice/favoriteData.slice'
import { toastrForFavorotes } from '../../../store/toastr/toastrForFavorites'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispath, RootState } from '../../../store/store'
import { Preloader } from '../../preloaders/PreloaderBall'
interface likeBtnProps {
	dataLoad: IMovieByID | null
}
const LikeBtn = memo(({ dataLoad }: likeBtnProps) => {
	const [checkFav, setCheckFav] = useState<boolean>(true)
	const dispatch = useDispatch<AppDispath>()
	const movieId = useSelector((state: RootState) => state.favor.movieId)

	const favoritHendler = useCallback(
		(dataLoad: IMovieByID) => {
			dispatch(favorActions.AddMovie(dataLoad.imdbID))
			dispatch(favorDataActions.AddMovie(dataLoad))

			setCheckFav(false)
		},
		[dataLoad],
	)

	const chekFavorites = useCallback(
		(dataLoad: IMovieByID, movieId: string[]): void => {
			const chek = movieId.includes(dataLoad.imdbID)
			setCheckFav(!chek)
		},
		[dataLoad, movieId],
	)

	useEffect(() => {
		setTimeout(() => {
			dataLoad && chekFavorites(dataLoad, movieId)
		})
	}, [dataLoad, checkFav])

	if (!dataLoad)
		return (
			<>
				<Preloader />
			</>
		)

	return (
		<div
			className="moviebyid__like"
			onClick={() => {
				favoritHendler(dataLoad)
				toastrForFavorotes(checkFav, dataLoad.Title)
			}}
		>
			<h2 style={checkFav ? { color: 'white' } : {}}>
				<MaterialIcon name="MdFavorite" />
			</h2>
			<p>
				<span>f</span>avorites
			</p>
		</div>
	)
})

export default LikeBtn
