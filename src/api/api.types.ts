export interface ResponsServer {
	Search: ResponseMovie[]
	Error: string // API ERROR Too many results
}

export interface ResponseMovie {
	Poster: string
	Title: string
	Type: string
	Year: string
	imdbID: string
}

export enum movieType {
	series = 'series',
	movie = 'movie',
	all = '',
}

interface Ratings {
	Source: string
	Value: string
}

export interface IMovieByID {
	Actors: string
	Awards: string
	BoxOffice: string
	Country: string
	DVD: string
	Director: string
	Genre: string
	Language: string
	Metascore: string
	Plot: string
	Poster: string
	Production: string
	Rated: string
	Ratings: Ratings[]
	Released: string
	Response: string
	Runtime: string
	Title: string
	Type: string
	Website: string
	Writer: string
	Year: string
	imdbID: string
	imdbRating: string
	imdbVotes: string
}
