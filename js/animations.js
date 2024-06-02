// Ativação depois dos elementos serem adicionados de forma dinâmica
function ativarInstrucoes(){
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
}

// Animação que controla o movimento do piscar do letreiro do nome do jogo. Para assim que o usuário começa a jogar
temporizador = setInterval(() => {
    if(!controle.inicio){
        if(animacoes.rounds == 18){
            animacoes.rounds = 0;
            setTimeout(() => {
                $('.glow-selected').removeClass();
                $('.titulo span').eq(0).addClass('glow-selected')

            }, 75);

        }else{
            let el = $('.glow-selected').next(':not(.blank-space)');
            setTimeout(() => {
                $('.glow-selected').removeClass();
                el.addClass('glow-selected');
            }, 75);
            animacoes.rounds++;
        }

    }else{
        $('.glow-selected').removeClass();
        $('.titulo h1').css('text-shadow', 'none');
        clearInterval(temporizador)
    }
}, 150);


// Gera um elemento que contém um código aleatório, de tamanho facilmente definível. Cada elemento tem um id próprio para manipulação posterior de posição
function criarCodigoCascata(){
    let caracteresQuantidade = numeroAleatorio(15, 30);
    let codigo = '';

    for(i = 0; i < caracteresQuantidade; i++){
        codigo += '<p>' + animacoes.caracteres[numeroAleatorio(0, animacoes.caracteres.length - 1)] + '</p>'
    }

    $('.screen').append('<div class="codigo-cascata" id="cascata' + animacoes.codigos + '" style="color: ' + paleta.cascataSelected + '">' + codigo + '</div>')

    $('#cascata' + animacoes.codigos).
    css('top', $('#cascata' + animacoes.codigos).height() * -1).
    css('left', numeroAleatorio(0, 100) - Number('0.' + numeroAleatorio(0, 99)) + '%');

    animarCodigo($('#cascata' + animacoes.codigos));

    animacoes.codigos++;
}

// Faz o código do parâmetro descer do topo da tela
function animarCodigo(codigo){
    codigo.animate({
        top: '100%'
    }, 15000, function(){
        codigo.remove();
    });
}

// Função que faz brilhar caracteres aleatórios de códigos aleatórios
function brilharCascata(){
    setInterval(() => {
        let index = numeroAleatorio(0, $('.codigo-cascata').length)
        let paragrafosTotal = $('.codigo-cascata').eq(index).find('p').length;
        let elemento = $('.codigo-cascata').eq(index).find('p').eq(numeroAleatorio(0, paragrafosTotal));
        elemento.css('color', 'rgba(255, 255, 255, 0.5)').css('text-shadow', '0 0 20px white');
        
    }, 300);
}

// Define o idioma do jogo
$('.idiomas-wraper img').click(function(){
    if(!controle.idioma){
        controle.idioma = $(this).attr('id');
        criarTraducaoInicio(); // Define qual será a tradução da tela principal
        traduzirInicio(); // Adiciona os elementos no idioma selecionado
        animarHeader(); // Ativa as funções dos elementos adicionados
        tocarMusica(); // Toca a música
        $('.idiomas').fadeOut(500)
        setTimeout(() => {
            $('.idiomas-wraper').fadeOut(500);
            setInterval(() => {
                criarCodigoCascata(); // Códigos começam a ser gerados
        
            }, 200);
            brilharCascata();
        }, 500);
    }
})

// Controla o som do jogo (ativação/desativação de músicas e efeitos sonoros)
$('#sound-toggle').click(function(){
    if(!caixaDeSom.musica.current.muted){ 
        caixaDeSom.musica.current.muted = true;
        caixaDeSom.sfx.derrota.muted = true;
        $('#sound-toggle').attr('src', 'assets/sound-off.svg');

    }else{
        caixaDeSom.musica.current.muted = false;
        caixaDeSom.sfx.derrota.muted = false;
        $('#sound-toggle').attr('src', 'assets/sound-on.svg')
    }
})

// Toca as músicas da tela principal e do jogo
function tocarMusica(){
    if(!controle.inicio){
        caixaDeSom.musica.current = caixaDeSom.musica.intro;
        caixaDeSom.musica.current.volume = 0.2;
        caixaDeSom.musica.current.play();

    }else{
        caixaDeSom.musica.current.pause();
        caixaDeSom.musica.current = caixaDeSom.musica.game;

        caixaDeSom.musica.current.volume = 0.2;

        if($('#sound-toggle').attr('src') == 'assets/sound-off.svg'){
            caixaDeSom.musica.current.muted = true;
        }

        caixaDeSom.musica.current.play();
    }

    caixaDeSom.musica.current.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}