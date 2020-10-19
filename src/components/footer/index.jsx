
const Footer = (props) => {
	return (
		<footer>
			<div>this is footer . copyright @ {new Date().getFullYear()}</div>
			<p>{props.userName}</p>
		</footer>
	)
}

export default Footer