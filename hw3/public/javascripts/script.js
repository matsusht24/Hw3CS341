//Hw3 Trent Matsushima
$(document).ready(function () {
    $("#thankYouMsg").hide()
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (let i = 0; i < months.length; i++) {
        var el = document.createElement("a");
        el.value = months[i];
        el.textContent = months[i]
        $(el).appendTo(".dropdown-content")
    }

    $("#order").click(function () {
        if ($("#specialOrder").val().toLowerCase().indexOf("vegan") != -1) {
            alert("Warning: The cheesecakes contain dairy");
        } else {
            //HW5 addition 
            //save the quantity, topping, & notes from page
            quantity = document.getElementById("quantity").value;
            if(quantity == 0){
                alert("Warning: Quantity of order is 0");
            }
            if(document.getElementById("plain").checked){
                topping = "Plain";
            } else if(document.getElementById("chocolate").checked){
                topping = "Chocolate";
            }else if(document.getElementById("cherry").checked){
                topping = "Cherry";
            }else{
                alert("Warning: No Topping");
            }

            notes = $("#specialOrder").val();
            //create post to handle new order
            $.post('/neworder', {'quantity':quantity, 'topping':topping, 'notes':notes}, null);
            $("#thankYouMsg").show()
            $("#orderDiv").remove()
            

        }
    });
    $("a").click(function() {
        //change the text to the month that was clicked
        let month = $(this).text();
        $(".dropbtn").html(month);
        //array of listId's for the count
        listId = ["cherryCount", "chocoCount", "plainCount"];
        //Post request that sends it to /orders, given parameter month, then a call back function
        $.post('/orders', {'month':month}, function(result){
            //results is the value sent from the router which is the json Object
            data = result["data"]
            for (let i = 0; i < data.length; i++){
                document.getElementById(listId[i]).innerHTML = data[i]["quantity"] + " " + data[i]["topping"];
                
            }
        })
    
    })
    
});