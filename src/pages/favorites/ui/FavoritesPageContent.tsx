import './favoritespage.sass'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import FavoriteItem from './FavoriteItem'
import BtnBack from '../../../widgets/btnBack/BtnBack'
import { Preloader } from '../../../components/preloaders/PreloaderBall'
import { memo } from 'react'
import AnimatableElasticItem from '../../../components/animation/AnimatableElasticItem'
import { Power } from '../../../components/animation/AnimatableElasticItem.types'

const FavoritesPageContent = memo(() => {
	const movieDataFavor = useSelector(
		(state: RootState) => state.favorData.movieData,
	)

	return (
		<>
			<div className="favorites__header">
				<h2>Favorites</h2>
				<BtnBack />
			</div>
			{movieDataFavor.length >= 1 ? (
				<div className="favorites__itembox">
					{movieDataFavor ? (
						movieDataFavor.map((data) => (
							<FavoriteItem key={data.imdbID} dataLoad={data} />
						))
					) : (
						<Preloader />
					)}
				</div>
			) : (
				<AnimatableElasticItem
					power={Power.hadrd}
					duration={4000}
					starting={true}
					valuePercent={100}
				>
					<h3>No favorites</h3>
				</AnimatableElasticItem>
			)}
		</>
	)
})

export default FavoritesPageContent
