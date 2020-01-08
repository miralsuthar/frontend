
    $("#submit").on("click",function(){
        var loginD = {
            emailId: $("#usr").val(),
            password: $("#psw").val()
        }
        $.ajax({
            type: "POST",
            url: "url",
            data: "loginD",
            success: function (details) {
                //link home page 
            }
            //error: function() {
              //  alert("Create an Account First");
            //}
            
        });
    })
       
