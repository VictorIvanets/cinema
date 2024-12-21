import { IMovieByID } from '../../api/api.types'

interface IMovieInfo {
	dataLoad: IMovieByID
}

export default function MovieInfo({ dataLoad }: IMovieInfo) {
	return (
		<>
			<p>
				<span>Genre:</span> {dataLoad.Genre}
			</p>
			<p>
				<span>Director:</span> {dataLoad.Director}
			</p>
			<p>
				<span>Actors:</span> {dataLoad.Actors}
			</p>
			<p>
				<span>Writer:</span> {dataLoad.Writer}
			</p>
			<p>
				<span>Country: </span>
				{dataLoad.Country}
			</p>
			<p>
				<span>Language:</span> {dataLoad.Language}
			</p>
			{dataLoad.Ratings.length >= 2 ? (
				<p>
					<span>Ratings IMD:</span> {dataLoad.Ratings[0].Value}
					<span> | </span>
					{dataLoad.Ratings[1].Value}
				</p>
			) : (
				<p>
					<span>Ratings IMD: </span>
					{dataLoad.imdbRating}
				</p>
			)}
			<h4>
				<span>Year:</span> {dataLoad.Year}
			</h4>
		</>
	)
}
