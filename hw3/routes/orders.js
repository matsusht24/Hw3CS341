//HW4 Trent Matsushima
var express = require('express');
var router = express.Router();
//create new array
var array = [];
//create ojects that have a topping and quantity
var obj = new Object();
obj.toppings = 'cherry';
obj.quantity = '3';
//push them to array once values are assigned
array.push(obj);
//Do the same for the other types of toppings
var obj1 = new Object();
obj1.toppings = 'plain';
obj1.quantity = '6';
array.push(obj1);
var obj2 = new Object();
obj2.toppings = 'chocolate';
obj2.quantity = '2';
array.push(obj2);

//string the array to Json format
var string = JSON.stringify(array);
//then turn Json format string to JSON object
var data = JSON.parse(string);

//send the Json object to /orders
router.get('/',function(req, res, next) {
    res.send({'data':data});
  });


  //handler for the post function
router.post('/', function(req, res, next) {
    res.send({'data':data})
  });
module.exports = router;