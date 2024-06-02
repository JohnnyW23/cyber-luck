function intelDolphin(el, tempo){
    criarDolphin();
    setTimeout(() => {
        $('.virus-mensagem').insertAfter('.screen');
        $('.virus-bar-wraper').insertAfter('.screen');
        $('.virus-mensagem').hide();
        $('.virus-bar-wraper').hide();
        el.html('');
        inserir(el, 'p', traducao.dolphin[0], 0);
        pularLinha(el, 999);
        inserir(el, 'p', '<span style="color: white">D</span>ynamic', 1000);
        inserir(el, 'p', '<span style="color: white">O</span>ffensive', 1500);
        inserir(el, 'p', '<span style="color: white">L</span>ayered', 2000);
        inserir(el, 'p', '<span style="color: white">P</span>rotection with', 2500);
        inserir(el, 'p', '<span style="color: white">H</span>igh-level', 3000);
        inserir(el, 'p', '<span style="color: white">I</span>ntelligence and', 3500);
        inserir(el, 'p', '<span style="color: white">N</span>eural-defense', 4000);
        pularLinha(el, 4999);
        inserir(el, 'p', traducao.dolphin[1], 5000);
        pularLinha(el, 5499);
        inserir(el, 'p', traducao.dolphin[2][0] + jogo.nome + traducao.dolphin[2][1] + jogo.nome + '. <span style="color: white">' + traducao.dolphin[2][2] + '</span>', 5500);
        setTimeout(() => {
            inserirImg($('.screen'), [
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">',
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">',
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">',
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">',
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">',
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">',
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">',
                '<img class="dolphin-img" src="assets/img-dolphin.jpg">'
            ],
            '.dolphin-img', null)
        }, 5500);
        pularLinha(el, 5999);

        // Função para criar números primos e não primos. Exclui números pares e múltiplos de 5
        for(x = 2; x < 1000; x++){
            for(y = 2; y < x; y++){
                if(x % 2 == 0 || x % 5 == 0){
                    break
                }
                if(x % y == 0){
                    dolphin.naoprimos.push(x)
                    break
                }
                if(y == x - 1){
                    dolphin.primos.push(x)
                }
            }
        }

        setTimeout(() => {
            progressoVirusDinamico();
            el.append('<br><div class="dolphin-analise"></div>');
            $('.dolphin-analise').append($('<div class="dolphin-analise-unselected"></div>'));

            let dau = $('.dolphin-analise-unselected')
            inserir(dau, 'p', '//1q743...")//9817kjha9h21q743...")//9817kjha9h2//', 0);
            pularLinha(dau, 499);
            setTimeout(() => {
                $('.dolphin-analise-unselected').append('<div></div>');
                analiseDolphin(dau, $('.dolphin-analise-unselected div'));
            }, 500);
        }, 6000);
    }, tempo);
}


// Função chamada no modo DOLPHIN para fazer a barra de progresso encher enquanto o modo de jogo ainda não foi finalizado
function progressoVirusDinamico(){
    $('.virus-mensagem').show();
    $('.virus-bar-wraper').show();
    $('.virus-mensagem').appendTo('.game-screen');
    $('.virus-bar-wraper').appendTo('.game-screen');

    $('.loaded-bar').animate({
        width: 100 + '%'

    }, 12000 * dolphin.acertosMinimos, "linear");

    dolphinProgressBar = setInterval(() => {
        $('.porcentagem').html(Math.floor(($('.loaded-bar').width() / $('.bar-space').width()) * 100) + '%');
        $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');

        if($('.loaded-bar').width() == $('.bar-space').width() && !dolphin.primoSelect){
            dolphin.tempoLimite = false;
            dolphinResultado($('.dolphin-analise'))
        }

    }, 10);
    scrollMax();
}


