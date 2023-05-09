$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionaTarefa = $('#campotarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${adicionaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#campotarefa').val('');

    })
    $('ul').on('click', 'li', function(){
        $(this).toggleClass("riscado");

    })
    

})
