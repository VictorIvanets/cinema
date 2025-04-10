import { NavLink } from 'react-router-dom'
import './nav.sass'
import MaterialIcon from '../../shared/icons/Materialicons'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import CountRing from './countRing'

export default function NavLinks(prop: { classname: string }) {
	const movieDataFavor = useSelector(
		(state: RootState) => state.favorData.movieData,
	)
	return (
		<div className={prop.classname}>
			<NavLink to={'/start'} className="linkitem">
				<h3>
					<MaterialIcon name="MdHome" />
				</h3>
				<p>HOME</p>
			</NavLink>
			<NavLink to={'/favor'} className="linkitem">
				<h3 className="linkitem__navlike">
					<MaterialIcon name="MdFavorite" />
					{movieDataFavor.length >= 1 && (
						<CountRing movieDataFavor={movieDataFavor} />
					)}
				</h3>
				<p>FAVORITES</p>
			</NavLink>
			<NavLink to={'/login'} className="linkitem">
				<h3>
					<MaterialIcon name="MdPerson" />
				</h3>
				<p>ACCOUNT</p>
			</NavLink>
		</div>
	)
}
