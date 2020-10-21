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
	// pc page routes
	router.get('/', handleMobilePage(true),  async (ctx) => {
		return renderHtml(app, ctx, '/pc', {id: 10000})	
	})
	router.get('/news', handleMobilePage(true),  async (ctx) => {
		return renderHtml(app, ctx, '/pc/news', {id: 10000})	
	})
	router.get('/news/:id', handleMobilePage(true),  async (ctx) => {
		return renderHtml(app, ctx, '/pc/news-detail/:id', {id: 10000})	
	})
	router.get('/open', handleMobilePage(true),  async (ctx) => {
		return renderHtml(app, ctx, '/pc/open', {id: 10000})	
	})
	router.get('/products', handleMobilePage(true),  async (ctx) => {
		return renderHtml(app, ctx, '/pc/products', {id: 10000})	
	})
	router.get('/service', handleMobilePage(true),  async (ctx) => {
		return renderHtml(app, ctx, '/pc/service', {id: 10000})	
	})
	// mobile page routes
	router.get('/m',handleMobilePage(false), async (ctx) => {
		return renderHtml(app, ctx, '/mobile', {id: 10000})	
	})
	router.get('/m/news', handleMobilePage(false), async (ctx) => { 
		return renderHtml(app, ctx, '/mobile/news', {id: 1234}) 
	})
	router.get('/m/news/:id', handleMobilePage(false),  async (ctx) => {
		return renderHtml(app, ctx, '/mobile/news-detail/:id', {id: 10000})	
	})
	router.get('/m/open', handleMobilePage(false),  async (ctx) => {
		return renderHtml(app, ctx, '/mobile/open', {id: 10000})	
	})
	router.get('/m/products', handleMobilePage(false),  async (ctx) => {
		return renderHtml(app, ctx, '/mobile/products', {id: 10000})	
	})
	router.get('/m/service', handleMobilePage(false),  async (ctx) => {
		return renderHtml(app, ctx, '/mobile/service', {id: 10000})	
	})

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