import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import SideBar from '../components/sidebar/sidebar'
import './layout.sass'
import SidebarRight from '../components/sidebarRight/sidebarRight'
import { memo } from 'react'

const Layout = memo(() => {
	return (
		<>
			<header className="header">
				<Header />
			</header>
			<main className="main">
				<nav className="sidebar">
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
