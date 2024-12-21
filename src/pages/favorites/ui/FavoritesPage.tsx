import './favoritespage.sass'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import FavoriteItem from './FavoriteItem'
import BtnBack from '../../../widgets/btnBack/BtnBack'
import { Preloader } from '../../../components/preloaders/PreloaderBall'
import { memo } from 'react'

const FavoritesPage = memo(() => {
	const movieDataFavor = useSelector(
		(state: RootState) => state.favorData.movieData,
	)

	return (
		<div className="favorites">
			<div className="favorites__header">
				<h2>favorites</h2>
				<BtnBack />
			</div>
			<div className="favorites__itembox">
				{movieDataFavor ? (
					movieDataFavor.map((data) => (
						<FavoriteItem key={data.imdbID} dataLoad={data} />
					))
				) : (
					<Preloader />
				)}
			</div>
		</div>
	)
})

export default FavoritesPage
