import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import SideBar from '../components/sidebar/sidebar'
import './layout.sass'
import SidebarRight from '../components/sidebarRight/sidebarRight'
import { memo, useState } from 'react'
import MaterialIcon from '../shared/icons/Materialicons'

const Layout = memo(() => {
	const [hiddenSideBar, setHiddenSideBar] = useState(true)
	return (
		<>
			<header className="header">
				<Header />
			</header>
			<main className="main">
				<div
					onClick={() => setHiddenSideBar(!hiddenSideBar)}
					className="sidebar-hidden__btn"
				>
					{!hiddenSideBar ? (
						<h2>
							<MaterialIcon name="MdExpandLess" />
						</h2>
					) : (
						<h3>
							<span>MAIN MENU</span>
						</h3>
					)}
				</div>
				<nav className={`sidebar ${hiddenSideBar && 'sidebar-hidden'}`}>
					<SideBar />
				</nav>
				<section className="startview">
					<Outlet />
				</section>
				<section className="sidebarrightbox">
					<SidebarRight />
				</section>
			</main>
			<footer className="footer">
				<Footer />
			</footer>
		</>
	)
})

export default Layout
