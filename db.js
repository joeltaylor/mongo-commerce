var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  name  : String,
  price : Number
});

mongoose.model('Item', Item);
mongoose.connect('mongodb://localhost/mongo-commerce-dev');
