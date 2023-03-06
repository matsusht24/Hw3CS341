//HW4 Trent Matsushima
var express = require('express');
var dbquery = require("./dbms.js");
var router = express.Router();
// //create new array
// var array = [];
// //create ojects that have a topping and quantity
// var obj = new Object();
// obj.toppings = 'cherry';
// obj.quantity = '3';
// //push them to array once values are assigned
// array.push(obj);
// //Do the same for the other types of toppings
// var obj1 = new Object();
// obj1.toppings = 'plain';
// obj1.quantity = '6';
// array.push(obj1);
// var obj2 = new Object();
// obj2.toppings = 'chocolate';
// obj2.quantity = '2';
// array.push(obj2);

// //string the array to Json format
// var string = JSON.stringify(array);
// //then turn Json format string to JSON object
// var data = JSON.parse(string);

//hw5 edit to change data depending on data from orders
//send the Json object to /orders
router.get('/',function(req, res, next) {
    res.send({'data':data});
  });


  //handler for the post function
router.post('/', function(req, res, next) {
    var month = req.body.month;
    query_str = "SELECT * from ORDERS where MONTH='" + month + "';";
    dbquery.dbquery(query_str, function(err, result){
      //create objects for every topping type to store quantity
      var plain = new Object();
      plain.topping = "Plain";
      plain.quantity = 0;

      var chocolate = new Object();
      chocolate.topping = "Chocolate";
      chocolate.quantity = 0;

      var cherry = new Object();
      cherry.topping = "Cherry";
      cherry.quantity = 0;

      //for each rawa packet of data 
      result.forEach(element => {
        //add the quantity to its corresponding topping
        switch(element.TOPPING){
          case "Plain":
            plain.quantity += element.QUANTITY;
            break;
          case "Chocolate":
            chocolate.quantity += element.QUANTITY;
            break;
          case "Cherry":
            cherry.quantity += element.QUANTITY;
            break;
        }});

    //creates array and turns it into json format
    array = new Array();
    array.push(cherry);
    array.push(chocolate);
    array.push(plain);
    var string = JSON.stringify(array);
    var data = JSON.parse(string);

    //sends json format to requested place
    res.send({'data':data});
    
    }); 

  });
module.exports = router;