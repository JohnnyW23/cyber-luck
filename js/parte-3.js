var vitoria;

function verificador(){
    console.log('A SENHA É ' + senha)
    let palpite;

    $('#codigo').keyup(function(e) {
    
        console.log('Apertei qualquer tecla');

        if(e.which == 13){

            console.log('apertei enter')
    
            palpite = $('#codigo').val();

            if(palpite == ''){
                console.log('RESPOSTA VAZIA')
                return false;

            }else if(palpite == senha){
                console.log('RESPOSTA CERTA')
                vitoria = true;
                console.log('Reconheceu vitoria como true');
                $('.codigo-wraper').html('<p style="color: white">' + palpite  + '</p>');

                setTimeout(() => {
                    $('.game-screen').html('');
                    $('.game-screen').append('PARABÉNS, VOCÊ GANHOU!!');
                }, 2000);

            }else{
                console.log('RESPOSTA ERRADA')
                tentativas--;

                $('.codigo-wraper').html('<p style="color: white">' + palpite  + '</p>');

                if(tentativas > 0){
                    setTimeout(() => {
                        $('.game-screen').html('');
                        $('.game-screen').append('ERRADO!');
                        inputCodigo($('.game-screen'), 500);
                    }, 2000);
                    
                }else{
                    console.log('ACABARAM AS TENTATIVAS')
                    vitoria = false
                    console.log('Reconheceu vitoria como false')
                    $('.game-screen').html('');
                    $('.game-screen').append('HAHAHA PERDEU!!');
                }
            }
        }
    });
}