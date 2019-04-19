(function (){
  //pull content for IGN api
  $.ajax({
    url: 'localhost:3000/send',
    type: 'POST',
    dataType: 'json',
    crossdomain: true,
    success: data => {

  },
  error: function(request, error) {
    console.log(error);
  }
});
