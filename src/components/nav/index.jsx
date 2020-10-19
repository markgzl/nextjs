import React, { useEffect } from 'react'
import Link from 'next/link'
import './nav.scss'

const Nav = () => {
	var slideRight = {
		distance: '100%',
		origin: 'right',
	};
	var slideLeft = {
		distance: '100%',
		origin: 'left',
	};
	var slideDown = {
		distance: '100%',
		origin: 'top',
	};
	
	useEffect(()=>{
		const ani = ScrollReveal()
		console.log(ani)
		ani.reveal('.action', slideRight)
		ani.reveal('.logo', slideLeft)
		ani.reveal('.nav', slideDown)
		return ani.clean
	},[])

	

	return (
		<header className='header'>
			<div className='nav-wrap'>
				<Link href='/'>
					<img src="/static/vercel.svg" alt="logo" className='logo'/>
				</Link>
				<nav className='nav'>
					<Link href='/'><a className='nav-link'>首页</a></Link>
					<Link href='/product'><a className='nav-link'>产品介绍</a></Link>
					<Link href='/aboutus'><a className='nav-link'>关于我们</a></Link>
					<Link href='/news'><a className='nav-link'>新闻</a></Link>
				</nav>
				<div className='action'>
					预约体验
				</div>
			</div>
		
		</header>
	)
}

export default Nav