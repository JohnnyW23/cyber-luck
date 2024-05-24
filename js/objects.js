animacoes = {
    idioma: false,
    inicio: false,
    readme: false,
    rounds: 0,
    caracteres: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&*',
    tela: {
        altura: null,
        largura: null
    },
    codigos: 0
}


caixaDeSom = {
    musica: {
        current: null,
        intro: new Audio('music/intro.mp3'),
        game: new Audio('music/game.mp3')
    },
    sfx: {
        derrota: new Audio('music/clown-laugh.mp3')
    }
}


paleta = {
    open: false,
    selected: 'lime',
    cascataSelected: 'rgb(0, 60, 0)',
    cores: [
        {
            id: 'cor0',
            color: 'lime',
            loadedBarBGColor: 'lime',
            novoJogoBdColor: 'lime',
            headerBGColor: 'rgb(0, 10, 0)',
            screenBGColor: 'radial-gradient(70% 50% at bottom, rgb(0, 80, 0) 5%, rgb(0, 60, 0) 20%, rgb(0, 20, 0) 100%)',
            coresBGColor: 'rgb(0, 40, 0)',
            cascataColor: 'rgb(0, 60, 0)'
        },{
            id: 'cor1',
            color: 'aqua',
            loadedBarBGColor: 'aqua',
            novoJogoBdColor: 'aqua',
            headerBGColor: 'rgb(0, 10, 10)',
            screenBGColor: 'radial-gradient(70% 50% at bottom, rgb(0, 80, 80) 5%, rgb(0, 60, 60) 20%, rgb(0, 20, 20) 100%)',
            coresBGColor: 'rgb(0, 40, 40)',
            cascataColor: 'rgb(0, 60, 60)'
        },{
            id: 'cor2',
            color: 'red',
            loadedBarBGColor: 'red',
            novoJogoBdColor: 'red',
            headerBGColor: 'rgb(10, 0, 0)',
            screenBGColor: 'radial-gradient(70% 50% at bottom, rgb(80, 0, 0) 5%, rgb(60, 0, 0) 20%, rgb(20, 0, 0) 100%)',
            coresBGColor: 'rgb(40, 0, 0)',
            cascataColor: 'rgb(60, 0, 0)'
        },{
            id: 'cor3',
            color: 'hotpink',
            loadedBarBGColor: 'hotpink',
            novoJogoBdColor: 'hotpink',
            headerBGColor: 'rgb(10, 5, 7)',
            screenBGColor: 'radial-gradient(70% 50% at bottom, rgb(80, 40, 56) 5%, rgb(60, 30, 42) 20%, rgb(20, 10, 14) 100%)',
            coresBGColor: 'rgb(40, 20, 25)',
            cascataColor: 'rgb(60, 30, 37.5)'
        },{
            id: 'cor4',
            color: 'fuchsia',
            loadedBarBGColor: 'fuchsia',
            novoJogoBdColor: 'fuchsia',
            headerBGColor: 'rgb(10, 0, 10)',
            screenBGColor: 'radial-gradient(70% 50% at bottom, rgb(80, 0, 80) 5%, rgb(60, 0, 60) 20%, rgb(20, 0, 20) 100%)',
            coresBGColor: 'rgb(40, 0, 40)',
            cascataColor: 'rgb(60, 0, 60)'
        },{
            id: 'cor5',
            color: 'gold',
            loadedBarBGColor: 'gold',
            novoJogoBdColor: 'gold',
            headerBGColor: 'rgb(10, 8.44, 0)',
            screenBGColor: 'radial-gradient(70% 50% at bottom, rgb(80, 67.52, 0) 5%, rgb(60, 50.64, 0) 20%, rgb(20, 16.88, 0) 100%)',
            coresBGColor: 'rgb(40, 33.76, 0)',
            cascataColor: 'rgb(60, 50.64, 0)'
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
        vitoria: null
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
    if(animacoes.idioma == 'portugues'){
        hacker.mensagens = [
            "Agora eu tenho controle total do seu dispositivo, " + jogo.nome + "! Hahahahahahaha! O código era " + jogo.senha + ". Eu sabia que você não ia acertar. Dê adeus aos seus dados.",
            "Haha! Parece que finalmente estou prestes a infectar seu sistema. Só lhe resta mais uma chance de impedir minha invasão completa!",
            "Sua persistência é admirável, mas inútil como você, " + jogo.nome + ". Enquanto você luta, eu avanço mais perto da vitória hahahahhaha!",
            "Não adianta tentar. Logo, seu dispositivo será apenas um brinquedo em minhas mãos, " + jogo.nome + ".",
            "Se esconda atrás de sua interface, se quiser. Mas não poderá escapar de mim. Meu domínio está próximo.",
            "Cada tentativa falha de parar meu vírus é um passo mais perto de sua derrota! XD",
            "MWAHAHAHAHAHAHA! Seu dispositivo foi infectado pelo meu vírus! Ele está sendo carregado no seu sistema neste momento e não há nada que você possa fazer! A não ser que... Impossível. Você não vai adivinhar o código secreto a tempo, " + jogo.nome +  " hahaha!",
            "O que? Você conseguiu?! Isso é impossível... Não... Maldição. " + jogo.nome + "... Se prepare para a próxima vez.</p><br><p>CONEXÃO DE SERVIDOR COM " + hacker.nome + " REMOVIDA POR FIREWALL DO SISTEMA."
        ]
        
    }else if(animacoes.idioma == 'ingles'){
        hacker.mensagens = [
            "Now I hold the entire control of your device, " + jogo.nome + "! Hahahahahahaha! The code was " + jogo.senha + ". I knew you wouldn't get it. Give a farewell to your data.",
            "Haha! Looks like I'm about to finally infect your system. One chance left for you to stop my complete invasion!",
            "Your persistence is wonderful, but useless like you, " + jogo.nome + ". While you struggle, I go forward closer to victory hahahahhaha!",
            "It's useless to try. Soon, your device will be just a toy in my hands, " + jogo.nome + ".",
            "Stay hidden behind your interface, if you want it. But you won't escape from me. My domain is close.",
            "Each failed try to stop my virus is a step closer to your defeat! XD",
            "MWAHAHAHAHAHAHA! Your device got infected by my virus! It's being loaded in your system right now and there is nothing you could possibly do! Unless you... Impossible. You'll never guess the secret code in time, " + jogo.nome +  " hahaha!",
            "What? You made it?! This is impossible... No... Darn you. " + jogo.nome + "... Get ready for the next time.</p><br><p>SERVER CONNECTION WITH " + hacker.nome + " REMOVED BY SYSTEM FIREWALL."
        ]
    }
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