$(() => {
    $('.instrucoes img').on({
        mouseenter: function(){
            $(this).next().css('color', 'white').css('text-shadow', '0 0 20px white')
        }, mouseleave: function(){
            $(this).next().css('color', paleta.selected).css('text-shadow', 'none')
        }
    })

    $('.instrucoes a').on({
        mouseenter: function(){
            $(this).next().css('color', 'white').css('text-shadow', '0 0 20px white')
        }, mouseleave: function(){
            $(this).next().css('color', paleta.selected).css('text-shadow', 'none')
        }
    })

    temporizador = setInterval(() => {

        if(!animacoes.inicio){
            if(animacoes.rounds == 17){
                animacoes.rounds = 0;
                setTimeout(() => {
                    $('.glow-selected').attr('class', '');
                    $('.titulo span').eq(0).attr('class', 'glow-selected')

                }, 75);

            }else{
                let el = $('.glow-selected').next(':not(.blank-space)');
                setTimeout(() => {
                    $('.glow-selected').attr('class', '');
                    el.attr('class', 'glow-selected');

                }, 75);
                animacoes.rounds++;
            }

        }else{
            $('.glow-selected').attr('class', '');
            $('.titulo h1').css('text-shadow', 'none')
            clearInterval(temporizador)
        }
    }, 150);


    setTimeout(() => {
        criarJogo();
        setInterval(() => {
            if(jogo.vitoria != false){
                let index = numeroAleatorio(0, $('.codigo-cascata').length)
                let pTotal = $('.codigo-cascata').eq(index).find('p').length;
                let elemento = $('.codigo-cascata').eq(index).find('p').eq(numeroAleatorio(0, pTotal));
                elemento.css('color', 'rgba(255, 255, 255, 0.5)').css('text-shadow', '0 0 20px white');
            }
        }, 300);
    }, 3000);
    

    function criarCodigoCascata(){
        let numCaract = numeroAleatorio(8, 30);
        let codigo = '';

        for(i = 0; i < numCaract; i++){
            codigo += '<p>' + animacoes.caracteres[numeroAleatorio(0, animacoes.caracteres.length - 1)] + '</p>'
        }

        $('.screen').append('<div class="codigo-cascata" id="cascata' + animacoes.codigos + '" style="color: ' + paleta.cascataSelected + '">' + codigo + '</div>')

        animacoes.tela.altura = $('.screen').height();
        animacoes.tela.largura = $('.screen').width();

        $('#cascata' + animacoes.codigos).
        css('top', $('.codigo-cascata').last().height() * -1).
        css('left', numeroAleatorio(0, 100) - Number('0.' + numeroAleatorio(0, 99)) + '%');

        animarCodigo($('#cascata' + animacoes.codigos));

        animacoes.codigos++;
    }

    function animarCodigo(codigo){
        codigo.animate({
            top: '100%'
        }, 15000, function(){
            codigo.remove();
        });
    }

    $('.black-screen img').click(function(){
        tocarMusica();
        $('.black-screen').animate({
            backgroundColor: 'white'
        }, 500);
        $('.black-screen img').fadeOut(500);
        setTimeout(() => {
            $('.black-screen').fadeOut(500);
            setInterval(() => {
                criarCodigoCascata();
        
            }, 200);
        }, 500);
    })

    $('#sound-toggle').click(function(){
        if(!animacoes.musica.current.muted){ 
            animacoes.musica.current.muted = true;
            $('#sound-toggle').attr('src', 'assets/sound-off.svg');

        }else{
            animacoes.musica.current.muted = false;
            $('#sound-toggle').attr('src', 'assets/sound-on.svg')

        }
    })
})