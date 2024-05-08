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
        inserir(el, 'p', 'OLÁ, ' + jogo.nome + '. SEU DISPOSITIVO ESTÁ SOFRENDO UM GRAVE ATAQUE DDOS. POR FAVOR, SELECIONE OS CÓDIGOS DIVERGENTES PARA COMPILAÇÃO. AH! PERMITA-ME LHE PERGUNTAR, ' + jogo.nome + '. COMO VÃO SEUS PRIMOS?', 5500);
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
            $('.dolphin-analise').append($('<div class="dolphin-analise-unselected"></div>'));
            analiseDolphin($('.dolphin-analise-unselected'))
            inserirImg($('.screen'))

        }, 6000);

    }, tempo);
}


function inserirImg(el){
    el.append('\
        <img class="dolphin-img" id="dol-img-1" src="../assets/img-dolphin.jpg">\
        <img class="dolphin-img" id="dol-img-2" src="../assets/img-dolphin.jpg">\
        <img class="dolphin-img" id="dol-img-3" src="../assets/img-dolphin.jpg">\
        <img class="dolphin-img" id="dol-img-4" src="../assets/img-dolphin.jpg">\
        <img class="dolphin-img" id="dol-img-5" src="../assets/img-dolphin.jpg">\
        <img class="dolphin-img" id="dol-img-6" src="../assets/img-dolphin.jpg">\
        <img class="dolphin-img" id="dol-img-7" src="../assets/img-dolphin.jpg">\
        <img class="dolphin-img" id="dol-img-8" src="../assets/img-dolphin.jpg">\
    ')
    animarImg($('#dol-img-1'));
    setTimeout(() => {animarImg($('#dol-img-2'));}, 100);
    setTimeout(() => {animarImg($('#dol-img-3'));}, 200);
    setTimeout(() => {animarImg($('#dol-img-4'));}, 300);
    setTimeout(() => {animarImg($('#dol-img-4'));}, 400);
    setTimeout(() => {animarImg($('#dol-img-4'));}, 500);
    setTimeout(() => {animarImg($('#dol-img-4'));}, 600);
    setTimeout(() => {animarImg($('#dol-img-4'));}, 700);
}


function animarImg(img){
    if(jogo.vitoria == null){
        let tempo = numeroAleatorio(10, 15) * 100 + 700
        let valor = Number($('.screen').css('width').substring(0, $('.screen').width().length - 2));

        if(valor > 1000){
            img.css('width', numeroAleatorio(20, 25) + '%');
        }else if(valor > 800){
            img.css('width', numeroAleatorio(25, 30) + '%');
        }else if(valor > 600){
            img.css('width', numeroAleatorio(30, 35) + '%');
        }else{
            img.css('width', numeroAleatorio(35, 40) + '%');
        }
        img.css('height', 'auto');
        img.css('left', (numeroAleatorio(0, 100) - ((img.width() / $('.screen').width()) * 100) / 2) + '%');
        img.css('top', (numeroAleatorio(0, 100) - ((img.height() / $('.screen').height()) * 100) / 2) + '%');

        setTimeout(() => {
            img.show();
            img.fadeOut(700);
            animarImg(img)
        }, tempo);
    }
}


function progressoVirusDinamico(){
    $('.virus-mensagem').show();
    $('.virus-bar-wraper').show();
    $('.virus-mensagem').appendTo('.game-screen');
    $('.virus-bar-wraper').appendTo('.game-screen');

    $('.loaded-bar').animate({
        width: 100 + '%'

    }, 12000 * dolphin.acertosMinimos, "linear");

    dolphinProgBar = setInterval(() => {
        $('.porcentagem').html(Math.floor(($('.loaded-bar').width() / $('.bar-space').width()) * 100) + '%');
        $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');

        if($('.loaded-bar').width() == $('.bar-space').width() && !dolphin.primoSelect){
            dolphin.tempoLimite = false;
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
                    dolphin.acertos++;
                }

                $(this).css('color', 'white');

                dolphin.codigos[dolphin.analise] = numero;

                dolphin.analise++;

                if(dolphin.analise < dolphin.acertosMinimos){
                    setTimeout(() => {
                        if(dolphin.tempoLimite){
                            $('.dolphin-analise-selected').html('');
                            $('.dolphin-analise-selected').attr('class', 'dolphin-analise-unselected');
                            dolphin.primoSelect = false;
                            analiseDolphin(el);

                        }else{
                            dolphinResultado($('.dolphin-analise'));
                        }
                    }, 1000);
                    
                }else{
                    dolphinResultado($('.dolphin-analise'));
                }
            }
        })
    }, 500);
}


