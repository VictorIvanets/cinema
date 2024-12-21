import { Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../layout/layout'
import StartView from '../pages/startview/ui/satrtview'
import { Preloader } from '../components/preloaders/PreloaderBall'
import { MoviesById } from '../components/movieById'
import { FavoritesPage } from '../pages/favorites'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			children: [
				{ index: true, element: <Navigate to="/start" replace /> },

				{
					path: 'start',
					element: (
						<Suspense fallback={<Preloader />}>
							<StartView />
						</Suspense>
					),
				},

				{
					path: 'loader',
					element: (
						<Suspense fallback={<Preloader />}>
							<Preloader />
						</Suspense>
					),
				},
				{
					path: 'favor',
					element: (
						<Suspense fallback={<Preloader />}>
							<FavoritesPage />
						</Suspense>
					),
				},
				{
					path: 'movie/:id',
					element: (
						<Suspense fallback={<Preloader />}>
							<MoviesById />
						</Suspense>
					),
				},
			],
		},

		{
			path: '*',
			element: (
				<Suspense fallback={<Preloader />}>
					<Layout />
				</Suspense>
			),
		},
	],

	{
		basename: '/cinema',
		future: {
			v7_relativeSplatPath: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true,
			v7_normalizeFormMethod: true,
			v7_fetcherPersist: true,
		},
	},
)
