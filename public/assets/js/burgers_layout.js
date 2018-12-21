$(function() {
    $(".delBurger").on("click", function(event) {
        var cust = $(this).attr("data-id");
        var customer = $("#"+cust + "cust").val().trim();
        console.log(customer);
        if (customer.length === 0) {
            alert("Please enter a valid name before devouring!");
        }
        else{
        var id = $(this).data("id");
      
        var newDevoured = $(this).data("devoured");

        var newCust = { cust_name: customer };

        $.ajax("/api/cust", {
            type: "POST",
            data: newCust
          }).then(
              function(result) {
                  var custIdSend = { custId: result.id};
                  $.ajax("/api/burgers/" + id, {
                    type: "PUT",
                    data: custIdSend
                  }).then(
                      function() {
                          location.reload();
                      });
              });
     
        }
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });
})