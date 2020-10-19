const  { Context } = require('koa')
const  Router = require('koa-router')
const { HTTP_SUCCESS_CODE } = require('./const')
// import db from  './database'

const renderHtml = async (APP, ctx, pagePath, params={}) => {
	ctx.res.statusCode = HTTP_SUCCESS_CODE
	await APP.render(ctx.req, ctx.res, pagePath, {...ctx.query, ...params})
	ctx.respond = false
}

const allRoutes = (app) => {
	const router = new Router()
	router.get('/',async (ctx) => renderHtml(app, ctx, '/index', {id: 10000})	)
	router.get('/news', async (ctx) => renderHtml(app, ctx, '/news', {id: 1234}) )
	router.get('/product', async (ctx) =>	renderHtml(app, ctx, '/product') )
	router.get('/aboutus', async (ctx) =>	renderHtml(app, ctx, '/aboutUs') )
	router.get('news/:id', async (ctx) =>	renderHtml(app, ctx, '/newsDetail'))

	// router.get('/api/news/:pageNo/:pageSize', async (ctx: Context) => {
	// 	const { pageNo, pageSize } = ctx.params
	// 	const data = await db.queryNewsList(pageNo, pageSize)
	// 	ctx.body =  new SuccessProtocol(data)
	// })
	// router.get('/api/news/:id', async (ctx: Context) => {
	// 	const { id } = ctx.params
	// 	const data = await db.queryById(id)
	// 	ctx.body =  new SuccessProtocol(data)
	// })

	return router
}
module.exports = allRoutes