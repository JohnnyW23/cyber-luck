// Função que faz rolar a barra pro fim
function scrollMax(){
    if(!animacoes.readme){
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 0);
    }
}

// Função que faz rolar a barra pro topo
function scrollMin(el){
    el.animate({
        scrollTop: $(document).height() * -1
    }, 0)
}

// Função que usa o método .append() jogo com setTimeout, inserindo elementos em destinos com controle de tempo de espera. Adaptado para adicionar estilo ou pular linhas. Por isso é usada para a função pularLinha()
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

// Pula linha usando a função inserir()
function pularLinha(destino, tempo, duas=false){
    if(duas == false){
        inserir(destino, 'br', '', tempo, false, true);
    }else{
        inserir(destino, 'br', '', tempo, false, true);
        inserir(destino, 'br', '', tempo, false, true);
    }
}

// Gera um número aleatório em um intervalo definido
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Adapta um zero à esquerda de uma unidade
function transformarValorTempo(num){
    if(num < 10){
        num = '0' + num
    }
    return num
};

// Cria e adapta o dia e hora do sistema do jogador
function DataHora(tempo){
    setTimeout(() => {
        let dataAtual = new Date();
        let ano = dataAtual.getFullYear();
        let mes = transformarValorTempo(dataAtual.getMonth() + 1);
        let dia = transformarValorTempo(dataAtual.getDate());
        let horas = transformarValorTempo(dataAtual.getHours());
        let minutos = transformarValorTempo(dataAtual.getMinutes());
        let segundos = transformarValorTempo(dataAtual.getSeconds());

        $('.game-screen').append('<div class="tempo"></div>');
        if(controle.idioma == 'portugues'){
            $('.tempo').append('<p>' + dia + '-' + mes + '-' + ano + '</p>\
            <p>' + horas + ':' + minutos + ':' + segundos + '</p>');

        }else if(controle.idioma == 'ingles'){
            $('.tempo').append('<p>' + mes + '-' + dia + '-' + ano + '</p>\
            <p>' + horas + ':' + minutos + ':' + segundos + '</p>');

        }
        scrollMax();
        
    }, tempo);
}