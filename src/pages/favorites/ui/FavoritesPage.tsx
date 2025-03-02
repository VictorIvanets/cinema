import './favoritespage.sass'
import { memo } from 'react'
import AnimatabelItem from '../../../components/animation/AnimatabelItem'
import FavoritesPageContent from './FavoritesPageContent'

const FavoritesPage = memo(() => {
	return (
		<AnimatabelItem className="favorites">
			<FavoritesPageContent />
		</AnimatabelItem>
	)
})

export default FavoritesPage
