function animarHeader(){
    $('#palette, #palette').click(function(e){
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

    $('#readme, #readme').click(function(){
        animacoes.readme = true;
        $('.sobre-jogo-wraper').fadeIn(250);
        scrollMin($('.sobre-jogo'));
        $('body').css('overflow', 'hidden')
    })

    $('#close-button').click(function(){
        animacoes.readme = false;
        $('.sobre-jogo-wraper').fadeOut(250);
        $('body').css('overflow', 'auto')
    })

    $('.cores li').click(function(){
        mudarCorTema($(this), $(this).attr('id'))
    })

    function mudarCorTema(el, id){
        let i = 0;

        while(i < paleta.cores.length){
            if(id == paleta.cores[i].id){
                $('.cores-selected').prependTo(el);
                paleta.selected = paleta.cores[i].color;
                paleta.cascataSelected = paleta.cores[i].cascataColor;
                $('html, body, input[type=text], #novo-jogo, #iniciar').css('color', paleta.selected);
                $('.loaded-bar').css('background-color', paleta.selected);
                $('#novo-jogo, #iniciar').css('border', '2px solid ' + paleta.selected);
                $('header').css('background-color', paleta.cores[i].headerBGColor);
                $('.screen').css('background', paleta.cores[i].screenBGColor);
                $('.cores').css('background-color', paleta.cores[i].coresBGColor);
                $('#palette, #palette').attr('src', 'assets/palettes/palette-' + i + '.svg');
                $('#readme, #readme').attr('src', 'assets/readmes/readme-' + i + '.svg');
                $('#github, #github').attr('src', 'assets/githubs/github-' + i + '.svg');
                $('.sobre-jogo-wraper-3').css('border-color', paleta.selected);
                $('#close-button').css('border-color', paleta.selected);
                $('.instrucoes span').css('color', paleta.selected);
                $('.codigo-cascata').css('color', paleta.cascataSelected)

                break
            }
            i++;
        }
    }
}