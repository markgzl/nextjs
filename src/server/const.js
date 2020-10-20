const HTTP_SUCCESS_CODE = 200
const SUCCESS_CODE = 0
const ERROR_CODE = 1

class Protocol{
	constructor(code,  msg='',  data=null) { }

	getCode(){
		return this.code || 0;
	}
	getMsg(){
		return this.msg || ''
	}
	getData() {
		return this.data ? this.data : null 
	}
}

class SuccessProtocol extends Protocol {
	constructor(data, msg) {
		super(SUCCESS_CODE, msg, data);
	}
}

class ErrorProtocol extends Protocol {
	constructor(code = ERROR_CODE, msg='error') {
		super(code, msg, null);
	}
}

// 页面错误状态
class PageCode {
	static ERROR_404_PAGE() {
		return {
			pageError: true
		};
	}
	static ERROR_500_PAGE() {
		return {
			page500Error: true
		};
	}
	static ERROR_H5_404_PAGE() {
		return {
			pageH5Error: true
		};
	}
}

module.exports = {
	HTTP_SUCCESS_CODE,
	SuccessProtocol,
	ErrorProtocol,
	PageCode
}