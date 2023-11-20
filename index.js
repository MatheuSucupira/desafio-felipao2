class Player {
    constructor(){
        this.name = "Estranho"
        this.type = "Ninja"
        this.age = 24
    }

    ataque() {
        if (this.type === "Mago") {
            console.log("-----------------")
            console.log(`o ${this.type} atacou usando Magia`)
            console.log("-----------------")
        }else if (this.type === "Guerreiro") {
            console.log("-----------------")
            console.log(`o ${this.type} atacou usando Espada`)
            console.log("-----------------")
        }else if (this.type === "Monge") {
            console.log("-----------------")
            console.log(`o ${this.type} atacou usando Artes Marciais`)
            console.log("-----------------")
        }else if (this.type === "Ninja") {
            console.log("-----------------")
            console.log(`o ${this.type} atacou usando Shurikens`)
            console.log("-----------------")
        }else {
            console.log("**********************")
            console.log("Houve um Erro! Não existe um tipo de personagem")
            console.log("**********************")
        }
    }
}

let player = new Player()

player.ataque()