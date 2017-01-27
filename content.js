// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     // file: 'color-change.js',
//     code: 'window.getSelection().toString();'
//    })
//
//   console.log('waka flaka')
//   // No tabs or host permissions needed!
//   // chrome.tabs.executeScript({
//   //   code: 'document.body.style.backgroundColor="red"'
//   // });
//
//
//
// });


// Called when the user clicks on the browser action.
 chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript({
     code: 'window.getSelection().toString();'
   }, function(selection){
     console.log(selection[0])
     console.log(Object.getOwnPropertyNames(selection[0]));
     // selNode = selection.anchorNode();
     // console.log(selNode);

     //try making post request to localhost rails app
     $.post( "http://localhost:3000/factoids", { text: selection[0] } );
    //
    //  $.post( "ajax/test.html", function( data ) {
    //    $( ".result" ).html( data );
    //  });

     chrome.tabs.create({
       url: "http://localhost:3000/factoids?text=".concat(selection[0])
     })
   });
   // No tabs or host permissions needed!
   // chrome.tabs.executeScript({
   //   code: 'document.body.style.backgroundColor="red"'
   // });
 });
