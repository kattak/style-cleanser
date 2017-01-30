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
$('document').ready(function(){
  console.log("lad")
  $('.test').on('click', function(){
    console.log('THIS IS A TEST')
  })
  $('#form-holder').on('submit', '#new-factoid', function(e){
    console.log('before')
    e.preventDefault();
    console.log('hello')
  })
})
function hi(){
  console.log('hi')
}

function getTabSelection() {
  chrome.tabs.executeScript({
    //store [selection, url] in ary
    code: '[window.getSelection().toString(), window.location.href]'
  }, function(selection){
    console.log(selection[0])
    console.log(Object.getOwnPropertyNames(selection[0]));

    $('#selection').append(selection[0][0])
    $('#selection_form').val(selection[0][0])
    $('#url').append(selection[0][1])
    $('#url_form').val(selection[0][1])
    //make post request to localhost
    // $.post( "http://localhost:3000/factoids", {factoid:{text: selection[0][0], url:selection[0][1]}} );
    // window.confirm('new factoid saved');
    // $.ajax({
    //   url: "http://localhost:3000/factoids/new",
    //   method: 'get'
    // }).done(function(response){
    //   $('#form-holder').append(response);
    //   hi();
    //   // bindAjaxSubmit();
    //   console.log("done")
    // })

  });
}



document.addEventListener('DOMContentLoaded', function() {
  getTabSelection();
});
