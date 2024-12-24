import { NavLink } from 'react-router-dom'
import './header.sass'
import Logo from '/kino.svg'

export default function Header() {
	return (
		<div className="headercontainer">
			<div className="headercontainer__logobox">
				<img className="headercontainer__logo" src={Logo} alt="logo" />
			</div>

			<div className="headercontainer__linkbox">
				<NavLink to={'/start'} className="headercontainer__linkitem">
					<p>HOME</p>
				</NavLink>
				<NavLink to={'/favor'} className="headercontainer__linkitem">
					<p>FAVORITES</p>
				</NavLink>
				<NavLink to={'/login'} className="headercontainer__linkitem">
					<p>LOGIN</p>
				</NavLink>
			</div>
		</div>
	)
}