function embaralhaLista(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}


function adequarNum(num){
    if(num.length == 2){
        num = num + ' '

    }else if(num.length == 1){
        num = ' ' + num + ' '
    }
    return num
}


function dolphinResultado(el){
    el.html('');
    var vs = $('.virus-state');
    $('.loaded-bar').stop();
    vs.html('//BACKDOOR DNS/' + numeroAleatorio(100, 999) + ':' + numeroAleatorio(10, 99) + '//');

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

        el.append('<p class="dolphin-msg">ESTOU DESCOMPILANDO OS CÓDIGOS. QUEIRA DEUS QUE VOCÊ TENHA ESCOLHIDO CERTO.</p>');
        el.append('<br><div class="compilado"><p></p><br></div>');

        randomComp = setInterval(() => {
            dolphin.compRound++;

            dolphin.compilacao = embaralhaLista(dolphin.compilacao);

            var compScreen = '';

            for(i = 1; i < (dolphin.acertosMinimos * 15) + 1; i++){
                if(i % 10 == 0){
                    compScreen += dolphin.compilacao[i - 1] + '<br>'
                }else{
                    compScreen += dolphin.compilacao[i - 1] + ' ';
                }
            }

            $('.compilado p').html(compScreen)
            
            if(dolphin.compRound == 1){
                scrollMax();
            }

            if(dolphin.compRound == 10){
                clearInterval(randomComp)
            }

        }, 500);

        setTimeout(() => {
            if(dolphin.acertos == dolphin.acertosMinimos){
                /* Caso tenha escolhido tudo certo */

                jogo.vitoria = true;
                vs.html('//PROCESSO INTERROMPIDO//');
                clearInterval(dolphinProgBar);
                $('.num-resto').animate({
                    color: 'white'
                }, 2000);
                inserir(el, 'p', 'CARREGAMENTO DE MALWARE MAL-SUCEDIDO', 0);
                inserir(el, 'p', 'VOCÊ VENCEU O MODO DOLPHIN!', 1000);
                jogarNovamente(2000);
        
            }else{
                /* Em caso de derrota */

                jogo.vitoria = false;

                vs.html('');
                
                $('.loaded-bar').animate({
                    width: 100 + '%'
        
                }, 2000);
                setTimeout(() => {
                    clearInterval(dolphinProgBar);
                    $('.porcentagem').html('100%');
                    $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');
                    vs.html('//PROCESSO CONCLUÍDO//');
                    $('.dolphin-msg').html('CÓDIGOS DIVERGENTES: ' + dolphin.acertos + '. VOCÊ FALHOU, E AGORA IREI ME AUTO-DESTRUIR.');

                    $('.num-resto').animate({
                        opacity: 0.1
                    }, 2500)

                }, 2000);
    
                inserir(el, 'p', 'CARREGAMENTO DE MALWARE BEM-SUCEDIDO', 2500);
                inserir(el, 'p', 'VOCÊ PERDEU O MODO DOLPHIN', 3500);
                jogarNovamente(4500)
            }
        }, 5000);

    }else{
        /* Em caso de derrota depois da barra atingir 100% */

        jogo.vitoria = false;

        clearInterval(dolphinProgBar);
        $('.porcentagem').html('100%');
        $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');

        vs.html('//PROCESSO CONCLUÍDO//');
        inserir(el, 'p', 'CARREGAMENTO DE MALWARE BEM-SUCEDIDO // EXCEPTION(E): DOLPHIN COM DADOS INSUFICIENTES PARA COMPILAÇÃO', 500);
        inserir(el, 'p', 'VOCÊ PERDEU O MODO DOLPHIN', 1500);
        jogarNovamente(2500)
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
