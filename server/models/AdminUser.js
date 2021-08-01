const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const schema = new mongoose.Schema({
	username: { type:String },
	password: {
		type: String ,
		set(val) {
		            return bcrypt.hashSync(val, 10);
		        },
		},


})

module.exports = mongoose.model('AdmonUser',schema)