const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
		id: {type:String},
		content: {type:String},
		email: {type:String},
		name: {type:String},
		subject: {type:String},
});

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;
