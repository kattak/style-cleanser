// Called when the user clicks on the browser action.
 chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript({
     code: 'window.getSelection().toString();'
   }, function(selection){
     console.log(selection[0])
     console.log(Object.getOwnPropertyNames(selection[0]));
     $.post( "http://localhost:3000/factoids", {factoid:{text: selection[0]}} );
   });

   chrome.tabs.executeScript({
     code: 'console.log("hi");'
   }, function(selection){
    //  console.log(selection[0])
    //  console.log(Object.getOwnPropertyNames(selection[0]));
    //  $.post( "http://localhost:3000/factoids", {factoid:{text: selection[0]}} );
   });

 });
