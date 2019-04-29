$(function (){
  //Form handling
  $('#main-form').submit((e) => {
    const recepient = $('#recepient').val();
    const queryText = $('#queryText').val();

    //API request
    $.ajax({
      url: '/send',
      type: 'POST',
      data: {
        'recepient': recepient,
        'queryText': queryText,
        'count': 10
      },
      dataType: 'json',
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
