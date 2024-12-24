// import './RedaxToastr.sass'
import ReduxToastr from 'react-redux-toastr'

interface RedaxToastrProps {}
const ReduxToastrComponent = ({}: RedaxToastrProps) => {
	return (
		<ReduxToastr
			newestOnTop={true}
			preventDuplicates
			timeOut={4000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar
			closeOnToastrClick
		/>
	)
}

export default ReduxToastrComponent
