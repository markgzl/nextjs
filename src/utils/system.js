function isIpad(userAgent=''){
	const ua = userAgent.toLowerCase()
	const isIpad = ua.match(/(ipad).*os\s([\d_]+)/) 
	return isIpad
}
function isMobile(userAgent=''){
	const ua = userAgent.toLowerCase()
	const isIphone =  !isIpad(ua) && ua.match(/(iphone\sos)\s([\d_]+)/)
	const isAndroid =  ua.match(/(android)\s+([\d.]+)/)
	return isIphone || isAndroid
}

module.exports = {
	isIpad,
	isMobile
}
