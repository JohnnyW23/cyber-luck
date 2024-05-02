var tentativa = 0;

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function progressoVirus(tempo){
    setTimeout(() => {
        $('.game-screen').append('<div class="virus-bar-wraper"></div>');
        $('.virus-bar-wraper').append('<p>Progresso do vírus no sistema:</p>');
        $('.virus-bar-wraper').append('<div class="virus-bar"></div>');
        $('.virus-bar').append('<span class="porcentagem"></span>');
        $('.virus-bar').append('<div class="bar-space"></div>');
        $('.bar-space').append('<div class="loaded-bar" style="float: left"></div>');
        $('.virus-bar').append('<div style="clear: both"></div>');

        let min;
        let max;
        let num;

        if(tentativa == 0){
            min = 2
            max = 3;

        }else if(tentativa == 1){
            min = 10;
            max = 21;

        }else if(tentativa == 2){
            min = 22;
            max = 41;
            
        }else if(tentativa == 3){
            min = 42;
            max = 61;
            
        }else if(tentativa == 4){
            min = 62;
            max = 81;
            
        }else if(tentativa == 5){
            min = 82;
            max = 99;
            
        }else{
            min = 100;
            max = 100;
        }

        num = numeroAleatorio(min,max);
        $('.loaded-bar').css('width', num + '%');
        $('.porcentagem').html(num + '%');
        $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');
        scrollMax();
        
    }, tempo);
}

function transformadorNum(num){
    if(num < 10){
        num = '0' + num
    }
    return num
};

function DataHora(tempo){
    setTimeout(() => {
        let dataAtual = new Date();
        let ano = transformadorNum(dataAtual.getFullYear());
        let mes = transformadorNum(dataAtual.getMonth() + 1);
        let dia = transformadorNum(dataAtual.getDate());
        let horas = transformadorNum(dataAtual.getHours());
        let minutos = transformadorNum(dataAtual.getMinutes());
        let segundos = transformadorNum(dataAtual.getSeconds());

        $('.game-screen').append('<div class="tempo"></div>');
        $('.tempo').append('<p>' + dia + '-' + mes + '-' + ano + '</p>\
        <p>' + horas + ':' + minutos + ':' + segundos + '</p>');
        scrollMax();
        
    }, tempo);
}

function definirLimite(level){
    let limite;
    if(level == 1){
        limite = '<span style="color: white">1 até 8</span>'
    }else if(level == 2){
        limite = '<span style="color: white">1 até 16</span>'
    }else{
        limite = '<span style="color: white">1 até 24</span>'
    }
    return limite;
}

function pularLinha(destino, tempo, duas=false){
    if(duas == false){
        inserir(destino, 'br', '', tempo, false, true);
    }else{
        inserir(destino, 'br', '', tempo, false, true);
        inserir(destino, 'br', '', tempo, false, true);
    }   
}

function chatCyber(destino, tempo){
    inserir(destino, 'span', 'cYber_death0', tempo, 'color: white');
}

function entrada_hacker(){
    let el = $('.game-screen');
    pularLinha(el, 500)
    inserir(el, 'p', '//AVISO DO LOG// cYber_death0 conectou ao sistema há 5 minutos.', 501);
    pularLinha(el, 1500);
    chatCyber(el, 1501);
    inserir(el, 'span', ': MWAHAHAHAHAHAHA! Seu PC foi infectado pelo meu vírus! Ele está sendo carregado no seu sistema neste momento e não há nada que você possa fazer! A não ser que... Impossível. Você não vai adivinhar o código secreto a tempo, ' + nome +  ' hahaha!', 1502);
    pularLinha(el, 2500, true);
    inserir(el, 'p', '//FIREWALL DETECTOU CARREGAMENTO DE VÍRUS LETAL AO SISTEMA//', 2501)
    inserir(el, 'p', '//TENTATIVA DE NEUTRALIZAR VÍRUS EM ANDAMENTO//', 3000);
    inserir(el, 'p', 'AVISO: FIREWALL SOBRECARREGADO. ENTRADA MANUAL NECESSÁRIA DE [USER ' + nome + '].', 3500);
    inserir(el, 'p', 'DETECTADO CÓDIGO DE NÚMERO ENTRE ' + limite + '.', 4000);
    pularLinha(el, 4500);
    progressoVirus(4501);
    pularLinha(el, 5000);
    DataHora(5500);
}