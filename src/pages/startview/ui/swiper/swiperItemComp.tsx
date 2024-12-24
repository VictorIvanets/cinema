import { memo, useCallback, useEffect, useState } from 'react'
import { ResponseMovie } from '../../../../api/api.types'
import ItemMovies from '../../../../components/itemMovie/itemMovie'
import { Preloader } from '../../../../components/preloaders/PreloaderBall'
import { changeScreenForSwiper } from '../../../../helpers/changeScreen'
import CheckBox from '../../../../widgets/checkBox/checkBox'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getMoviesForStart } from '../../../../api/api.movies'
// import { useLoadingBar } from 'react-top-loading-bar'

interface ISwiperItemProps {
	defaultMovie: string
	defaultYear: string
}

const SwiperItem = memo(({ defaultMovie, defaultYear }: ISwiperItemProps) => {
	const screenWidth = window.screen.width
	const [dataLoad, setData] = useState<ResponseMovie[] | undefined>()
	const [yearMovies, setYearMovies] = useState<string | undefined>()
	const [erorrLoad, setError] = useState<string | null>(null)
	// const { start, complete } = useLoadingBar({
	// 	color: 'red',
	// 	height: 5,
	// })
	const getValue = useCallback(
		async (yearMovies: string) => {
			// start()
			const data = await getMoviesForStart(defaultMovie, yearMovies, setError)
			data && setData(data)
			// complete()
		},
		[yearMovies],
	)

	useEffect(() => {
		yearMovies ? getValue(yearMovies) : getValue(defaultYear)
	}, [yearMovies])

	return (
		<>
			<div className="startcontainer__select">
				<h4>movie - tag: {defaultMovie}</h4>
				<CheckBox type={defaultMovie} setYearMovies={setYearMovies} />
			</div>
			<div className="startcontainer__content">
				{erorrLoad && <p>{erorrLoad}</p>}
				{dataLoad ? (
					<Swiper
						className="startcontainer__swiperbox"
						spaceBetween={10}
						slidesPerView={changeScreenForSwiper(screenWidth)}
					>
						{dataLoad.map((i) => (
							<SwiperSlide key={i.imdbID} className="startcontainer__item">
								<ItemMovies data={i} />
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<Preloader />
				)}
			</div>
		</>
	)
})

export default SwiperItem
