const next = require('next')
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const allRoutes = require('./router')
// const db = require('./database')
const { HTTP_SUCCESS_CODE } = require('./const')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const APP = next({ dev, dir: './src' })

APP.prepare()
	.then(()=>{
		const server = new Koa()

		server.use(bodyparser())

		server.use(allRoutes(APP).routes())

		// 对于未捕获的路由全部交由next.js处理
		server.use(async (ctx) => {
			ctx.res.statusCode = HTTP_SUCCESS_CODE
			await APP.getRequestHandler()(ctx.req, ctx.res)
			ctx.respond = false
		});

		server.listen(port,()=>{
			console.log(`success on port ${port}`)
		})
		server.on('error',(err)=>{
			console.log(err)
		})
	})
	.catch(err=>{
		console.error(err)
	})