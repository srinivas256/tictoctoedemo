//sp

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{	
	chrome.storage.local.set({ureview: request.ureview}, function() {
          console.log('Value is set to ' + request.ureview);
    });
	var z = "success";
	sendResponse( {userEmail:z} )
		
	
});

