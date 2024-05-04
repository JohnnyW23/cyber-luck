jogo = {
    nome: null,
    nomeSelect: null,
    nivel: null,
    nivelSelect: null,
    senha: null,
    limite: null,
    tentativas: null,
}

progressBar = {
    porcentagemAtual: null,
    porcentagemAntiga: null,
    porcentagemDinamica: null,
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
            "O que? Você conseguiu?! Isso é impossível... Não... Maldição. " + jogo.nome + "... Se prepare para a próxima vez.\
            CONEXÃO DE SERVIDOR COM " + hacker.nome + " REMOVIDA POR FIREWALL DO SISTEMA."
        ]
}
