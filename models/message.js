const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
		id: {type:String},
		content: {type:String},
		email: {type:String},
		name: {type:String},
		subject: {type:String},
		sent: {type: Boolean},
		disabled: {type: Boolean}
});

const Message = mongoose.model('message', MessageSchema);
console.log(Message)
module.exports = Message;
