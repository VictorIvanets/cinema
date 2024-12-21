import { useParams } from 'react-router-dom'
import './movieById.sass'
import { useCallback, useEffect, useState } from 'react'
import LoadMovieById from '../../../api/api.moviesById'
import { IMovieByID } from '../../../api/api.types'
import { Preloader } from '../../preloaders/PreloaderBall'
import Image from '../../ImageComponent/Image'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispath, RootState } from '../../../store/store'
import { favorActions } from '../../../store/slice/favor.slice'
import MaterialIcon from '../../../shared/icons/Materialicons'
import { favorDataActions } from '../../../store/slice/favoriteData.slice'
import BtnBack from '../../../widgets/btnBack/BtnBack'
import MovieInfo from '../../../widgets/movieInfo/movieInfo'

export default function MoviesById() {
	const { id } = useParams()
	const [dataLoad, setDataLoad] = useState<IMovieByID | null>(null)
	const [erorrLoad, setError] = useState<string | null>(null)
	const [checkFav, setCheckFav] = useState<boolean>(true)
	const movieId = useSelector((state: RootState) => state.favor.movieId)
	const dispatch = useDispatch<AppDispath>()

	const chekFavorites = useCallback(
		(dataLoad: IMovieByID, movieId: string[]): void => {
			const chek = movieId.includes(dataLoad.imdbID)
			setCheckFav(!chek)
		},
		[dataLoad, movieId],
	)

	const favoritHendler = useCallback(
		(dataLoad: IMovieByID) => {
			dispatch(favorActions.AddMovie(dataLoad.imdbID))
			dispatch(favorDataActions.AddMovie(dataLoad))
			setCheckFav(false)
		},
		[dataLoad],
	)

	useEffect(() => {
		setTimeout(() => {
			dataLoad && chekFavorites(dataLoad, movieId)
		})
	}, [dataLoad, checkFav])

	useEffect(() => {
		if (id) {
			LoadMovieById(id, setDataLoad, setError)
		}
	}, [id])

	if (!dataLoad)
		return (
			<>
				{erorrLoad && <h3>{erorrLoad}</h3>}
				<Preloader />
			</>
		)

	return (
		<div className="moviebyid">
			<h2>{dataLoad.Title}</h2>
			<div className="moviebyid__infobox">
				<div className="moviebyid__poster">
					<Image src={dataLoad.Poster} alt={dataLoad.Title} height="100%" />
				</div>
				<div className="moviebyid__info">
					<h3>{dataLoad.Type}</h3>
					<MovieInfo dataLoad={dataLoad} />
				</div>
			</div>
			<div className="moviebyid__plot">
				<p>{dataLoad.Plot}</p>
			</div>
			<div className="moviebyid__btnbox">
				<div
					className="moviebyid__like"
					onClick={() => favoritHendler(dataLoad)}
				>
					<h2 style={checkFav ? { color: 'white' } : {}}>
						<MaterialIcon name="MdFavorite" />
					</h2>
					<p>
						<span>f</span>avorites
					</p>
				</div>
				<BtnBack />
			</div>
		</div>
	)
}