// Função que cuida do processo de analisar se os códigos divergentes são ou não os corretos, até que o valor de tentativas alcance o valor de acertos mínimos
function analiseDolphin(el, child){
    dolphinOpcoes();

    inserir(child, 'p', traducao.dolphin[3] + (dolphin.analise + 1) + '/' + dolphin.acertosMinimos, 0);

    inserir(child, 'p', '\
        <span>[' + dolphin.opcoes[0] + ']</span>\
        <span>[' + dolphin.opcoes[1] + ']</span>\
        <span>[' + dolphin.opcoes[2] + ']</span>\
    ', 1);

    setTimeout(() => {
        if(dolphin.analise == 1){
            scrollMax();
        }

        $('.dolphin-analise-unselected span').click(function(){
            if(dolphin.primoSelect == false){
                dolphin.primoSelect = true;

                $('.dolphin-analise-unselected').attr('class', 'dolphin-analise-selected');
                
                let numero;
                if($(this).html().length == 5)
                    numero = $(this).html().substring(1, 4)

                else if($(this).html().length == 4)
                    numero = $(this).html().substring(1, 3)

                else
                    numero = $(this).html().substring(1, 2)
                
                if(dolphin.primos.includes(Number(numero)))
                    dolphin.acertos++;

                $(this).css('color', 'white');

                dolphin.codigos[dolphin.analise] = numero;

                dolphin.analise++;

                if(dolphin.analise < dolphin.acertosMinimos){
                    setTimeout(() => {
                        if(dolphin.tempoLimite){
                            $('.dolphin-analise-selected div').html('');
                            $('.dolphin-analise-selected').attr('class', 'dolphin-analise-unselected');
                            dolphin.primoSelect = false;
                            analiseDolphin(el, child);

                        }else{
                            dolphinResultado($('.dolphin-analise'));
                        }
                    }, 1000);
                    
                }else{
                    dolphinResultado($('.dolphin-analise'));
                }
            }
        })
    }, 2);
}


// Função que embaralha uma lista com números escolhidos e outros números determinados de forma aleatória
function embaralhaLista(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}


// Função que posiciona os números de forma harmônica na lista de códigos compilados, a depender do tamanho desses números
function adequarNum(num){
    if(num.length == 2){
        num = num + ' '

    }else if(num.length == 1){
        num = ' ' + num + ' '
    }
    return num
}


