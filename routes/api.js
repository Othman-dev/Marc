const express = require('express');
const router = express.Router();
const Card = require('../models/card');
const Message = require('../models/message');


//----------Cards CRUD
router.get('/cards', function(req, res, next){
    Card.find({}).then(function(card){
		res.send(card);
    }).catch(next);
});

router.post('/cards', function(req, res, next){
    Card.create(req.body).then(function(card){
		res.status(200).json({success: true});
		}).catch(next);
});

router.put('/cards/:id', function(req, res, next){
    Card.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Card.findOne({_id: req.params.id}).then(function(card){
		    res.status(200).json({success: true});
		});
	}).catch(next);
});

router.delete('/cards/:id', function(req, res, next){
    Card.findByIdAndRemove({_id: req.params.id}).then(function(Card){
		res.status(200).json({success: true});
    }).catch(next);
});


//----------Messages CRUD
router.get('/messages', function(req, res, next){
    Message.find({}).then(function(message){
		res.send(message);
		res.status(200).json({success: true});
    }).catch(next);
});

router.post('/messages', function(req, res, next){
		Message.create(req.body).then(function(message){
		    res.status(200).json({success: true});
		}).catch(next);
});

router.delete('/messages/:id', function(req, res){
    Message.findByIdAndRemove({_id: req.params.id}).then(function(message){
		res.status(200).json({success: true});
    }).catch(next);
});

module.exports = router;
