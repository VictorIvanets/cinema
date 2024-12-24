import { Link } from 'react-router-dom'
import { ResponseMovie } from '../../../api/api.types'

interface IItemMovieProps {
	info: ResponseMovie
}

export default function ItemSearchMovies({ info }: IItemMovieProps) {
	return (
		<Link to={`/movie/${info.imdbID}`}>
			<div className="sidebarright__itemmovies">
				<div>
					<h4>{info.Title}</h4>
					<p>{info.Year}</p>
				</div>
			</div>
		</Link>
	)
}
