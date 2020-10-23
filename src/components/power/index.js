import { useEffect, useRef } from 'react'
import './index.scss' 

const MobilePower = () => {
	
	const canvasRef = useRef()

	useEffect(() => {
		const canvas = canvasRef.current
		canvas.width = 400
		canvas.height = 400
		
		console.log(canvasRef)
	},[])

	return (
		<div>
			<canvas id='power-canvas' ref={canvasRef} className='power-canvas' width='400' height='400'></canvas>
		</div>
	)
}

export default MobilePower