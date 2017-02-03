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
function bindAjaxSubmit(){
  console.log("in bindAjaxSubmit")
  $('#new-factoid').submit(function(event){
    console.log('before preventDefault in bindAjaxSubmit')
    event.preventDefault();
    console.log('after event prevent default in bindAjaxSubmit')
  })
};

$("#searchForm").submit(function(event) {
   /* stop form from submitting normally */
   event.preventDefault();

   /* get some values from elements on the page: */
   var $form = $(this),
       term = $form.find('input[name="s"]').val(),
       url = $form.attr('action');

   /* Send the data using post */
   var posting = $.post(url, {
       s: term
   });

   /* Put the results in a div */
   posting.done(function(data) {
       var content = $(data).find('#content');
       $("#result").empty().append(content);
   });
});

function getTabSelection() {
  chrome.tabs.executeScript({
    //store [selection, url] in ary
    code: '[window.getSelection().toString(), window.location.href]'
  }, function(selection){
    console.log(selection[0])
    console.log(Object.getOwnPropertyNames(selection[0]));

    $('#selection').append(selection[0][0])
    $('#url').append(selection[0][1])
    //make post request to localhost
    // $.post( "http://localhost:3000/factoids", {factoid:{text: selection[0][0], url:selection[0][1]}} );
    // window.confirm('new factoid saved');
    $.ajax({
      url: "http://localhost:3000/factoids/new",
      method: 'get'
    }).done(function(response){
      $('#form-holder').append(response);
      bindAjaxSubmit();
      console.log("done")
    })

  });
}



document.addEventListener('DOMContentLoaded', function() {
  getTabSelection();
});
