novoJogo();

function novoJogo(){
    criarJogo();

    setTimeout(() => {
        $('.game-screen').append(
            '<div class="introducao">\
                <div class="nome">\
                    <p>IDENTIFIQUE-SE:</p>\
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
                    $('.nome-tamanho').html('<p>MIN 4 CARACTERES</p>');
                }else{
                    $('.nome-tamanho').html('<p>MAX 20 CARACTERES</p>');
                }
            }

            if(jogo.nome.match(/^[A-Za-z0-9]+$/)){
                jogo.nomeSintaxe = true;
                $('.nome-sintaxe').html('');

            }else{
                jogo.nomeSintaxe = false;
                $('.nome-sintaxe').html('<p>APENAS LETRAS E NÚMEROS</p>');
            }

            if(jogo.nomeSintaxe && jogo.nomeTamanho){
                $('.name-wraper').html('<p style="margin-top: 5px; color: white">' + '> ' + jogo.nome  + '</p>');
                jogo.nomeSelect = true;

                levelSelect();
            }
        }
    });
}

function levelSelect(){
    setTimeout(() => {
        $('.introducao').append(
            '<div class="nivel">\
            <p>SELECIONE NÍVEL DE ACESSO AO SISTEMA:</p>\
            <div class="niveis">\
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
        $('.niveis span').click(function(){
            if(jogo.nivelSelect != true){
                jogo.nivelSelect = true;
                $(this).css('color', 'white');
                $('.niveis span').css('cursor', 'auto');
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
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 0);
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
    inserir(el, 'p', 'Boas-vindas, ' + jogo.nome + '.', 500);
    inserir(el, 'p', 'Executando algoritmo de verificação de segurança...', 1000);
    inserir(el, 'p', 'Carregando módulos do firewall...', 1500);
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
    inserir(el, 'p', 'In´´cializ#ndo~ //0P_SY5TEM//, agu%rd&.', 8000);
    pularLinha(el, 8999);
    inserir(el, 'p', '// PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO //', 9000);
    setTimeout(() => {
        entrada_hacker();
    }, 10000);
}