// Dtermina os 3 resultados possíveis do modo DOLPHIN: Vitória por escolher os códigos certos, derrota por não escolher todos os códigos certos e derrota por não escolher todos os códigos a tempo
function dolphinResultado(el){
    el.html('');
    var virusState = $('.virus-state');
    $('.loaded-bar').stop();
    virusState.html('//BACKDOOR DNS/' + numeroAleatorio(100, 999) + ':' + numeroAleatorio(10, 99) + '//');

    if(dolphin.tempoLimite){
        /* Caso tenha escolhido todos os códigos a tempo */

        dolphin.compilacao = []

        for(i = 0; i < 15; i++){
            for(c = 0; c < dolphin.acertosMinimos; c++){

                if(i == 0){
                    dolphin.compilacao.push('<span style="color: white">' + adequarNum(dolphin.codigos[c]) + '</span>');
                } 
                else{
                    dolphin.compilacao.push('<span class="num-resto">' + adequarNum(numeroAleatorio(2, 999) + "") + '</span>');
                }
            }
        }

        el.append('<p class="dolphin-msg">' + traducao.dolphin[4] + '</p>');
        el.append('<br><div class="compilado"><p></p><br></div>');

        embaralharCompilacaoInterval = setInterval(() => {
            dolphin.compilacaoRound++;

            dolphin.compilacao = embaralhaLista(dolphin.compilacao);

            var compScreen = '';

            for(i = 1; i < (dolphin.acertosMinimos * 15) + 1; i++){
                if(i % 10 == 0)
                    compScreen += dolphin.compilacao[i - 1] + '<br>'

                else
                    compScreen += dolphin.compilacao[i - 1] + ' ';
            }

            $('.compilado p').html(compScreen)
            
            if(dolphin.compilacaoRound == 1)
                scrollMax();
            
            if(dolphin.compilacaoRound == 10)
                clearInterval(embaralharCompilacaoInterval)
            
        }, 500);

        setTimeout(() => {
            if(dolphin.acertos == dolphin.acertosMinimos){
                /* Caso tenha escolhido tudo certo */

                jogo.vitoria = true;

                virusState.html(traducao.dolphin[5]);
                clearInterval(dolphinProgressBar);
                $('.num-resto').animate({
                    color: 'white'
                }, 2000);
                if(controle.modo == 'ataque'){
                    animacoes.caracteres = '☠️☠️☠️'
                    animacaoClown(true)
                }else{
                    animacoes.caracteres = '###'
                }
                el.append('<p class="hacker"><span style="color: white">' + hacker.nome + '</span><span>: ' + hacker.mensagens[9] + '</span></p><br>');
                scrollMax();
                inserir(el, 'p', traducao.dolphin[6], 1000);
                inserir(el, 'p', traducao.dolphin[7], 2000);
                pularLinha(el, 2001)
                DataHora(2500);
                jogarNovamente(3000);
        
            }else{
                /* Caso nem todas as escolhas sejam as certas */

                jogo.vitoria = false;

                virusState.html('');
                
                $('.loaded-bar').animate({
                    width: 100 + '%'
        
                }, 2000);
                setTimeout(() => {
                    $('.screen > img').remove();
                    if(controle.modo == 'defesa'){
                        animacoes.caracteres = '☠️☠️☠️'
                        animacaoClown(false);

                    }else{
                        animacoes.caracteres = '###'
                    }
                    clearInterval(dolphinProgressBar);
                    $('.porcentagem').html('100%');
                    $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');
                    virusState.html(traducao.dolphin[8]);
                    $('.dolphin-msg').html(traducao.dolphin[9] + dolphin.acertos + '/' + dolphin.acertosMinimos + '. ' + traducao.dolphin[10]);

                    $('.num-resto').animate({
                        opacity: 0.1
                    }, 2500)

                }, 2000);
    
                setTimeout(() => {
                    el.append('<p class="hacker"><span style="color: white">' + hacker.nome + '</span><span>: ' + hacker.mensagens[8] + '</span></p><br>');
                    scrollMax();
                }, 2500);
                inserir(el, 'p', traducao.dolphin[11], 3500);
                inserir(el, 'p', traducao.dolphin[12], 4500);
                pularLinha(el, 4501)
                DataHora(5000)
                jogarNovamente(5500)
            }
        }, 5000);

    }else{
        /* Em caso de derrota por não escolher tudo a tempo e a barra atingir 100% */

        jogo.vitoria = false;

        $('.screen > img').remove();
        if(controle.modo == 'defesa'){
            animacoes.caracteres = '☠️☠️☠️'
            animacaoClown(false);
        }else{
            animacoes.caracteres = '###'
        }

        clearInterval(dolphinProgressBar);
        $('.porcentagem').html('100%');
        $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');

        virusState.html('//PROCESSO CONCLUÍDO//');
        inserir(el, 'p', traducao.dolphin[13], 500);
        setTimeout(() => {
            el.append('<p class="hacker"><span style="color: white">' + hacker.nome + '</span><span>: ' + hacker.mensagens[8] + '</span></p><br>');
            scrollMax();
        }, 1500);
        inserir(el, 'p', traducao.dolphin[12], 2500);
        pularLinha(el, 2501)
        DataHora(3000);
        jogarNovamente(3500)
    }
}


// Fornece as opções de cada round do mood DOLPHIN, além de embaralhar as posições
function dolphinOpcoes(){
    let opcao1 = numeroAleatorio(0, 2);
    let opcao2 = numeroAleatorio(0, 2);
    let opcao3 = numeroAleatorio(0, 2);

    dolphin.opcoes = []
    dolphin.opcoes.push(dolphin.naoprimos[numeroAleatorio(0, 232)]);
    dolphin.opcoes.push(dolphin.naoprimos[numeroAleatorio(0, 232)]);
    dolphin.opcoes.push(dolphin.primos[numeroAleatorio(0, 165)]);

    while(opcao2 == opcao1)
        opcao2 = numeroAleatorio(0, 2);
    
    while(opcao3 == opcao2 || opcao3 == opcao1)
        opcao3 = numeroAleatorio(0, 2);
    
    dolphin.opcoes = [dolphin.opcoes[opcao1], dolphin.opcoes[opcao2], dolphin.opcoes[opcao3]]
}