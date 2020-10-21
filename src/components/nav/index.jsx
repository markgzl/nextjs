import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import './nav.scss'
import { isMobile } from '@utils/system'
import { Navigators } from '@constants/nav' 

const Nav = () => {
	const [navLink, setNavLink] = useState('/')
	const router = useRouter()
	const [ currentPath ] = useState(router.asPath)
	console.log(router)
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
		setNavLink(isMobile(navigator.userAgent) ? '/m/' : '')
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
				<Link href={`${navLink}`}>
					<img src="/static/vercel.svg" alt="logo" className='logo'/>
				</Link>
				<nav className='nav'>
					{
						Navigators.map(nav=>(
							<Link href={`${navLink}${nav.path}`} key={nav.path}>
								<a className={`nav-link ${currentPath===nav.path?'active':''}`}>{nav.name}</a>
							</Link>
						))
					}
				</nav>
				<div className='action'>
					预约体验
				</div>
			</div>
		
		</header>
	)
}

export default Nav