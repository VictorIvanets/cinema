import { ResponseMovie } from '../../api/api.types'
import './itemMovie.sass'
import Image from '../ImageComponent/Image'
import { Link } from 'react-router-dom'

interface IItemMovieProps {
	data: ResponseMovie
}

export default function ItemMovies({ data }: IItemMovieProps) {
	return (
		<Link to={`/movie/${data.imdbID}`}>
			<div className="itemmovies">
				<Image src={data.Poster} alt={data.Title} />

				<div>
					<h4>{data.Title}</h4>
					<p>
						{data.Year}
						<span>{data.Type}</span>
					</p>
				</div>
			</div>
		</Link>
	)
}
