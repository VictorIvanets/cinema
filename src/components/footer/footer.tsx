import './footer.sass'
import Logo from '/kino.svg'

export default function Footer() {
	return (
		<div className="footercontainer">
			<div className="footercontainer__linkbox">
				<p>2024</p>
			</div>
			<div className="footercontainer__logobox">
				<img className="footercontainer__logo" src={Logo} alt="logo" />
			</div>
		</div>
	)
}
