    var sourceSquare = $('#square-template').html();
    var templateSquare = Handlebars.compile(sourceSquare);

    $('#grid').on('click', '.square', function() {
        var clicked = $(this);
        if ((clicked.hasClass('yellow')) || (clicked.hasClass('green'))) {
            alert('hai già cliccato questo quadrato');
        } else {
            $.ajax({
                url: 'https://flynn.boolean.careers/exercises/api/random/int',         // inserire url api
                method: 'GET',
                success: function(data) {
                    var numeroRandom = data.response;
                    console.log(numeroRandom);
                        myFunction(numeroRandom, clicked)
                },
                error: function() {
                }
            });
        }
    });
    for (var i = 0; i < 36; i++) {
        $('#grid').append(templateSquare);
    };

    function myFunction(numeroRandom, clicked) {
        if (numeroRandom <= 5) {
            $(clicked).addClass('yellow').removeClass('green');
            $(clicked).text(numeroRandom);
        } else {
            $(clicked).addClass('green').removeClass('yellow');
            $(clicked).text(numeroRandom);
        }
    }
