function somarPartidas(wins, loses) {
    return wins - loses
}

function patente() {
    let resultWins = somarPartidas(345, 101)
    if (resultWins < 11) {
        console.log(`O Herói tem ${resultWins} vitórias e está no nível [FERRO]`)
    }else if (resultWins > 10 & resultWins < 21) {
        console.log(`O Herói tem ${resultWins} vitórias e está no nível [BRONZE]`)
    }else if (resultWins > 20 & resultWins < 51) {
        console.log(`O Herói tem ${resultWins} vitórias e está no nível [PRATA]`)
    }else if (resultWins > 50 & resultWins < 81) {
        console.log(`O Herói tem ${resultWins} vitórias e está no nível [OURO]`)
    }else if (resultWins > 80 & resultWins < 91) {
        console.log(`O Herói tem ${resultWins} vitórias e está no nível [DIAMANTE]`)
    }else if (resultWins > 90 & resultWins < 101) {
        console.log(`O Herói tem ${resultWins} vitórias e está no nível [LENDÁRIO]`)
    }else {
        console.log(`O Herói tem ${resultWins} vitórias e está no nível [IMORTAL]`)
    }
}

patente()