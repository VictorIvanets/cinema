import { useNavigate } from 'react-router-dom'
import MaterialIcon from '../../shared/icons/Materialicons'
import './btnback.sass'

export default function BtnBack() {
	const navigate = useNavigate()
	return (
		<>
			<div className="btnback" onClick={() => navigate(-1)}>
				<h2>
					<MaterialIcon name="MdArrowBackIos" />
				</h2>
			</div>
		</>
	)
}
