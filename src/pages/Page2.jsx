// import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'

const Page2 = () => {
	const showConfetti = async () => {
		const confetti = await import('canvas-confetti')
		confetti.default()
	}

	return (
		<>
			<div>
				<button onClick={showConfetti}>Mostrar confeti</button>
			</div>
			<div>
				<Link to={'/'}>Ir a home</Link>
			</div>
		</>
	)
}

export default Page2
