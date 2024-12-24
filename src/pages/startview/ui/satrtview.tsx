import { SwiperItem } from './index.swiperItem'
import { memo } from 'react'
import './sartview.sass'

const startMovie = [
	{ movie: 'christmas', year: '', id: 1 },
	{ movie: 'new', year: '2024', id: 2 },
]

const StartView = memo(() => {
	return (
		<div className="startcontainer">
			{startMovie.map((i) => (
				<SwiperItem key={i.id} defaultMovie={i.movie} defaultYear={i.year} />
			))}
		</div>
	)
})

export default StartView
