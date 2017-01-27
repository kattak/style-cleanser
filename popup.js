// chrome.browserAction.onClicked.addListener(function(tab) {
//   $('document').ready(function(){
//     chrome.tabs.executeScript({
//       //store [selection, url] in ary
//       code: '[window.getSelection().toString(), window.location.href]'
//     }, function(selection){
//       console.log(selection[0])
//       console.log(Object.getOwnPropertyNames(selection[0]));
//
//       $('#selection').append(selection[0])
//       //make post request to localhost
//       // $.post( "http://localhost:3000/factoids", {factoid:{text: selection[0][0], url:selection[0][1]}} );
//       // window.confirm('new factoid saved');
//     });
//
//     console.log('this is where the code runs')
//   })
//
// });

function getTabSelection() {
  chrome.tabs.executeScript({
    //store [selection, url] in ary
    code: '[window.getSelection().toString(), window.location.href]'
  }, function(selection){
    console.log(selection[0])
    console.log(Object.getOwnPropertyNames(selection[0]));

    $('#selection').append(selection[0][0])
    $('#url').append(selection[0][0])
    //make post request to localhost
    // $.post( "http://localhost:3000/factoids", {factoid:{text: selection[0][0], url:selection[0][1]}} );
    // window.confirm('new factoid saved');
    $.ajax({
      url: "http://localhost:3000/factoids/new",
      method: 'get',
      header: headers['Access-Control-Allow-Origin'] = '*'
    }).done(function(response){
      $('#form-holder').append(response)
    })

  });
}


document.addEventListener('DOMContentLoaded', function() {
  getTabSelection();
});
