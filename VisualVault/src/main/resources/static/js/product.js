$(document).ready(function() {
  $('#loader').hide();


  $("#form").submit(function(event) {
    event.preventDefault();


    $("#submit").prop("disabled", true);
    $('#loader').show();


    var formData = new FormData(this);


    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      url: "/image/saveImageDetails",
      data: formData,
      processData: false,
      contentType: false,
      cache: false,
      success: function(response) {

        $('#loader').hide();
        $("#submit").prop("disabled", false);
        $('#messages').html('<div class="alert alert-success" role="alert">Product Inserted Successfully.</div>').delay(2000).fadeOut('slow');

        $('#form')[0].reset();
      },
      error: function(xhr, status, error) {

        $('#loader').hide();
        $("#submit").prop("disabled", false);
        $('#messages').html('<div class="alert alert-danger" role="alert">Error: ' + xhr.status + '. Oops! Something went wrong.</div>').delay(5000).fadeOut('slow');
      }
    });
  });
});
