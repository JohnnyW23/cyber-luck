function verificador(){
    var gs = $('.game-screen');
    console.log('A SENHA É ' + jogo.senha)
    let palpite;

    $('#codigo').keyup(function(e) {

        if(e.which == 13){
    
            palpite = $('#codigo').val();

            if(palpite == ''){
                return false;
            }

            /* Descriptografar dura 2,8 segundos, na realidade */
            $('.codigo-wraper').html('<p style="color: white">' + '> ' + palpite  + '</p>');
            descriptografando(1000);

            if(palpite == jogo.senha){
                jogo.vitoria = true;

                setTimeout(() => {
                    respostaCerta(gs);

                }, 3800);

            }else{
                jogo.tentativas--;

                setTimeout(() => {
                    respostaErrada(gs);

                    if(jogo.tentativas > 0){
                        inputCodigo(gs, 3000);

                    }else{
                        jogo.vitoria = false;
                        inserir(gs, 'p', 'VOCÊ PERDEU!', 3000);
                    }
                    
                }, 3800);
            }

            if(jogo.vitoria != null){
                setTimeout(() => {
                    gs.append('<br>');
                    gs.append('<button id="novo-jogo" style="color: ' + paleta.selected + '; border: 2px solid ' + paleta.selected + '">JOGAR NOVAMENTE</button>');
                    scrollMax();
                    $('#novo-jogo').click(() => {
                        gs.html('');
                        novoJogo();
                    })

                }, 7800);
            }
        }
    });
}

/* CRONOLOGIA DOS FATOS:
1 segundo: descriptografar - duração 2,8 segundos
3,8 segundos: Caso de vitória, derrota ou novo código - duração 3 segundos
7,8 segundos: Botão de novo jogo (1 segundo após a ação anterior)
*/


function respostaCerta(el){
    inserir(el, 'p', '//FIREWALL DECODE SUCCESS: CÓDIGO CORRETO//', 0);
    pularLinha(el, 999);
    jogo.tentativas = 7;
    chatCyber(el, 1000);
    progressoVirus(1500);
    pularLinha(el, 1501);
    DataHora(2000);
    pularLinha(el, 2999);
    inserir(el, 'p', 'VOCÊ VENCEU!', 3000);
}

function respostaErrada(el){
    inserir(el, 'p', '//FIREWALL ERROR EXCEPTION: CÓDIGO INCORRETO//', 0);
    pularLinha(el, 999);
    chatCyber(el, 1000);
    progressoVirus(1500);
    pularLinha(el, 1501);
    DataHora(2000);
    pularLinha(el, 2999);
}

function descriptografando(tempo){
    setTimeout(() => {
        $('.virus-mensagem').insertAfter('.screen');
        $('.virus-bar-wraper').insertAfter('.screen');
        $('.virus-mensagem').hide();
        $('.virus-bar-wraper').hide();
        $('.game-screen').html('');
        $('.game-screen').append('<div class="decrypt"></div>');
        let el = $('.decrypt');
        inserir(el, 'p', 'DESCRIPTOGRAFANDO...', 0);
        
        let linha1 = gerarCriptografiaAleatoria();
        let linha2 = gerarCriptografiaAleatoria();
        let linha3 = gerarCriptografiaAleatoria();
        let linha4 = gerarCriptografiaAleatoria();
        let linha5 = gerarCriptografiaAleatoria();

        inserir(el, 'p', linha1, 1000);
        inserir(el, 'p', linha2, 1200);
        inserir(el, 'p', linha3, 1400);
        inserir(el, 'p', linha4, 1600);
        inserir(el, 'p', linha5, 1800);
        pularLinha(el, 1801);

    }, tempo);
}

// Função para gerar uma criptografia aleatória de 50 caracteres
function gerarCriptografiaAleatoria() {
    // Defina o tamanho desejado da string
    const tamanho = 75;

    // Caracteres permitidos na criptografia
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let criptografia = '';
    for (let i = 0; i < tamanho; i++) {
        // Gera um número aleatório para selecionar um caractere da string de caracteres permitidos
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        criptografia += caracteresPermitidos.charAt(indiceAleatorio);
    }
    return criptografia;
}
