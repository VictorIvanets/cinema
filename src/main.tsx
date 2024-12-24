import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastrComponent from './store/toastr/ReduxToastr.tsx'
import { LoadingBarContainer } from 'react-top-loading-bar'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LoadingBarContainer>
			<Provider store={store}>
				<ReduxToastrComponent />
				<RouterProvider
					router={router}
					future={{
						v7_startTransition: true,
					}}
				/>
			</Provider>
		</LoadingBarContainer>
	</StrictMode>,
)
