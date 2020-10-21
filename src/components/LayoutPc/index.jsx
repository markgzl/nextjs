import { useEffect } from 'react'
import Footer from '../footer'
import Nav from '../nav'
import SEO from '../seo'
import './index.scss'
const LayoutPc = (props) => {
	useEffect(()=>{
		window.addEventListener('scroll', (e)=>{
			console.log(e)
		})
		return () => {
			window.removeEventListener('scroll', ()=>{

			})
		}
	},[])
	return (
		<div className='page-wrap'>
			<SEO title={props.title || '首页'} />
			<div className='navigator'><Nav /></div>
			<div className='main-content'>
				{props.children}
			</div>
			<div className='footer'><Footer /></div>
		</div>
	)
}

export default LayoutPc