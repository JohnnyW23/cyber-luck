var vitoria;

function verificador(){
    console.log('A SENHA É ' + senha)
    let palpite;

    $('#codigo').keyup(function(e) {

        if(e.which == 13){
    
            palpite = $('#codigo').val();

            if(palpite == ''){
                return false;

            }else if(palpite == senha){
                vitoria = true;
                $('.codigo-wraper').html('<p style="color: white">' + palpite  + '</p>');

                setTimeout(() => {
                    $('.game-screen').html('');
                    $('.game-screen').append('PARABÉNS, VOCÊ GANHOU!!');
                }, 2000);

            }else{
                tentativas--;

                $('.codigo-wraper').html('<p style="color: white">' + palpite  + '</p>');

                setTimeout(() => {
                    $('.game-screen').html('');

                    if(tentativas > 0){
                        $('.game-screen').append('ERRADO!');
                        inputCodigo($('.game-screen'), 500);

                    }else{
                        vitoria = false
                        $('.game-screen').append('HAHAHA PERDEU!!');
                    }
                }, 2000);
            }
        }
    });
}