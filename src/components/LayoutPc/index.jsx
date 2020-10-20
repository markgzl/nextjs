import Footer from '../footer'
import Nav from '../nav'
const LayoutPc = (props) => {
	return (
		<main>
			<Nav></Nav>
			<div>
				{props.children}
			</div>
			<Footer></Footer>
		</main>
	)
}

export default LayoutPc