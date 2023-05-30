$(document).ready(function(){
    let signUpBtn = $("#signup");
    $(signUpBtn).click(function (e){
        e.preventDefault();
        $.when(
            $("#signup-body").addClass("slide-out-top").promise()
        ).then(
            $(".content-body").addClass("hideOverflow").promise()
        ).then(()=> {

            let deferred = new $.Deferred();
            let stopRoutine = setTimeout(()=> {
                $("#signup-body").addClass("hide");
                $("#forms-container").removeClass("hide");
            }, 500);
            deferred.resolve(stopRoutine)
            return deferred.promise();

        }).then(
            $("#forms-container").addClass("slide-in-bottom").promise()
        ).then(() =>{

            setInterval(()=> {
                $("#forms-container").removeClass("hideOverflow")
                $(".content-body").removeClass("hideOverflow")
            },1000);

        })
    });
});