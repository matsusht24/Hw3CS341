//HW5 Trent Matsushima
var express = require('express');
var dbquery = require("./dbms.js");
var router = express.Router();
router.post('/', function(req, res, next) {
    //get parameters of post from req
    var quantity = req.body.quantity;
    var topping = req.body.topping;
    var notes = req.body.notes;
    //create other parameters needed for insert command
    var month = 'FEB';
    var day = 5;
    //get unique orderid
    dbquery.dbquery('SELECT MAX(ORDERID) FROM ORDERS', function(err, result){
        orderId = result[0]['MAX(ORDERID)'] + 1;
        //use insert command to add a new entry to the sql database
        dbquery.dbquery('INSERT INTO ORDERS VALUES ('+ orderId + ', "' + month + '", ' + day + ', ' + quantity + ', "' + topping + '", "' + notes +'");', function(err, result){
            return 0;
        });

        });


})



module.exports = router;
