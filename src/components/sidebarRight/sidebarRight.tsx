import MaterialIcon from '../../shared/icons/Materialicons'
import './sidebarRight.sass'
import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { ResponseMovie } from '../../api/api.types'
import { getSearchMovies } from '../../api/api.movies'
import { Preloader } from '../preloaders/PreloaderBall'
import ItemSearchMovies from './itemSearch'
import { useLoadingBar } from 'react-top-loading-bar'

export default function SidebarRight() {
	const [inputValue, setInputValue] = useState<string>('')
	const [nextValue, setNextValue] = useState<number>(1)
	const [dataLoad, setData] = useState<ResponseMovie[]>([])
	const [isLoadingLoad, setIsLoading] = useState<boolean>(false)
	const [erorrLoad, setError] = useState<string | null>(null)
	const debounceValue = useDebounce<string>(inputValue, 700)
	const { start, complete } = useLoadingBar({
		color: 'red',
		height: 5,
	})

	function getNextValue(next: number) {
		setNextValue(next)
		getSearchMovies(
			debounceValue,
			next,
			setData,
			setError,
			setIsLoading,
			dataLoad,
		)
	}

	useEffect(() => {
		if (!debounceValue.length) {
			setData([])
			setNextValue(1)
		}
		start()

		debounceValue.length &&
			getSearchMovies(
				debounceValue,
				nextValue,
				setData,
				setError,
				setIsLoading,
				dataLoad,
			)
		complete()
	}, [debounceValue])

	return (
		<div className="sidebarright">
			<div className="sidebarright__search">
				<input
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					type="text"
					placeholder="Search"
				/>
				<div className="sidebarright__search__iconbtn">
					<h3>
						<MaterialIcon name="MdSearch" />
					</h3>
				</div>
			</div>
			{erorrLoad && <p>{erorrLoad}</p>}
			{isLoadingLoad && <Preloader />}
			<div className="sidebarright__content">
				{dataLoad &&
					dataLoad.map((i) => <ItemSearchMovies key={i.imdbID} info={i} />)}
				{dataLoad && (dataLoad.length === 10 || dataLoad.length === 20) && (
					<div
						className="sidebarright__seemore"
						onClick={() => getNextValue(nextValue + 1)}
					>
						<p>see more</p>
					</div>
				)}
			</div>
		</div>
	)
}
