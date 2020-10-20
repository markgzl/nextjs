const  { Context } = require('koa')
const  Router = require('koa-router')
const { HTTP_SUCCESS_CODE } = require('./const')
const { handleMobilePage, handleError } = require('./middleware')

// import db from  './database'

const renderHtml = async (APP, ctx, pagePath, params={}) => {
	ctx.res.statusCode = HTTP_SUCCESS_CODE
	await APP.render(ctx.req, ctx.res, pagePath, {...ctx.query, ...params})
	ctx.respond = false
}

const allRoutes = (app) => {
	const router = new Router()
	router.get('/', handleMobilePage(true),  async (ctx) => {
		return renderHtml(app, ctx, '/index', {id: 10000})	
	})
	router.get('/m',handleMobilePage(false), async (ctx) => {
		return renderHtml(app, ctx, '/index', {id: 10000})	
	})
	router.get('/m/news', handleMobilePage(false), async (ctx) => { 
		return renderHtml(app, ctx, '/news', {id: 1234}) 
	})
	router.get('/news', handleMobilePage(true), async (ctx) => { 
		return renderHtml(app, ctx, '/news', {id: 1234}) 
	})
	router.get('/product', handleMobilePage(true), async (ctx) =>	renderHtml(app, ctx, '/product') )
	router.get('/m/product', handleMobilePage(false), async (ctx) =>	renderHtml(app, ctx, '/m/product') )
	router.get('/m/aboutus', handleMobilePage(false), async (ctx) =>	renderHtml(app, ctx, '/aboutUs') )
	router.get('/aboutus', handleMobilePage(true), async (ctx) =>	renderHtml(app, ctx, '/aboutUs') )
	router.get('/m/news/:id', handleMobilePage(false), async (ctx) =>	renderHtml(app, ctx, '/newsDetail'))
	router.get('/news/:id', handleMobilePage(true), async (ctx) =>	renderHtml(app, ctx, '/newsDetail'))

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