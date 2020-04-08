//sp
$(document).ready(function(){
$("#sub, #copyText").hide();



var keywords = $(".adminDescription").hide();

				
$("#review").blur(function(){
		 var review = $("#review").val();
		 $("#formData").html(review);
		 
		  chrome.runtime.sendMessage({ureview: review},
        function (response) {
          //console.log(response);
        });	
		 $("#statusCheck").html("Review saved successfully");

      var copyText = document.getElementById("review");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      $("#statusCheck").html("Text Copied");


});


	chrome.storage.local.get(['ureview'], function(result) {
		 var review = $("#review").html(result.ureview);
        console.log('Value currently is ' + result.ureview);
		   

});




});

