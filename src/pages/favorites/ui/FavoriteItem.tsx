import './favoritespage.sass'
import { IMovieByID } from '../../../api/api.types'
import Image from '../../../components/ImageComponent/Image'
import MaterialIcon from '../../../shared/icons/Materialicons'
import { useDispatch } from 'react-redux'
import { AppDispath } from '../../../store/store'
import { favorDataActions } from '../../../store/slice/favoriteData.slice'
import { favorActions } from '../../../store/slice/favor.slice'
import { Link } from 'react-router-dom'
import MovieInfo from '../../../widgets/movieInfo/movieInfo'

interface IFavoriteItem {
	dataLoad: IMovieByID
}

export default function FavoriteItem({ dataLoad }: IFavoriteItem) {
	const dispatch = useDispatch<AppDispath>()

	return (
		<div className="favorites__item">
			<div className="favorites__leftbox">
				<Link to={`/movie/${dataLoad.imdbID}`}>
					<div className="favorites__poster">
						<Image src={dataLoad.Poster} alt={dataLoad.Title} height="100%" />
					</div>
				</Link>
				<div
					onClick={() => {
						dispatch(favorDataActions.delItemMovie(dataLoad.imdbID))
						dispatch(favorActions.delMovie(dataLoad.imdbID))
					}}
					className="favorites__delitem"
				>
					<h3>
						<MaterialIcon name="MdDelete" />
					</h3>
				</div>
			</div>
			<div className="favorites__info">
				<h3>{dataLoad.Title}</h3>

				<p>
					<span>{dataLoad.Type}</span>
				</p>
				<MovieInfo dataLoad={dataLoad} />
				<p>{dataLoad.Plot}</p>
			</div>
		</div>
	)
}
