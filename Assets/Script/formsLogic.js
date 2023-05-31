// let errorMessage = alertHtml("Connection Problem!","It seems that you are offline or the connection is slow")
// let slowConnection = alertHtml("Ohh no!","It seems that your connection is slow, Please wait!")

$(document).ready(function(){
    // let submitBtn = $("#submit-form");
    console.log("submitted");

    $("#submit-form").submit(function(e){
        e.preventDefault();
        $forms = $(this)
        let data = loadData($forms);
        console.log(data);
        postForm(data);
        


    });

    submitButton();

   
});

function submitButton(){
  $("#submitBtn").click(function(e) {
    $("#submit-button").click();
    console.log("data");
    
  });
}

function postForm(data){
    $.ajax({
        type: "POST",
        url: "https://sendy-staging.monstronauts.com/subscribe",
        contentType: "application/x-www-form-urlencoded",
        dataType: 'json',
        data:{
            api_key: "4RqKgUKPaC0Z6OCjl06h",
            list: "pVq8JJzRNct5eqtpO5L6NQ",
            referrer: "https://eattherichgame.com/register/streamers",
            gdpr: "true",
            hp: "",
            boolean: "true",
            name: data.name,
            email: data.email,
            YouTube: data.youtube,
            Twitch: data.twitch,
            Twitter: data.twitter,
            TikTok: data.tiktok,
        },
        success: function(response){
          window.location.href = "registeredpage.html";
        },
        error: function(xhr, status, error){
          window.location.href = "registeredpage.html";
        }
    })
}
function loadData($forms){
  let serializedData  = $forms.serializeArray();
  let data = serializedData.reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});
  return data
}
// function checkNetworkStatus() {
//     let deferred = $.Deferred();
//     $.ajax({
//       url: "", 
//       type: "GET",
//       timeout: 5000, 
//       success: function () {
//         deferred.resolve();
//       },
//       error: function(xhr, textStatus, errorThrown) {
//         deferred.reject();
//       }
//     })
//     return deferred.promise();
//   }
//   function periodicallyCheckNetwork() {
//     setInterval(function() {
//       if(IS_ONLINE)
//         checkNetworkStatus();
//         console.log(isOnline)
//     }, 1000);
//   }
//   function checkDeviceOnline(timeout) {
//     let deferred = $.Deferred();
  
//     checkNetworkStatus()
//       .done(() => {
//         deferred.resolve();
//       })
//       .fail(() => {
//         detachSubmitButtonEvent();
//         customAlert(slowConnection,10000);
//         setTimeout(() => {
      
//           checkNetworkStatus()
//             .done(() => {
//               attachSubmitButtonEvent();
//               deferred.resolve();
//             })
//             .fail(() =>{
//               attachSubmitButtonEvent();
//               deferred.reject("Check Internet Connection");
//             })
          
//         }, timeout);
//       });
  
//     return deferred.promise();
//   }

// function inputValidity(element,onMismatch,onEmpty=""){
//     $(element).on("input", function() {
      
//       if (this.validity.typeMismatch) {
//         this.setCustomValidity(onMismatch);
//       }
//       else {
//         this.setCustomValidity(onEmpty);
//       } 
//     });
//   }


// function alertHtml(title,message){
//     return `
//     <div class="alert-fixed alert alert-warning alert-dismissible fade show" role="alert">
//       <strong>${title}</strong> ${message}
//       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//     </div>
//     `
//   }