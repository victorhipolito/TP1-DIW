let colecao = [
    {
        "id": 1,
        "imagem": "cs2",
        "nome": "Counter Strike 2",
        "horas": 1998.6,
        "nota": 8.1,
        "console": "PC",
        "sobre": "Jogo de Tiro em Primeira Pessoa competitivo, o maior do cenário.",
        "analise": "Counter Strike 2 começou com uma grande expectativa de portar o maior sucesso econômico da Valve para sua engine mais recente, a Source 2. A verdade é que o jogo até hoje carece de muitas qualidades do seu antecessor e se mostra como um downgrade significativo em conteúdo, gameplay e desempenho."
    },
    {
        "id": 2,
        "imagem": "plb",
        "nome": "Pokemon: Black Version",
        "horas": 41.2,
        "nota": 7.9,
        "console": "NDS",
        "sobre": "5a geração da série Pokemon, sendo essa a última a manter a estética de pixel art 2.5D.",
        "analise": "História incrível, progressão boa, apesar de muitos pokemon inúteis. O sistema de esações pode parecer inovador mas obriga o jogador a esperar meses para acessar algumas áreas."
    },
    {
        "id": 3,
        "imagem": "terraria",
        "nome": "Terraria",
        "horas": 597.8,
        "nota": 10.0,
        "console": "PC",
        "sobre": "Sandbox 2D, marco dos indies e um dos mais vendidos na história.",
        "analise": "Um dos melhores jogos que já joguei. Altamente dependente de wiki, mas isso é uma parte que influencia positivamente na experiência do jogo. Muito desafiante, mas muito recompensativo."
    },
    {
        "id": 4,
        "imagem": "sm64",
        "nome": "Super Mario 64",
        "horas": 6.7,
        "nota": 9.6,
        "console": "Nintendo Switch",
        "sobre": "Um dos primeiros Plataforma 3D, marcando o início da geração de jogos tridimensionais",
        "analise": "Um jogo atemporal. Os controles envelheceram muito bem, e toda a progressão e design de fases é uma aula de como se criar um jogo. Até os bugs e limitações da época se tornam ferramentas para uma comunidade cada vez maior de fãs e jogadores assíduos."
    },
    {
        "id": 5,
        "imagem": "celeste",
        "nome": "Celeste",
        "horas": 30.1,
        "nota": 10.0,
        "console": "PC",
        "sobre": "Jogo independente lançado em 2018, sendo um Plataforma 2D com bastante carisma.",
        "analise": "História emocionante com uma gameplay extremamente desafiante e divertida. De longe um dos melhores jogos plataformer independentes, com uma das melhores músicas do mundo dos games composta por Lena Raine."
    },
    {
        "id": 6,
        "imagem": "ftl",
        "nome": "FTL: Faster Than Light",
        "horas": 253.1,
        "nota": 8.6,
        "console": "PC",
        "sobre": "Roguelike situado no espaço, onde o jogador maneja recursos e tripulantes de uma nave cujo objetivo é derrotar a capitania rebelde.",
        "analise": "Um dos roguelikes mais viciantes. Gameplay muito sólida, mas acaba por depender muito de sorte, especialmente quando se quer fazer as inúmeras conquistas do jogo."
    },
    {
        "id": 7,
        "imagem": "ccl",
        "nome": "Cookie Clicker",
        "horas": 1039.4,
        "nota": 8.5,
        "console": "PC",
        "sobre": "O pai do gênero clicker. Clique em biscoitos, produza mais e conquiste o universo.",
        "analise": "Cookie clicker começou como um jogo de navegador, e apesar de manter esse status, ele também se encontra na steam com uma quantidade surpreendente de avaliações positivas para um jogo de premissa tão simples. Dito isso, é impossível negar que esse jogo é extremamente viciante."
    },
    {
        "id": 8,
        "imagem": "pvz",
        "nome": "Plants vs Zombies - GOTY",
        "horas": 61.9,
        "nota": 9.9,
        "console": "PC",
        "sobre": "Tower defense clássico, onde você cultiva plantas para derrotar zumbis que estão invadindo seu jardim.",
        "analise": "Um dos melhores jogos do gênero Tower Defense. Loop de gameplay extremamente bem feito, música marcante e conteúdo extra muito divertido. Platinei em 2024, e frequentemente me vejo voltando para jogar esse jogo que até hoje carece de uma sequencia de qualidade, mas que prospera em projetos de fãs e influência na indústria dos jogos."
    },
    {
        "id": 9,
        "imagem": "pli",
        "nome": "Plague Inc.",
        "horas": 16.7,
        "nota": 6.8,
        "console": "PC",
        "sobre": "Jogo de estratégia no qual você cria e evolui sua doença a fim de dizimar a humanidade. Apesar de ter sido lançado em 2017, explodiu em popularidade durante a pandemia de COVID-19 por razões óbvias.",
        "analise": "O loop de gameplay é divertido, mas enjoa depois de poucas horas de jogo. Apesar de bastante conteúdo adicional, tudo parece mais do mesmo, se distanciando do gênero de estratégia e se assimilando a um 'roleplay' de pandemia global. O que mais salva no jogo definitivamente é o multiplayer cooperativo e versus que permite muita variedade de gameplay."
    },
    {
        "id": 10,
        "imagem": "dbd",
        "nome": "Dead by Daylight",
        "horas": 148.7,
        "nota": 6.1,
        "console": "PC",
        "sobre": "PvP assimétrico, no qual um jogador exerce o papel de 'assassino' enquanto outros 4 devem realizar uma série de objetivos para fugir do local onde estão.",
        "analise": "O fato de não existirem outros PvPs assimétricos que sobreviveram tanto tempo quanto Dead by Daylight demonstram que fazer e balancear um jogo desse gênero é extremamente difícil. Isso não justifica, entretanto, as inúmeras decisões questionáveis que a Behaviour, criadora do jogo, tomou durante os 9 anos de atividade do jogo. O loop de gameplay é muito bom quando você não joga contra joga contra jogadores que abusam dos inúmeros desbalanços na jogabiliade, que variam a cada atualização. "
    }
]

// Função que pede a estrutura Json e retorna um objeto com os ids organizados em ordem de maior nota e mais horas jogadas
function organizar(tabela) {
    let orgnota = []

    let orghoras = []

    for (let jogo of tabela) {
        if (jogo.id == 1) {
            orgnota.push(jogo.id)
            orghoras.push(jogo.id)
        }
        else {
            for (let n of orgnota) {
                if (jogo.nota <= tabela[n - 1].nota && orgnota.indexOf(jogo.id) == -1) {
                    orgnota.splice(orgnota.indexOf(n), 0, jogo.id)
                }
                else if (jogo.nota > tabela[n - 1].nota && orgnota.indexOf(n) == orgnota.length - 1) {
                    orgnota.push(jogo.id)
                }
            }
            for (let h of orghoras) {
                if (jogo.horas <= tabela[h - 1].horas && orghoras.indexOf(jogo.id) == -1) {
                    orghoras.splice(orghoras.indexOf(h), 0, jogo.id)
                }
                else if (jogo.horas > tabela[h - 1].horas && orghoras.indexOf(h) == orghoras.length - 1) {
                    orghoras.push(jogo.id)
                }
            }
        }
    }
    orgnota = orgnota.reverse()
    orghoras = orghoras.reverse()

    return { "mn": orgnota, "mh": orghoras }
}
