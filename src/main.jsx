import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppRoutes } from './routes/AppRoutes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppRoutes>
			<App />
		</AppRoutes>
	</React.StrictMode>
)
