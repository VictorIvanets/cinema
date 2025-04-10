import './header.sass'
import Logo from '/kino.svg'
import NavLinks from '../navLinks/navLinks'

export default function Header() {
	return (
		<div className="headercontainer">
			<div className="headercontainer__logobox">
				<img className="headercontainer__logo" src={Logo} alt="logo" />
			</div>
			<NavLinks classname={'headercontainer__linkbox'} />
		</div>
	)
}
