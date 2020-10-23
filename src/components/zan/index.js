import { useEffect } from 'react'

import './index.scss'



const Zan = () => {


	function addPraise(el){
		const bg = Math.floor(Math.random() * 6)  +1
		const cn = Math.floor(Math.random() * 11) +1
		let img = document.createElement('div')
		img.className = `bing bing${bg} ani${cn} `
		el.appendChild(img)
	}
	useEffect(()=>{
		const zanEl = document.getElementById('zan')
		setInterval(()=>{
			addPraise(zanEl)
			if(zanEl.childElementCount > 11){
				// zanEl.removeChild(zanEl.childNodes[0])
			}
		},300)
	},[])

	return (
		<div className='zan-comp'>
			<div className='bg1' id='zan'>
				{/* <div className='bing bing1 ani1'></div> */}
				{/* <img src='/comp/images/bg1.png' className='img img_1' /> */}
			</div>
		</div>
	)
}

export default Zan 