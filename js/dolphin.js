function intelDolphin(el, tempo){
    criarDolphin();
    setTimeout(() => {
        $('.virus-mensagem').insertAfter('.screen');
        $('.virus-bar-wraper').insertAfter('.screen');
        $('.virus-mensagem').hide();
        $('.virus-bar-wraper').hide();
        el.html('');
        inserir(el, 'p', '//INTELIGENCIA D.O.L.P.H.I.N. ATIVADA//', 0);
        pularLinha(el, 999);
        inserir(el, 'p', '<span style="color: white">D</span>ynamic', 1000);
        inserir(el, 'p', '<span style="color: white">O</span>ffensive', 1500);
        inserir(el, 'p', '<span style="color: white">L</span>ayered', 2000);
        inserir(el, 'p', '<span style="color: white">P</span>rotection with', 2500);
        inserir(el, 'p', '<span style="color: white">H</span>igh-level', 3000);
        inserir(el, 'p', '<span style="color: white">I</span>ntelligence and', 3500);
        inserir(el, 'p', '<span style="color: white">N</span>eural-defense', 4000);
        pularLinha(el, 4999);
        inserir(el, 'p', '//EXECUTANDO DOLPHIN//', 5000);
        pularLinha(el, 5499);
        inserir(el, 'p', 'OLÁ, ' + jogo.nome + '. SEU DISPOSITIVO ESTÁ SOFRENDO UM GRAVE ATAQUE DDOS. POR FAVOR, SELECIONE OS CÓDIGOS DIVERGENTES PARA COMPILAÇÃO.', 5500);
        pularLinha(el, 5999);

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
            $('.dolphin-analise').append($('<div class="dolphin-analise-unselected"></div>'))
            analiseDolphin($('.dolphin-analise-unselected'))

        }, 6000);

    }, tempo);
}


function progressoVirusDinamico(){
    jogo.porcentagemAntiga = jogo.porcentagemAtual;

    $('.virus-mensagem').show();
    $('.virus-bar-wraper').show();
    $('.virus-mensagem').appendTo('.game-screen');
    $('.virus-bar-wraper').appendTo('.game-screen');

    $('.loaded-bar').animate({
        width: 100 + '%'

    }, 120000, "linear");

    dolphinProgBar = setInterval(() => {
        $('.porcentagem').html(Math.floor(($('.loaded-bar').width() / $('.bar-space').width()) * 100) + '%');
        $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');

        if($('.loaded-bar').width() == $('.bar-space').width()){
            dolphinResultado($('.dolphin-analise'))
        }

    }, 10);
    scrollMax();
}


function analiseDolphin(el){
    dolphinOpcoes();

    inserir(el, 'p', '//1q743...")//9817kjha9h21q743...")//9817kjha9h2//', 0);
    inserir(el, 'p', 'ITERAÇÃO ' + (dolphin.analise + 1) + '/' + dolphin.acertosMinimos, 1);
    pularLinha(el, 499);

    setTimeout(() => {
        el.append('\
            <span>[' + dolphin.opcoes[0] + ']</span>\
            <span>[' + dolphin.opcoes[1] + ']</span>\
            <span>[' + dolphin.opcoes[2] + ']</span>\
        ')
        scrollMax();

        $('.dolphin-analise-unselected span').click(function(){
            if(dolphin.primoSelect == false){
                dolphin.primoSelect = true;

                $('.dolphin-analise-unselected').attr('class', 'dolphin-analise-selected');
                
                let numero;
                if($(this).html().length == 5){
                    numero = $(this).html().substring(1, 4)

                }else if($(this).html().length == 4){
                    numero = $(this).html().substring(1, 3)

                }else{
                    numero = $(this).html().substring(1, 2)
                }

                if(dolphin.primos.includes(Number(numero))){
                    dolphin.acertos ++;
                }
                $(this).css('color', 'white');

                dolphin.analise++;

                setTimeout(() => {
                    if(dolphin.analise < dolphin.acertosMinimos){
                        $('.dolphin-analise-selected').html('');
                        $('.dolphin-analise-selected').attr('class', 'dolphin-analise-unselected');
                        dolphin.primoSelect = false;
                        analiseDolphin(el)

                    }else{
                        dolphinResultado($('.dolphin-analise'));
                    }

                }, 1000);
            }
        })

    }, 500);
}

function dolphinResultado(el){
    el.html('');
    $('.loaded-bar').stop();
    if(dolphin.acertos == dolphin.acertosMinimos){
        clearInterval(dolphinProgBar);
        inserir(el, 'p', 'CARREGAMENTO INTERROMPIDO', 0);
        jogarNovamente(el, 2000);

    }else{
        if($('.loaded-bar').width() != $('.bar-space').width()){
            $('.loaded-bar').animate({
                width: 100 + '%'
    
            }, 2000);
            setTimeout(() => {
                clearInterval(dolphinProgBar);
                $('.porcentagem').html('100%');
                $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');
            }, 2000);

        }else{
            clearInterval(dolphinProgBar);
            $('.porcentagem').html('100%');
            $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');
            dolphin.tempoLimite = false;
        }

        if(dolphin.tempoLimite){
            inserir(el, 'p', 'CARREGAMENTO CONCLUÍDO', 2500);
            inserir(el, 'p', 'VOCÊ PERDEU O MODO DOLPHIN', 3500);
            jogarNovamente(el, 4500)

        }else{
            inserir(el, 'p', 'CARREGAMENTO CONCLUÍDO ANTES DE ANALISE DOLPHIN', 500);
            inserir(el, 'p', 'VOCÊ PERDEU O MODO DOLPHIN', 1500);
            jogarNovamente(el, 2500)
        }
    }
}


function dolphinOpcoes(){
    let op1 = numeroAleatorio(0, 2);
    let op2 = numeroAleatorio(0, 2);
    let op3 = numeroAleatorio(0, 2);

    dolphin.opcoes = []
    dolphin.opcoes.push(dolphin.naoprimos[numeroAleatorio(0, 232)]);
    dolphin.opcoes.push(dolphin.naoprimos[numeroAleatorio(0, 232)]);
    dolphin.opcoes.push(dolphin.primos[numeroAleatorio(0, 165)]);

    while(op2 == op1){
        op2 = numeroAleatorio(0, 2);
    }
    while(op3 == op2 || op3 == op1){
        op3 = numeroAleatorio(0, 2);
    }

    dolphin.opcoes = [dolphin.opcoes[op1], dolphin.opcoes[op2], dolphin.opcoes[op3]]
}