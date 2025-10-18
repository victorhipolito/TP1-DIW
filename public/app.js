let colecao = [
    {
    "id":1,
    "imagem": "images/covers/cs2.png",
    "nome": "Counter Strike 2",
    "horas": 1998.6,
    "nota": 8.1,
    "console": "PC",
    "sobre": "Jogo de Tiro em Primeira Pessoa competitivo, o maior do cenário.",
    "analise": "Counter Strike 2 começou com uma grande expectativa de portar o maior sucesso econômico da Valve para sua engine mais recente, a Source 2. A verdade é que o jogo até hoje carece de muitas qualidades do seu antecessor e se mostra como um downgrade significativo em conteúdo, gameplay e desempenho."
    },
    {
    "id":2,
    "imagem": "images/covers/pokeblack.png",
    "nome": "Pokemon: Black Version",
    "horas": 41.2,
    "nota": 7.9,
    "console": "NDS",
    "sobre": "5a geração da série Pokemon, sendo essa a última a manter a estética de pixel art 2.5D.",
    "analise": "História incrível, progressão boa, apesar de muitos pokemon inúteis. O sistema de esações pode parecer inovador mas obriga o jogador a esperar meses para acessar algumas áreas."
    },
    {
    "id":3,
    "imagem": "images/covers/terraria.png",
    "nome": "Terraria",
    "horas": 597.8,
    "nota": 10.0,
    "console": "PC",
    "sobre": "Sandbox 2D, marco dos indies e um dos mais vendidos na história.",
    "analise": "Um dos melhores jogos que já joguei. Altamente dependente de wiki, mas isso é uma parte que influencia positivamente na experiência do jogo. Muito desafiante, mas muito recompensativo."
    },
    {
    "id":4,
    "imagem": "images/covers/sm64.png",
    "nome": "Super Mario 64",
    "horas": 6.7,
    "nota": 9.6,
    "console": "Nintendo Switch",
    "sobre": "Um dos primeiros Plataforma 3D, marcando o início da geração de jogos tridimensionais",
    "analise": "Um jogo atemporal. Os controles envelheceram muito bem, e toda a progressão e design de fases é uma aula de como se criar um jogo. Até os bugs e limitações da época se tornam ferramentas para uma comunidade cada vez maior de fãs e jogadores assíduos."
    },
    {
    "id":5,
    "imagem": "images/covers/celeste.png",
    "nome": "Celeste",
    "horas": 30.1,
    "nota": 10.0,
    "console": "PC",
    "sobre": "Jogo independente lançado em 2018, sendo um Plataforma 2D com bastante carisma.",
    "analise": "História emocionante com uma gameplay extremamente desafiante e divertida. De longe um dos melhores jogos plataformer independentes, com uma das melhores músicas do mundo dos games composta por Lena Raine."
    },
    {
    "id":6,
    "imagem": "images/covers/ftl.png",
    "nome": "FTL: Faster Than Light",
    "horas": 253.1,
    "nota": 8.6,
    "console": "PC",
    "sobre": "Roguelike situado no espaço, onde o jogador maneja recursos e tripulantes de uma nave cujo objetivo e derrotar a capitania rebelde.",
    "analise": "Um dos roguelikes mais viciantes. Gameplay muito sólida, mas acaba por depender muito de sorte, especialmente quando se quer fazer as inúmeras conquistas do jogo."
    }
]

// Função que pede a estrutura Json e retorna um objeto com os ids organizados em ordem de maior nota e mais horas jogadas
function organizar(tabela){
    let orgnota = []

    let orghoras = []

    for (let jogo of tabela)
    {
        if (jogo.id == 1)
        {
            orgnota.push(jogo.id)
            orghoras.push(jogo.id)
        }
        else
        {
            for (let n of orgnota)
            {
                if (jogo.nota <= tabela[n-1].nota && orgnota.indexOf(jogo.id) == -1)
                {
                    orgnota.splice(orgnota.indexOf(n),0,jogo.id)
                }
                else if (jogo.nota > tabela[n-1].nota && orgnota.indexOf(n) == orgnota.length - 1)
                {
                    orgnota.push(jogo.id)
                }
            }
            for (let h of orghoras)
            {
                if (jogo.horas <= tabela[h-1].horas && orghoras.indexOf(jogo.id) == -1)
                {
                    orghoras.splice(orghoras.indexOf(h),0,jogo.id)
                }
                else if (jogo.horas > tabela[h-1].horas && orghoras.indexOf(h) == orghoras.length - 1)
                {
                    orghoras.push(jogo.id)
                }
            }
        }
    }
    orgnota = orgnota.reverse()
    orghoras = orghoras.reverse()

    return {"mn":orgnota, "mh":orghoras}
}
