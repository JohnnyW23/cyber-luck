var vitoria;

function verificador(){
    let el = $('.game-screen');
    console.log('A SENHA É ' + senha)
    let palpite;

    $('#codigo').keyup(function(e) {

        if(e.which == 13){
    
            palpite = $('#codigo').val();


            if(palpite == ''){
                return false;
            }

            $('.codigo-wraper').html('<p style="color: white">' + palpite  + '</p>');
            descriptografando(1000);

            if(palpite == senha){
                vitoria = true;

                setTimeout(() => {
                    inserir(el, 'p', 'RESPOSTA CERTA!', 0);
                    pularLinha(el, 999);
                    progressoVirus(1000);
                    pularLinha(el, 1499);
                    DataHora(2000);
                    pularLinha(el, 2499);
                    inserir(el, 'p', 'PARABÉNS, VOCÊ GANHOU!', 3000);

                }, 3800);

            }else{
                tentativas--;

                setTimeout(() => {
                    inserir(el, 'p', 'RESPOSTA ERRADA!', 0);
                    pularLinha(el, 999);
                    progressoVirus(1000);
                    pularLinha(el, 1499);
                    DataHora(2000);
                    pularLinha(el, 2499);

                    if(tentativas > 0){
                        inputCodigo(el, 3000);

                    }else{
                        vitoria = false
                        inserir(el, 'p', 'HAHAHA, PERDEU! A SENHA ERA <span style="color: white">' + senha + '</span>', 3000);
                    }
                }, 3800);
            }
        }
    });
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

function respostaErrada(){

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
