$('#iniciar').click(function(){
    if(!animacoes.inicio){
        animacoes.inicio = true;
        tocarMusica();
        $('.principal').fadeOut(250);
        setTimeout(() => {
            $('.modo-wraper').fadeIn(250);
        }, 250);
    }
})

$('.modo button').click(function(){
    if(animacoes.modo == null){
        animacoes.modo = $(this).attr('id');
        $('.modo-wraper').fadeOut(500);
        novoJogo();
    }
})


function novoJogo(){
    criarTraducaoJogo();
    criarJogo();
    criarRoundsAnim();

    setTimeout(() => {
        $('.game-screen').append(
            '<div class="introducao">\
                <div class="nome">\
                    <p>' + traducao.parte1[0] + '</p>\
                    <div class="name-wraper">\
                        <span>> </span><input id="name" type="text" autocomplete="off" style="color: ' + paleta.selected + '">\
                        <div class="nome-sintaxe"></div>\
                        <div class="nome-tamanho"></div>\
                    </div><!--name-wraper-->\
                </div><!--nome-->\
            </div><!--introducao-->'
        );
        $('#name').trigger('focus');
        
        nameSelect();
    
    }, 1000);
}


function nameSelect(){
    $('#name').keyup(function(e) {
        // Verifica se a tecla pressionada é a tecla Enter (código 13)
        if (e.which == 13) {

            jogo.nome = $('#name').val();
            
            let amount = jogo.nome.length

            if(amount > 3 && amount < 20){
                jogo.nomeTamanho = true;
                $('.nome-tamanho').html('');

            }else{
                jogo.nomeTamanho = false;
                if(amount < 4){
                    $('.nome-tamanho').html('<p>' + traducao.parte1[1] + '</p>');
                }else{
                    $('.nome-tamanho').html('<p>' + traducao.parte1[2] + '</p>');
                }
            }

            if(jogo.nome.match(/^[A-Za-z0-9]+$/)){
                jogo.nomeSintaxe = true;
                $('.nome-sintaxe').html('');

            }else{
                jogo.nomeSintaxe = false;
                $('.nome-sintaxe').html('<p>' + traducao.parte1[3] + '</p>');
            }

            if(jogo.nomeSintaxe && jogo.nomeTamanho){
                $('.name-wraper').html('<p style="color: white">' + '> ' + jogo.nome  + '</p>');
                jogo.nomeSelect = true;

                levelSelect();
            }
        }
    });
}

function levelSelect(){
    setTimeout(() => {
        $('.introducao').append(
            '<br>\
            <div class="nivel">\
            <p>' + traducao.parte1[4] + '</p>\
            <br>\
            <div class="niveis-unselected">\
                <span id="1">\
                    [1]\
                </span>\
                <span id="2">\
                    [2]\
                </span>\
                <span id="3">\
                    [3]\
                </span>\
            </div><!--niveis-->\
        </div><!--nivel-->'
        )
        $('.niveis-unselected span').click(function(){
            if(jogo.nivelSelect != true){
                jogo.nivelSelect = true;
                $(this).css('color', 'white');
                $('.niveis-unselected span').css('cursor', 'auto');
                $('.niveis-unselected').attr('class', 'niveis-selected');
                jogo.nivel = Number($(this).attr('id'));
                jogo.limite = definirLimite(jogo.nivel);
                jogo.senha = gerarSenha(jogo.nivel);
                criarHacker();
                inicializar();
            }
        })
    }, 500);
};

function gerarSenha(level){
    let min, max;

    if(level == 1){
        [min, max] = [1, 8]

    }else if(level == 2){
        [min, max] = [1, 16]

    }else{
        [min, max] = [1, 24]
    }
    
    return numeroAleatorio(min, max);
}


function scrollMax(){
    if(!animacoes.readme){
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 0);
    }
}


function scrollMin(el){
    el.animate({
        scrollTop: $(document).height() * -1
    }, 0)
}


function inserir(destino, tag, conteudo, tempo, style=false, br=false){
    setTimeout(() => {
        if(br == false){
            let first_tag;
            if(style == false){
                first_tag = '<' + tag + '>'
            }else{
                first_tag = '<' + tag + ' style="' + style + '">'
            }
            destino.append(first_tag +conteudo+'</'+tag+'>')
        }else{
            destino.append('<' + tag + '>' + conteudo);
        };
        scrollMax();
        
    }, tempo);
}

function inicializar(){
    let el = $('.game-screen');
    pularLinha(el, 0);
    inserir(el, 'p', traducao.parte1[5] + jogo.nome + '.', 500);
    inserir(el, 'p', traducao.parte1[6], 1000);
    inserir(el, 'p', traducao.parte1[7], 1500);
    inserir(el, 'p', 'import time', 1800);
    inserir(el, 'p', 'def encrypt_message(message):', 2100);
    inserir(el, 'p', 'encrypted_message = ""', 2400);
    inserir(el, 'p', 'for char in message:', 2700);
    inserir(el, 'p', 'encrypted_char = str(ord(char))', 3000);
    inserir(el, 'p', 'encrypted_message += encrypted_char + " "', 3300);
    inserir(el, 'p', 'time.sleep(0.1)', 3600);
    inserir(el, 'p', 'return encrypted_message', 3900);
    inserir(el, 'p', 'message = "The bear is in the circus"', 4200);
    inserir(el, 'p', 'Encrypting message...', 4500);
    inserir(el, 'p', 'Encrypted message: 84 104 101 32 98 101 97 114 32 105 115 32 105 110 32 116 104 101 32 99 105 114 99 117 115', 7000);
    inserir(el, 'p', traducao.parte1[8], 8000);
    pularLinha(el, 8999);
    inserir(el, 'p', traducao.parte1[9], 9000);
    setTimeout(() => {
        entrada_hacker();
    }, 10000);
}


function tocarMusica(){
    if(!animacoes.inicio){
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