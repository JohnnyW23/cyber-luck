paleta = {
    open: false,
    selected: 'lime',
    cores: [
        {
            id: 'cor0',
            color: 'lime',
            loadedBarBGColor: 'lime',
            novoJogoBdColor: 'lime',
            headerBGColor: 'rgb(0, 10, 0)',
            screenBGColor: 'rgb(0, 19, 0)',
            coresBGColor: 'rgb(0, 40, 0)'
        },{
            id: 'cor1',
            color: 'aqua',
            loadedBarBGColor: 'aqua',
            novoJogoBdColor: 'aqua',
            headerBGColor: 'rgb(0, 10, 10)',
            screenBGColor: 'rgb(0, 19, 19)',
            coresBGColor: 'rgb(0, 40, 40)'
        },{
            id: 'cor2',
            color: 'red',
            loadedBarBGColor: 'red',
            novoJogoBdColor: 'red',
            headerBGColor: 'rgb(10, 0, 0)',
            screenBGColor: 'rgb(19, 0, 0)',
            coresBGColor: 'rgb(40, 0, 0)'
        },{
            id: 'cor3',
            color: 'hotpink',
            loadedBarBGColor: 'hotpink',
            novoJogoBdColor: 'hotpink',
            headerBGColor: 'rgb(10, 5, 7)',
            screenBGColor: 'rgb(19, 10, 14)',
            coresBGColor: 'rgb(40, 19, 25)'
        },{
            id: 'cor4',
            color: 'fuchsia',
            loadedBarBGColor: 'fuchsia',
            novoJogoBdColor: 'fuchsia',
            headerBGColor: 'rgb(10, 0, 10)',
            screenBGColor: 'rgb(19, 0, 19)',
            coresBGColor: 'rgb(40, 0, 40)'
        }
    ]
}


function criarJogo(){
    jogo = {
        nome: null,
        nomeSelect: null,
        nomeSintaxe: null,
        nomeTamanho: null,
        nivel: null,
        nivelSelect: null,
        senha: null,
        limite: null,
        tentativas: null,
        vitoria: null,
    }
}


function criarProgBar(){
    progressBar = {
        porcentagemAtual: null,
        porcentagemAntiga: null,
        porcentagemDinamica: null,
    }
}


function criarHacker(){
    hacker = {};
    hacker.nome = 'cYber_death0';
    hacker.mensagens = [
        "Agora eu tenho controle total do seu dispositivo, " + jogo.nome + "! Hahahahahahaha! O código era " + jogo.senha + ". Eu sabia que você não ia acertar. Dê adeus aos seus dados.",
        "Haha! Parece que finalmente estou prestes a infectar seu sistema. Só lhe resta mais uma chance de impedir minha invasão completa!",
        "Sua persistência é admirável, mas inútil como você, " + jogo.nome + ". Enquanto você luta, eu avanço mais perto da vitória hahahahhaha!",
        "Não adianta tentar. Logo, seu dispositivo será apenas um brinquedo em minhas mãos, " + jogo.nome + ".",
        "Se esconda atrás de sua interface, se quiser. Mas não poderá escapar de mim. Meu controle está próximo.",
        "Cada tentativa falha de quebrar meu vírus é um passo mais perto de sua derrota! XD",
        "MWAHAHAHAHAHAHA! Seu dispositivo foi infectado pelo meu vírus! Ele está sendo carregado no seu sistema neste momento e não há nada que você possa fazer! A não ser que... Impossível. Você não vai adivinhar o código secreto a tempo, " + jogo.nome +  " hahaha!",
        "O que? Você conseguiu?! Isso é impossível... Não... Maldição. " + jogo.nome + "... Se prepare para a próxima vez.</p><br><p>CONEXÃO DE SERVIDOR COM " + hacker.nome + " REMOVIDA POR FIREWALL DO SISTEMA."
    ]
}


function criarDolphin(){
    dolphin = {
        acertos: 0,
        acertosMinimos: 6 + (jogo.nivel - 1) * 2,
        primos: [],
        naoprimos: [],
        analise: 0,
        primoSelect: false,
        tempoLimite: true,
        codigos: [],
        compRound: 0
    }
}


function criarRoundsAnim(){
    animacaoFotos = {
        dolphin: 0,
        clown: 0
    }
}