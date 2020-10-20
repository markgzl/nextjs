const { isMobile } = require('../utils/system')
const handleError = () => async (ctx, next) => {
	try{
		await next()
	}catch(err){
		console.log(err)
		ctx.body = 'error'
	}
}
// mobile 访问 pc 页面  or  pc 访问 mobile 页面
const handleMobilePage = (isPc=true) => async (ctx, next) => {
	const ua = ctx.header['user-agent']
	let prefix = '/'
	// pc的链接 mobile端访问 重定向到 mobile 链接
	if(isPc){
		if(isMobile(ua)){
			prefix = '/m'
			ctx.response.redirect(`${prefix}${ctx.url}`)
		}else{
			await next()
		}
	}else{
		// mobile的链接 pc端访问 重定向到 pc 链接
		if(!isMobile(ua)){
			prefix = ctx.url.replace('/m', '')
			ctx.response.redirect(`${prefix || '/'}`)
		}else{
			await next()
		}
	}

	
}

module.exports = {
	handleError,
	handleMobilePage
}