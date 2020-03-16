    $('.square').click(function() {
        var clicked = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',         // inserire url api
            method: 'GET',
            success: function(data) {
                var numeroRandom = data.response;
                console.log(numeroRandom);
                    if (numeroRandom <= 5) {
                        $(clicked).addClass('yellow');
                        $(clicked).text(numeroRandom);
                    } else {
                        $(clicked).addClass('green');
                        $(clicked).text(numeroRandom);
                    }

            },
            error: function() {
            }
        });
    });
