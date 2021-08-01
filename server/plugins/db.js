module.exports = app =>{
	const mongoose = require("mongoose")
	mongoose.connect('mongodb://127.0.0.1:27017/dotanewstyle',{
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	
	require('require-all')(__dirname+'/../models')
}