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
        inserir(el, 'p', '//INICIANDO PROCESSO//', 5000);
        pularLinha(el, 5499);
        inserir(el, 'p', 'ALERTA: IDENTIFIQUE OS CÓDIGOS DIVERGENTES', 5500);
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
            el.append('<div class="dolphin-analise"></div>');
            analiseDolphin($('.dolphin-analise'))

        }, 6000);

    }, tempo);
}


function analiseDolphin(el){
    dolphin.primoSelect[dolphin.analise] = false;
    dolphinOpcoes();

    inserir(el, 'p', '//1q743...")//9817kjha9h21q743...")//9817kjha9h2//', 0);
    pularLinha(el, 499);

    setTimeout(() => {
        let save = el.html();
        el.append('\
            <div id="' + dolphin.analise + '">\
            <span>[' + dolphin.opcoes[0] + ']</span>\
            <span>[' + dolphin.opcoes[1] + ']</span>\
            <span>[' + dolphin.opcoes[2] + ']</span>\
            </div>\
        ')
        scrollMax();

        $('.dolphin-analise div[id="' + dolphin.analise + '"] span').click(function(){
            if(dolphin.primoSelect[dolphin.analise] == false){
                dolphin.primoSelect[dolphin.analise] = true;
                
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
                $('.dolphin-analise span').css('cursor', 'auto');

                el.html(save + $('.dolphin-analise div[id="' + dolphin.analise + '"]').html() + '<br>')
            }
            dolphin.analise++;

            setTimeout(() => {
                if(dolphin.analise < dolphin.acertosMinimos){
                    pularLinha(el, 0)
                    analiseDolphin(el)

                }else{
                    dolphinResultado($('.game-screen'));
                }

            }, 1000);
        })
    }, 500);
}

function dolphinResultado(el){
    el.html('');
    if(dolphin.acertos == dolphin.acertosMinimos){
        el.append('VOCE GANHOU O MODO DOLPHIN')
    }else{
        el.append('VOCE PERDEU O MODO DOLPHIN')
    }
}


function dolphinOpcoes(){
    let op1 = numeroAleatorio(0, 2);
    let op2 = numeroAleatorio(0, 2);
    let op3 = numeroAleatorio(0, 2);

    dolphin.opcoes = []
    dolphin.opcoes.push(dolphin.naoprimos[numeroAleatorio(0, 232)]);
    dolphin.opcoes.push(dolphin.naoprimos[numeroAleatorio(0, 232)]);
    dolphin.opcoes.push(dolphin.primos[numeroAleatorio(0, 166)]);

    while(op2 == op1){
        op2 = numeroAleatorio(0, 2);
    }
    while(op3 == op2 || op3 == op1){
        op3 = numeroAleatorio(0, 2);
    }

    dolphin.opcoes = [dolphin.opcoes[op1], dolphin.opcoes[op2], dolphin.opcoes[op3]]
}