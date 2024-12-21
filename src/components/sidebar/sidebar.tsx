import { NavLink } from 'react-router-dom'
import MaterialIcon from '../../shared/icons/Materialicons'
import './sidebar.sass'

export default function SideBar() {
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
			</NavLink>
			<NavLink to={'/loader'} className="sidebarcontainer__linkitem">
				<h3>
					<MaterialIcon name="MdPerson" />
				</h3>
				<p>LOGIN</p>
			</NavLink>
		</div>
	)
}
