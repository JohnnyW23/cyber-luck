function criarTraducao(){
    traducao = {}
    if(animacoes.idioma == 'portugues'){
        traducao.inicio = {
            cores: [
                'NOVA ERA RETRO',
                'FANTASMA DA NEVE',
                'VULCÃO DE TRÓIA',
                'LAMENTO DE SAKURA',
                'FIM DE HALLOWEEN',
                'TROVÃO DE FISCHER'
            ],
            sobre: '<h1>🎮 BOAS-VINDAS AO CYBER LUCK! 🎮</h1>\
            <br>\
            <p>Você está prestes a embarcar em uma emocionante aventura de códigos! Neste jogo, você terá <span>6 tentativas</span> para adivinhar um número dentro de um intervalo específico. Mas cuidado: se você não acertar, um hacker misterioso irá carregar um vírus em seu dispositivo, hehehe.</p>\
            <br>\
            <p>Como jogar:</p>\
            <p><span>1. Escolha um nível de dificuldade:</span> O jogo irá gerar um número aleatório dentro de um intervalo conforme o nível que você escolher.</p>\
            <p><span>2. Faça suas apostas:</span> Use suas 6 tentativas para adivinhar o número secreto. Digite um palpite e veja se você acertou!</p>\
            <p><span>3. Modo DOLPHIN:</span> Ah, sim! O código DOLPHIN é especial. Só pode ser acessado na primeira tentativa. O próprio DOLPHIN te dirá pelo que procurar. Preste atenção e veja se você consegue decifrar o mistério!</p>\
            <br>\
            <p>Lembre-se: <span>não há hackers de verdade aqui!</span> Este jogo é puramente para entretenimento e diversão. Portanto, relaxe, divirta-se e boa sorte!</p>\
            <br>\
            <p style="font-style: italic;">Nota: Este jogo não coleta informações pessoais nem invade dispositivos. É apenas uma brincadeira!</p>\
            <br>\
            <p>Músicas por:</p>\
            <p style="color: white">Ashot Danielyan</p>\
            <p style="color: white">ShtakalBerry Music</p>',
            principal: [
                '<p>iniciarJogo();</p>',
                'TEMAS DE CORES',
                'SOBRE O JOGO',
                'MEU GITHUB'
            ]
        },
        traducao.parte1 = [
            'IDENTIFIQUE-SE:',
            'MIN 4 CARACTERES',
            'MAX 20 CARACTERES',
            'APENAS LETRAS E NÚMEROS',
            'SELECIONE NÍVEL DE ACESSO AO SISTEMA:',
            'Boas-vindas,',
            'Executando algoritmo de verificação de segurança...',
            'Carregando módulos do firewall...',
            'In´´cializ#ndo~ //0P_SY5TEM//, p%r f4v0r agu%rd&.',
            '// PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO // PERIGO //'
        ],
        traducao.parte2 = [
            'Progresso do vírus no sistema:',
            '//PROCESSO CONCLUÍDO//',
            ['1 e 8', '1 e 16', '1 e 24'],
            ['TENTATIVAS: ', 'CÓDIGO:'],
            '//AVISO DO LOG// ',
            ' conectou ao sistema há 5 minutos.',
            '//FIREWALL DETECTOU CARREGAMENTO DE VÍRUS LETAL AO SISTEMA//',
            '//TENTATIVA DE NEUTRALIZAR VÍRUS EM ANDAMENTO//',
            'AVISO: FIREWALL SOBRECARREGADO. ENTRADA MANUAL NECESSÁRIA DE',
            'DETECTADO INTERVALO: CÓDIGO É UM NÚMERO INTEIRO ENTRE '
        ],
        traducao.parte3 = [
            'VOCÊ PERDEU!',
            'jogarNovamente();',
            '//PROCESSO INTERROMPIDO//',
            '//FIREWALL DECODE SUCCESS: CÓDIGO CORRETO//',
            'VOCÊ VENCEU!',
            '//FIREWALL ERROR EXCEPTION: CÓDIGO INCORRETO//',
            '//CÓDIGO DOLPHIN INDISPONÍVEL: TEMPO DE ATIVAÇÃO EXCEDIDO//',
            'DESCRIPTOGRAFANDO...',
            '//TEMPERATURA DO DISPOSITIVO ACIMA DO RECOMENDADO//',
            '//EXECUTANDO ANALISE FINAL DA SEGURANÇA DO DISPOSITIVO//'
        ],
        traducao.dolphin = [
            '//INTELIGENCIA D.O.L.P.H.I.N. ATIVADA//',
            '//EXECUTANDO DOLPHIN//',
            [
                'OLÁ, ',
                '. SEU DISPOSITIVO ESTÁ SOFRENDO UM GRAVE ATAQUE DE INJEÇÃO SQL. POR FAVOR, SELECIONE OS CÓDIGOS DIVERGENTES PARA COMPILAÇÃO. AH! PERMITA-ME LHE PERGUNTAR, ',
                'COMO VÃO SEUS PRIMOS?'
            ],
            'ITERAÇÃO ',
            'ESTOU DESCOMPILANDO OS CÓDIGOS. QUEIRA DEUS QUE VOCÊ TENHA ESCOLHIDO CERTO.',
            '//PROCESSO INTERROMPIDO//',
            'CARREGAMENTO DE MALWARE MAL-SUCEDIDO',
            'VOCÊ VENCEU O MODO DOLPHIN!',
            '//PROCESSO CONCLUÍDO//',
            'CÓDIGOS DIVERGENTES: ',
            'VOCÊ FALHOU, E AGORA IREI ME AUTO-DESTRUIR.',
            'CARREGAMENTO DE MALWARE BEM-SUCEDIDO',
            'VOCÊ PERDEU O MODO DOLPHIN',
            'CARREGAMENTO DE MALWARE BEM-SUCEDIDO // DOLPHIN EXCEPTION(E): DADOS INSUFICIENTES PARA COMPILAÇÃO'
        ]


    }else if(animacoes.idioma == 'ingles'){
        traducao.inicio = {
            cores: [
                'NEW ERA RETRO',
                'SNOW GHOST',
                'TROJAN MAGMA',
                "SAKURA'S SORROW",
                "HALLOWEEN'S END",
                "FISCHER'S THUNDER"
            ],
            sobre: "<h1>🎮 WELCOME TO CYBER LUCK! 🎮</h1>\
            <br>\
            <p>You are about to embark on an exciting code adventure! In this game, you will have <span>6 attempts</span> to guess a number within a specific range. But be careful: if you don't get it right, a mysterious hacker will load a virus onto your device, hehehe.</p>\
            <br>\
            <p>How to play:</p>\
            <p><span>1. Choose a difficulty level:</span> The game will generate a random number within a range according to the level you choose.</p>\
            <p><span>2. Make your bets:</span> Use your 6 attempts to guess the secret number. Enter a guess and see if you got it right!</p>\
            <p><span>3. DOLPHIN mode:</span> Ah, yes! The DOLPHIN code is special. It can only be accessed on the first attempt. DOLPHIN itself will tell you what to look for. Pay attention and see if you can decipher the mystery!</p>\
            <br>\
            <p>Remember: <span>there are no real hackers here!</span> This game is purely for entertainment and fun. So relax, have fun and good luck!</p>\
            <br>\
            <p style='font-style: italic;'>Note: This game does not collect personal information or hack devices. It's just a joke!</p>\
            <br>\
            <p>Musics by:</p>\
            <p style='color: white'>Ashot Danielyan</p>\
            <p style='color: white'>ShtakalBerry Music</p>",
            principal: [
                '<p>startGame();</p>',
                'COLOR THEMES',
                'ABOUT THE GAME',
                'MY GITHUB'
            ]
        },
        traducao.parte1 = [
            'IDENTIFY YOURSELF:',
            'MIN 4 CHARACTERS',
            'MAX 20 CHARACTERS',
            'ONLY LETTERS AND NUMBERS',
            'SELECT LEVEL OF ACCESS TO THE SYSTEM:',
            'Welcome,',
            'Running security check algorithm...',
            'Loading firewall modules...',
            'In´´tializ*ng~ //0P_SY5TEM//, pl3as& w%it',
            '// DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER // DANGER //'
        ],
        traducao.parte2 = [
            'Progress of the virus in the system:',
            '//PROCESS COMPLETED//',
            ['1 and 8', '1 and 16', '1 and 24'],
            ['ATTEMPTS: ', 'CODE:'],
            '//LOG WARNING// ',
            ' connected to the system 5 minutes ago.',
            '//FIREWALL DETECTED LETHAL VIRUS DEPLOY ON SYSTEM//',
            '//ATTEMPT TO NEUTRALIZE VIRUS IN PROGRESS//',
            'WARNING: FIREWALL OVERLOADED. MANUAL ENTRY REQUIRED FROM',
            'RANGE DETECTED: CODE IS AN INTEGER BETWEEN '
        ],
        traducao.parte3 = [
            'YOU LOSE!',
            'playAgain();',
            '//PROCESS INTERRUPTED//',
            '//FIREWALL DECODE SUCCESS: KEY IS CORRECT//',
            'YOU WIN!',
            '//FIREWALL ERROR EXCEPTION: KEY IS INCORRECT//',
            '//CODE DOLPHIN UNAVAILABLE: ACTIVATION TIME EXCEEDED//',
            'DECRYPTING...',
            '//DEVICE TEMPERATURE ABOVE RECOMMENDED//',
            '//RUNNING FINAL DEVICE SECURITY ANALYSIS//'
        ],
        traducao.dolphin = [
            '//INTEL D.O.L.P.H.I.N. ACTIVATED//',
            '//RUNNING DOLPHIN//',
            [
                'HELLO, ',
                '. YOUR DEVICE IS SUFFERING FROM A SEVERE SQL INJECTION ATTACK. PLEASE SELECT THE DEVIANT CODES FOR COMPILATION. OH! ALLOW ME TO ASK YOU, ',
                "WHAT'S IT LIKE TO REACH THE PRIME OF YOUR LIFE?"
            ],
            'ITERATION ',
            "I'M DECOMPILING THE CODES. MAY GOD WISH YOU'VE CHOSEN THE RIGHT ONES.",
            '//PROCESS INTERRUPTED//',
            'UNSUCCESSFUL MALWARE UPLOAD',
            'YOU WON DOLPHIN MODE!',
            '//PROCESS COMPLETED//',
            'DEVIANT CODES: ',
            'YOU FAILED, AND NOW I WILL SELF-DESTRUCT.',
            'SUCCESSFUL MALWARE UPLOAD',
            'YOU LOST DOLPHIN MODE',
            'SUCCESSFUL MALWARE UPDOAD // DOLPHIN EXCEPTION(E): INSUFFICIENT DATA FOR COMPILATION'
        ]
    }
}

function traduzirInicio(){
    for(i = 0; i < traducao.inicio.cores.length; i++){
        $('.cores ul').append('\
            <li id="cor' + i + '"><span>' + traducao.inicio.cores[i] + '</span></li>\
        ')
    }
    $('.cores ul li').eq(0).prepend('<span class="cores-selected">></span>')

    $('.sobre-jogo').append(traducao.inicio.sobre);
    
    $('#iniciar').append(traducao.inicio.principal[0]);
    $('.instrucoes ul').append('\
        <li><img id="palette" src="assets/palettes/palette-0.svg"><span>' + traducao.inicio.principal[1] +'</span></li>\
        <li><img id="readme" src="assets/readmes/readme-0.svg"><span>' + traducao.inicio.principal[2] + '</span></li>\
        <li><a href="https://github.com/JohnnyW23?tab=repositories" target="_blank"><img id="github" src="assets/githubs/github-0.svg"></a><span>' + traducao.inicio.principal[3] + '</span></li>\
    ')
}
