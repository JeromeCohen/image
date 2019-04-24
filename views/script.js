$(function (){
  //Form handling
  $('#main-form').submit((e) => {
    const recepient = $('#recepient').val();
    const queryText = $('#queryText').val();

    //API request
    $.ajax({
      url: 'https://jc-image.herokuapp.com/send',
      type: 'POST',
      data: JSON.stringify({recepient: recepient, queryText: queryText, count: 10}),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      crossdomain: true,
      success: data => {
        console.log('success');

    },
    error: function(request, error) {
      console.log('bruh');
      console.log(error);
    }
    });

    e.preventDefault();

  });
})
