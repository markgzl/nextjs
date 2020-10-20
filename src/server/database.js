import mysql from 'mysql'

const where = 'where status=1 and is_release=1 and type=1'
class Mysql {

	connection = null
	constructor() {
		// const dev = process.env.NODE_ENV !== "production";
		this.connection = mysql.createConnection({
			host: '192.168.2.140',
			port: 3306,
			user: 'php_user',
			password: '6Byhdrp8Kq7fsQ',
			database: 'oil',
			timezone: 'YYYY-MM-DD HH-MM-SS'
		})

	}
	async queryNewsList(pageNo = 1, pageSize = 10) {

		let count = new Promise((resolve) => {
			this.connection.query(`SELECT count(id) as count from oil_information ${where}`, function (error, results) {
				if (error) {
					resolve([{ count: 0 }])
				};
				resolve(results)
			});
		})
		pageNo = pageNo > 0 ? pageNo : 1
		let pageInfo = new Promise((resolve) => {
			this.connection.query(`SELECT * from oil_information ${where} ORDER BY update_time DESC limit ${pageSize} offset ${(pageNo - 1) * pageSize} `, function (error, results) {
				if (error) {
					resolve([])
				};
				let data = []
				if (Array.isArray(results) && results.length > 0) {
					data = results.map(item => {
						const url = 'https://www.51zhaoyou.com'
						let imgurl = url
						if (item.imgurl) {
							if (item.imgurl.startsWith('http')) {
								imgurl = item.imgurl
							} else {
								imgurl += item.imgurl
							}
						} else {
							imgurl = ''
						}

						return {
							...item,
							showTime: item.show_time,
							imgurl,
							content: item.content.replace(/src=\"\/pluto/g, `src="${url}/pluto`)
						}
					})
				}
				resolve(data)
			})
		})
		const [a, data] = await Promise.all([count, pageInfo])
		// @ts-ignore
		const { count: total } = a[0]

		return {
			total,
			data,
			hasMore: (Number(total) > pageNo * pageSize)
		}
	}

	async queryById(id) {
		return new Promise(resolve => {
			this.connection.query(`SELECT *  from oil_information ${where} and id=${id}`, function (error, results) {
				if (error) {
					resolve()
				}
				let obj = {}
				if (Array.isArray(results) && results.length > 0) {
					const item = obj[0]
					const url = 'https://www.51zhaoyou.com'
					let imgurl = url
					if (item.imgurl) {
						if (item.imgurl.startsWith('http')) {
							imgurl = item.imgurl
						} else {
							imgurl += item.imgurl
						}
					} else {
						imgurl = ''
					}

					obj = {
						...item,
						showTime: item.show_time,
						imgurl,
						content: item.content.replace(/src=\"\/pluto/g, `src="${url}/pluto`)
					}
				}
				resolve(obj)
			});
		})
	}
}

export default new Mysql()