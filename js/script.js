jQuery(document).ready(function($){
   
$('form').on('submit', function(event){
    event.preventDefault();
    const input = $('#user-input').val();
    console.log(input);

    if (input === '') {
        alert('Error: You did not input any text');
    }else $("#tasks").prepend(`<p>${input}<p>`);
});



});

