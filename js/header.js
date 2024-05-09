$(() => {
    $('#palette').click(function(e){
        if(!paleta.open){
            e.stopPropagation();
            $('.cores').slideToggle();
            paleta.open = true
        }
    })

    $('body').click(function(){
        if(paleta.open){
            $('.cores').slideToggle();
            paleta.open = false;
        }
    })

    $('#readme').click(function(){
        $('.sobre-jogo-wraper').fadeIn(250);
    })

    $('#close-button').click(function(){
        $('.sobre-jogo-wraper').fadeOut(250);
    })

    $('.cores li').click(function(){
        mudarCorTema($(this), $(this).attr('id'))
    })

    function mudarCorTema(el, id){
        let i = 0;

        while(i < paleta.cores.length){
            if(id == paleta.cores[i].id){
                $('.cores-selected').prependTo(el);
                $('html, body, input[type=text], #novo-jogo').css('color', paleta.cores[i].color);
                $('.loaded-bar').css('background-color', paleta.cores[i].loadedBarBGColor);
                $('#novo-jogo').css('border', '2px solid ' + paleta.cores[i].novoJogoBdColor);
                $('header').css('background-color', paleta.cores[i].headerBGColor);
                $('.screen').css('background', paleta.cores[i].screenBGColor);
                $('.cores').css('background-color', paleta.cores[i].coresBGColor);
                $('#palette').attr('src', 'assets/palette-' + i + '.svg');
                $('#readme').attr('src', 'assets/readme-' + i + '.svg');
                $('#github').attr('src', 'assets/github-' + i + '.svg');
                $('.sobre-jogo').css('border-color', paleta.cores[i].novoJogoBdColor);
                $('#close-button').css('border-color', paleta.cores[i].novoJogoBdColor);
                paleta.selected = paleta.cores[i].color;

                break
            }
            i++;
        }
    }
})