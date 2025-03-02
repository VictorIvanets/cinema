import { useParams } from 'react-router-dom'
import './movieById.sass'
import { memo, useEffect, useState } from 'react'
import LoadMovieById from '../../../api/api.moviesById'
import { IMovieByID } from '../../../api/api.types'
import { Preloader } from '../../preloaders/PreloaderBall'
import Image from '../../ImageComponent/Image'
import BtnBack from '../../../widgets/btnBack/BtnBack'
import MovieInfo from '../../../widgets/movieInfo/movieInfo'
import AnimatabelItem from '../../animation/AnimatabelItem'
import LikeBtn from './likeBtn'

const MoviesById = memo(() => {
	const { id } = useParams()
	const [dataLoad, setDataLoad] = useState<IMovieByID | null>(null)
	const [erorrLoad, setError] = useState<string | null>(null)

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
		<AnimatabelItem className="moviebyid">
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
				<LikeBtn dataLoad={dataLoad} />
				<BtnBack />
			</div>
		</AnimatabelItem>
	)
})

export default MoviesById
