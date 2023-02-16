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
            $("#thankYouMsg").show()
            $("#orderDiv").remove()
        }
    });
    $("a").click(function() {
        let month = $(this).text();
        $(".dropbtn").html(month);
        //array of listId's for the count
        listId = ["cherryCount", "chocoCount", "plainCount"];
        //Post request
        $.post('/orders', function(result){
            //results is the value sent from the router which is the json Object
            data = result["data"]
            for (let i = 0; i < data.length; i++){
                console.log(listId[i]);
                console.log(document.getElementById(listId[i]).html)
                document.getElementById(listId[i]).innerHTML = data[i]["quantity"] + " " + data[i]["toppings"];
                
            }
        })
    
    })
    
});