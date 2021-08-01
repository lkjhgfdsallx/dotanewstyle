module.exports = options => {
	const jwt = require('jsonwebtoken')
	const assert = require('http-assert')
	const AdminUser = require('../models/AdminUser')
	return async (req,res,next)=>{
		const token = String(req.headers.authorization || '').split(' ').pop()
		assert(token,401,'请提供jwt token')
		const { id } = jwt.verify(token,req.app.get('secret'))
		assert(token,401,'无效的jwt token')
		req.user = await AdminUser.findById(id)
		assert(token,401,'请先登录')
		await next()
	}
}