function verificador(){
    var gs = $('.game-screen');
    let palpite;
    let delay = 0;

    $('#codigo').keyup(function(e) {

        if(e.which == 13){
    
            palpite = $('#codigo').val();

            if(palpite == ''){
                return false;
            }

            $('.codigo-wraper').html('<p style="color: white">' + '> ' + palpite + '</p>');

            if(jogo.tentativas == 6 && palpite == 'DOLPHIN'){
                intelDolphin(gs, 1000);
                return;
            }

            jogo.tentativas--;

            if(jogo.tentativas == 0){
                delay = 4000
            }

            /* Descriptografar dura 2,8 segundos, na realidade */
            descriptografando(1000);

            if(palpite == jogo.senha){
                jogo.vitoria = true;
                animacoes.caracteres = '###'

                setTimeout(() => {
                    respostaCerta(gs);
                    jogarNovamente(4000)

                }, 3800 + delay);

            }else{

                setTimeout(() => {
                    respostaErrada(gs);

                    if(jogo.tentativas > 0){
                        inputCodigo(gs, 3000);

                    }else{
                        inserir(gs, 'p', traducao.parte3[0], 3000);
                        jogarNovamente(4000);
                    }
                    
                }, 3800 + delay);
            }
        }
    });
}

/* CRONOLOGIA DOS FATOS:
1 segundo: descriptografar - duração 2,8 segundos
3,8 segundos: Caso de vitória, derrota ou novo código - duração 3 segundos
7,8 segundos: Botão de novo jogo (1 segundo após a ação anterior)
Se for a última tentativa, à partir da descriptografia leva 4 segundos a mais
*/

function jogarNovamente(tempo){
    setTimeout(() => {
        $('.game-screen').append('<br>');
        $('.game-screen').append('<button id="novo-jogo" style="color: ' + paleta.selected + '; border: 2px solid ' + paleta.selected + '">' + traducao.parte3[1] + '</button>');
        scrollMax();
        $('#novo-jogo').click(() => {
            $('.codigo-cascata').remove();
            $('.game-screen').html('');
            $('.screen > img').remove();
            animacoes.caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&*'
            novoJogo();
        })

    }, tempo);
}

function respostaCerta(el){
    $('.virus-state').html(traducao.parte3[2])
    inserir(el, 'p', traducao.parte3[3], 0);
    pularLinha(el, 999);
    jogo.tentativas = 7;
    chatCyber(el, 1000);
    progressoVirus(1500);
    pularLinha(el, 1501);
    DataHora(2000);
    pularLinha(el, 2999);
    inserir(el, 'p', traducao.parte3[4], 3000);
}

function respostaErrada(el){
    inserir(el, 'p', traducao.parte3[5], 0);
    pularLinha(el, 999);
    chatCyber(el, 1000);
    progressoVirus(1500);
    pularLinha(el, 1501);
    DataHora(2000);
    pularLinha(el, 2499);

    if(jogo.tentativas == 5){
        inserir(el, 'p', traducao.parte3[6], 2500);
        pularLinha(el, 2999);
    }
}

function descriptografando(tempo){
    setTimeout(() => {
        $('.virus-mensagem').insertAfter('.screen');
        $('.virus-bar-wraper').insertAfter('.screen');
        $('.virus-mensagem').hide();
        $('.virus-bar-wraper').hide();
        $('.game-screen').html('<div class="decrypt"></div>');
        let el = $('.decrypt');
        inserir(el, 'p', traducao.parte3[7], 0);
        
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

        if(jogo.tentativas == 0){
            inserir(el, 'p', traducao.parte3[8], 2800);
            inserir(el, 'p', traducao.parte3[9], 2801);
            pularLinha(el, 2802)
        }
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


function inserirImg(el, imgList, classe, state, rounds){
    let tempo = 0
    for(i = 0; i < imgList.length + 1; i++){
        el.append(imgList[i]);
        let index = i
        setTimeout(() => {animarImg($(classe).eq(index), state, rounds)}, tempo);
        tempo += 150;
    }
}


function animarImg(img, state, rounds){
    if(jogo.vitoria == state){
        let tempo;

        if(rounds == 0)
            tempo = 0
        else
            tempo = numeroAleatorio(10, 15) * 100 + 700
        
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
            animarImg(img, state)
        }, tempo);
    }
}


function animacaoClown(){
    inserirImg($('.screen'), [
        '<img class="clown-img" src="assets/clown-1.jpg">',
        '<img class="clown-img" src="assets/clown-2.jpg">',
        '<img class="clown-img" src="assets/clown-3.jpg">',
        '<img class="clown-img" src="assets/clown-4.jpg">',
        '<img class="clown-img" src="assets/clown-1.jpg">',
        '<img class="clown-img" src="assets/clown-2.jpg">',
        '<img class="clown-img" src="assets/clown-3.jpg">',
        '<img class="clown-img" src="assets/clown-4.jpg">'
    ],
    '.clown-img', false, animacaoFotos.clown)
}