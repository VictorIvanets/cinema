import './checkbox.sass'
import { useReload } from '../../hooks/useReload'

const yearValue = ['all', 2019, 2020, 2021, 2022, 2023, 2024]

interface CheckBox {
	type: string
	setYearMovies: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function CheckBox({ setYearMovies, type }: CheckBox) {
	const [reload, reloading] = useReload()

	const selectHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event && setYearMovies(event.target.dataset.type)
		reload()
	}

	return (
		<>
			{reloading ? null : (
				<details id={`${type}`} className="checkbox">
					<summary className="checkbox__summary">
						<h4>select year</h4>
					</summary>

					<div className="checkbox__select">
						<div className="checkbox__box">
							{yearValue.map((i, index) => (
								<div key={index} className="checkbox__item">
									<input
										id={`${i}${type}`}
										className="checkbox__input"
										type="radio"
										data-type={`${i}`}
										onChange={selectHendler}
									/>
									<label htmlFor={`${i}${type}`}>{i}</label>
								</div>
							))}
						</div>
					</div>
				</details>
			)}
		</>
	)
}
