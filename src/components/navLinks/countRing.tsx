import { useEffect } from 'react'
import { IMovieByID } from '../../api/api.types'
import AnimatableElasticItem from '../animation/AnimatableElasticItem'
import { Power } from '../animation/AnimatableElasticItem.types'
import './nav.sass'
import { useReload } from '../../hooks/useReload'
interface countRingProps {
	movieDataFavor: IMovieByID[]
}
const CountRing = ({ movieDataFavor }: countRingProps) => {
	const [reload, reloading] = useReload()
	useEffect(() => {
		reload()
	}, [movieDataFavor])

	return (
		<>
			{reloading ? null : (
				<AnimatableElasticItem
					power={Power.hadrd}
					duration={4000}
					className="linkitem__favorcount"
					starting={true}
					valuePercent={100}
				>
					<h4>{movieDataFavor.length}</h4>
				</AnimatableElasticItem>
			)}
		</>
	)
}

export default CountRing
