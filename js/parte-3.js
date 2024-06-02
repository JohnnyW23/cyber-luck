function verificador(){
    var gameScreen = $('.game-screen');
    let palpite;
    let delay = 0;

    $('#codigo').keyup(function(e) {

        if(e.which == 13){
    
            palpite = $('#codigo').val();

            if(palpite == '')
                return false;
            
            $('.codigo-wraper').html('<p style="color: white">' + '> ' + palpite + '</p>');

            if(jogo.tentativas == 6 && palpite == 'DOLPHIN'){
                intelDolphin(gameScreen, 1000);
                return;
            }

            jogo.tentativas--;

            if(jogo.tentativas == 0)
                delay = 4000
            
            /* Descriptografar dura 2,8 segundos, na realidade */
            descriptografando(1000);

            if(palpite == jogo.senha){
                jogo.vitoria = true;

                setTimeout(() => {
                    respostaCerta(gameScreen);
                    jogarNovamente(4000)

                }, 3800 + delay);

            }else{

                setTimeout(() => {
                    respostaErrada(gameScreen);

                    if(jogo.tentativas > 0){
                        inputCodigo(gameScreen, 3000);

                    }else{
                        inserir(gameScreen, 'p', traducao.parte3[0], 3000);
                        if(controle.modo == 'ataque'){
                            setTimeout(() => {
                                gameScreen.append('<br><p>SISTEMA DE ' + jogo.nome + ' REESTABELECIDO. DELETANDO AMEAÇAS RESTANTES.<p>')
                            }, 3500);
                        }else{
                            setTimeout(() => {
                                gameScreen.append('<br><p>SISTEMA DE ' + jogo.nome + ' INFECTADO. ' + hacker.nome + ' EXTRAINDO TODOS OS DADOS DO SERVIDOR.<p>')
                            }, 3500);
                        }
                        jogarNovamente(4000);
                    }
                    
                }, 3800 + delay);
            }
        }
    });
}


function jogarNovamente(tempo){
    setTimeout(() => {
        $('.game-screen').append('<br>');
        $('.game-screen').append('<button id="novo-jogo" style="color: ' + paleta.selected + '; border: 2px solid ' + paleta.selected + '">' + traducao.parte3[1] + '</button>');
        scrollMax();
        $('#novo-jogo').click(() => {
            $('.codigo-cascata').remove();
            $('.game-screen').html('');
            $('.screen > img').remove();
            animacoes.caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&*';
            controle.modo = null;
            $('.modo-wraper').fadeIn(250);
        })

    }, tempo);
}

function respostaCerta(el){
    $('.virus-state').html(traducao.parte3[2])
    inserir(el, 'p', traducao.parte3[3], 0);
    pularLinha(el, 999);
    jogo.tentativas = 7;
    chatCyber(el, 1000);
    setTimeout(() => {
        if(controle.modo == 'ataque'){
            animacaoClown(true);
            animacoes.caracteres = '☠️☠️☠️'

        }else{
            animacoes.caracteres = '###'
        }
    }, 1000);
    progressoVirus(1500);
    if(controle.modo == 'ataque'){
        setTimeout(() => {
            el.append('<br><p>SISTEMA DE ' + jogo.nome + ' INFECTADO. EXTRAINDO TODOS OS DADOS DE SERVIDORES.<p>')
        }, 1502);
    }else{
        setTimeout(() => {
            el.append('<br><p>SISTEMA DE ' + jogo.nome + ' SEGURO. DELETANDO AMEAÇAS RESTANTES.<p>')
        }, 1502);
    }
    pularLinha(el, 1503);
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

// Função para gerar uma criptografia aleatória de 75 caracteres
function gerarCriptografiaAleatoria() {
    let tamanho = 75;

    let caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let criptografia = '';
    for(i = 0; i < tamanho; i++){
        let indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        criptografia += caracteresPermitidos.charAt(indiceAleatorio);
    }
    return criptografia;
}


// Insere imagens em uma lista em determinado elemento do site, e dando uma mesma classe pra essas imagens, e então chama uma função para animar
function inserirImg(el, imgList, classe, state){
    let tempo = 0
    for(i = 0; i < imgList.length + 1; i++){
        el.append(imgList[i]);
        let index = i
        setTimeout(() => {
            animarImg($(classe).eq(index), state)
        }, tempo);
        tempo += 150;
    }
}


// Anima imagens através de seus nomes de classe e index dentro destas classes. Atribui uma posição aleatória na tela e faz a imagem piscar
function animarImg(img, state, first=true){
    if(jogo.vitoria == state){
        let tempo;

        if(first){
            tempo = 0
            
        }else{
            tempo = numeroAleatorio(10, 15) * 100 + 700
        }
        
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
            animarImg(img, state, false)
        }, tempo);
    }
}


// Função específica para as imagens do palhaço. Insere e anima as imagens. O parâmetro state indica se a função é chamada em caso de vitória ao atacar ou derrota ao defender. Deve estar em conformidade com o atributo jogo.vitoria
function animacaoClown(state){
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
    '.clown-img', state);

    if(!caixaDeSom.musica.current.muted){
        caixaDeSom.sfx.clown.play();
    }
}