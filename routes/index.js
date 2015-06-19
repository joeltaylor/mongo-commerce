var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Item = mongoose.model('Item');

router.
  /* GET home page. */
  get('/', function(req, res, next) {
    Item.find( function(err, items, count){
      res.render('index', {items: items });
    });
  }).

  get('/destroy/:id', function(req, res, next) {
    Item.findById(req.params.id, function(err, item){
      item.remove(function (err, item){
        res.redirect('/');
      });
    });
  }).

  get('/edit/:id', function(req, res, next) {
    Item.find(function(err, items){
      res.render('edit', {
        title: 'Edit',
        items : items,
        current : req.params.id
      });
    });
  }).

  post('/update/:id', function(req,res,next) {
    Item.findById(req.params.id, function(err, item){
      item.name = req.body.name;
      item.save(function(err, item, count){
        res.redirect('/');
      });
    });
  }).

  /* Create new item */
  post('/create', function(req, res, next) {
    new Item({ name: req.body.name}).save(function(err, item, count) {
      res.redirect('/');
    });
  });

module.exports = router;
