import './sartview.sass'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperItem } from './swiperItem'
import { memo } from 'react'

const startMovie = [
	{ mavie: 'christmas', year: '', id: 1 },
	{ mavie: 'new', year: '2024', id: 2 },
]

const StartView = memo(() => {
	return (
		<div className="startcontainer">
			{startMovie.map((i) => (
				<SwiperItem key={i.id} defaultMovie={i.mavie} defaultYear={i.year} />
			))}
		</div>
	)
})

export default StartView
