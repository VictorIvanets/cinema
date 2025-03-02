import { NavLink } from 'react-router-dom'
import MaterialIcon from '../../shared/icons/Materialicons'
import './sidebar.sass'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import CountRing from './countRing'

export default function SideBar() {
	const movieDataFavor = useSelector(
		(state: RootState) => state.favorData.movieData,
	)
	return (
		<div className="sidebarcontainer">
			<NavLink to={'/start'} className="sidebarcontainer__linkitem">
				<h3>
					<MaterialIcon name="MdHome" />
				</h3>
				<p>HOME</p>
			</NavLink>
			<NavLink to={'/favor'} className="sidebarcontainer__linkitem">
				<h3>
					<MaterialIcon name="MdFavorite" />
				</h3>
				<p>FAVORITES</p>
				{movieDataFavor.length >= 1 && (
					<CountRing movieDataFavor={movieDataFavor} />
				)}
			</NavLink>
			<NavLink to={'/login'} className="sidebarcontainer__linkitem">
				<h3>
					<MaterialIcon name="MdPerson" />
				</h3>
				<p>LOGIN</p>
			</NavLink>
		</div>
	)
}
