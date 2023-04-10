$(document).on('turbolinks:load', function() {
  $('form').submit(function() {
    $(':submit', this).prop('disabled', true).text('Enviando...');
  });
});
