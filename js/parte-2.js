function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function progressoVirus(tempo){
    setTimeout(() => {

        if(jogo.tentativas < 6 || jogo.tentativas == 7){
            progressBar.porcentagemAntiga = progressBar.porcentagemAtual;
            $('.virus-mensagem').show();
            $('.virus-bar-wraper').show();
            $('.virus-mensagem').appendTo('.game-screen');
            $('.virus-bar-wraper').appendTo('.game-screen');

        }else{
            criarProgBar();
            progressBar.porcentagemAntiga = 0;
            
            $('.game-screen').append('<p class="virus-mensagem">' + traducao.parte2[0] + '</p>');
            $('.game-screen').append('<div class="virus-bar-wraper"></div>');
            $('.virus-bar-wraper').append('<div class="virus-bar"></div>');
            $('.virus-bar').append('<span class="porcentagem"></span>');
            $('.virus-bar').append('<div class="bar-space"></div>');
            $('.bar-space').append('<div class="loaded-bar" style="float: left; background-color:' + paleta.selected + '"></div>');
            $('.virus-bar-wraper').append('<p class="virus-state"></p>')
            $('.virus-bar').append('<div style="clear: both"></div>');
        }
        
        if(!jogo.vitoria){

            let min;
            let max;

            if(jogo.tentativas == 6){
                min = 2
                max = 3;

            }else if(jogo.tentativas == 5){
                min = 10;
                max = 21;

            }else if(jogo.tentativas == 4){
                min = 22;
                max = 41;
                
            }else if(jogo.tentativas == 3){
                min = 42;
                max = 61;
                
            }else if(jogo.tentativas == 2){
                min = 62;
                max = 81;
                
            }else if(jogo.tentativas == 1){
                min = 82;
                max = 99;
                
            }else{
                min = 100;
                max = 100;
            }

            progressBar.porcentagemAtual = numeroAleatorio(min, max);

            progressBar.porcentagemDinamica = progressBar.porcentagemAntiga;

            interval = setInterval(() => {
                progressBar.porcentagemDinamica++;

                $('.loaded-bar').animate({
                    width: progressBar.porcentagemDinamica + '%'
        
                }, 100, "linear");
                
                $('.porcentagem').html(progressBar.porcentagemDinamica + '%');
                $('.bar-space').css('width', 'calc(100% - ' + ($('.porcentagem').width() + 10) + 'px)');

                if(progressBar.porcentagemDinamica == 100){
                    $('.virus-state').html(traducao.parte2[1])
                    jogo.vitoria = false;
                    animacoes.caracteres = '☠️☠️☠️'
                    animacaoClown();
                    if(!caixaDeSom.musica.current.muted){
                        caixaDeSom.sfx.derrota.play();
                    }
                }
                
                if(progressBar.porcentagemDinamica == progressBar.porcentagemAtual){
                    clearInterval(interval)
                }
                
            }, 100);

        }
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
        if(animacoes.idioma == 'portugues'){
            $('.tempo').append('<p>' + dia + '-' + mes + '-' + ano + '</p>\
            <p>' + horas + ':' + minutos + ':' + segundos + '</p>');

        }else if(animacoes.idioma == 'ingles'){
            $('.tempo').append('<p>' + mes + '-' + dia + '-' + ano + '</p>\
            <p>' + horas + ':' + minutos + ':' + segundos + '</p>');

        }
        scrollMax();
        
    }, tempo);
}

function definirLimite(level){
    let limite;
    if(level == 1){
        limite = '<span style="color: white">' + traducao.parte2[2][0] + '</span>'
    }else if(level == 2){
        limite = '<span style="color: white">' + traducao.parte2[2][1] + '</span>'
    }else{
        limite = '<span style="color: white">' + traducao.parte2[2][2] + '</span>'
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
    setTimeout(() => {
        destino.append('<p class="hacker"><span style="color: white">' + hacker.nome + '</span><span>: ' + hacker.mensagens[jogo.tentativas] + '</span></p>');
    }, tempo);
    pularLinha(destino, tempo + 1);
}

function inputCodigo(destino, tempo){
    inserir(destino, 'p', traducao.parte2[3][0] + jogo.tentativas, tempo);
    inserir(destino, 'p', traducao.parte2[3][1], tempo + 1);
    setTimeout(() => {
        destino.append('\
        <div class="codigo-wraper">\
            <span>> </span><input id="codigo" type="text" autocomplete="off" style="color: ' + paleta.selected + '">\
        </div>\
        ');
        scrollMax();
        verificador();
    }, tempo + 2);
}

function entrada_hacker(){
    let el = $('.game-screen');
    jogo.tentativas = 6;
    pularLinha(el, 500)
    inserir(el, 'p', traducao.parte2[4] + hacker.nome + traducao.parte2[5], 501);
    pularLinha(el, 1500);
    chatCyber(el, 1501); 
    inserir(el, 'p', traducao.parte2[6], 2501)
    inserir(el, 'p', traducao.parte2[7], 3000);
    inserir(el, 'p', traducao.parte2[8] + ' [USER ' + jogo.nome + ']', 3500);
    inserir(el, 'p', traducao.parte2[9] + jogo.limite, 4000);
    pularLinha(el, 4500);
    progressoVirus(4501);
    pularLinha(el, 4502);
    DataHora(5000);
    pularLinha(el, 5499);
    inputCodigo(el, 5500);
}
