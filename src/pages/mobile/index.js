const A = (props) => {
	return (
		<footer>
			<div>MA Index Page</div>
			<p>{props.userName}</p>
		</footer>
	)
}

A.getInitialProps = async (ctx) => {
	console.log(ctx.body,'=====ctx.boxy')
	return {...ctx.body}
}	
export default A