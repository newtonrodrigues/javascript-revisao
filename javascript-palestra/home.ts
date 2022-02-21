class veiculo {
    cor: string ="Azul"
    placa: string = "XPTO-0253"

    acelerando() {
        for (let index = 1; index < 6; index++) {
            console.log(`Marcha ${index}`)
        }
    }
}

const carro = new veiculo()
carro.acelerando()
alert(carro.placa)
