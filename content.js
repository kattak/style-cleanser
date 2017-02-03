// Called when the user clicks on the browser action.
 // chrome.browserAction.onClicked.addListener(function(tab) {
 //   chrome.tabs.executeScript({
 //     //store [selection, url] in ary
 //     code: '[window.getSelection().toString(), window.location.href]'
 //   }, function(selection){
 //     console.log(selection[0])
 //     console.log(Object.getOwnPropertyNames(selection[0]));
 //
 //     //make post request to localhost
 //     $.post( "http://localhost:3000/factoids", {factoid:{text: selection[0][0], url:selection[0][1]}} );
 //     window.confirm('new factoid saved');
 //   });
 //
 //
 //
 // });
