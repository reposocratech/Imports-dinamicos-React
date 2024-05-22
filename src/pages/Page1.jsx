import { Link } from 'react-router-dom'

import './page1.css'

const Page1 = () => {
	return (
		<div>
			<h1 className='title'>
				Ejemplo de página con importación de archivo .css
			</h1>
			<Link to={'/'}>Ir a home</Link>
		</div>
	)
}

export default Page1
