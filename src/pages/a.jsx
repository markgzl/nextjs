import { NextPage } from 'next';

interface FooterProps {
	userName: string;
	data: number[]
}



const A = (props) => {
	return (
		<footer>
			<div>this is footer . copyright @ {new Date().getFullYear()}</div>
			<p>{props.userName}</p>
		</footer>
	)
}

A.getInitialProps = async (ctx) => {
	console.log(ctx.body,'=====ctx.boxy')
	return {...ctx.body}
}	
export default A