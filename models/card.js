const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
		course: {type:Array},
		id: {type:String},
		matiere: {type:String},
		publier: {type:Boolean},
		section: {type:String},
		trailer: {type:String},
		type: {type:String},
});

const Card = mongoose.model('card', CardSchema);

module.exports = Card;
