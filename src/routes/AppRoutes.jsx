import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = lazy(() => import('../App'))
const Page1 = lazy(() => import('../pages/Page1'))
const Page2 = lazy(() => import('../pages/Page2'))

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Cargando...</div>}>
				<Routes>
					<Route
						path='/'
						element={<App />}
					/>
					<Route
						path='/page1'
						element={<Page1 />}
					/>
					<Route
						path='/page2'
						element={<Page2 />}
					/>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
