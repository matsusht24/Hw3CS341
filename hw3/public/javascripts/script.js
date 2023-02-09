
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
    })
    
});