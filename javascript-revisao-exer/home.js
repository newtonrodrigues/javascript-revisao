var bigBrother = {
    rede: "TV Globo",
    dataInicio: "06/01/2022",
    dataFim: "02/05/2022",
    edicao: 22,
    patrocinadores: [
        "Coca-Cola",
        "Bradesco",
        "Petrobrás"
    ],
    participantes: [
        {
            nome: "Rafa Aquino",
            idade: 22,
            filhos: [
                "Godinho",
                "Totó"
            ]
        },
        {
            nome: "Léo",
            idade: 21,
            filhos: [
                "Maria Júlia"
            ]

        }
    ]
}
console.log(bigBrother)
console.log(bigBrother.participantes[0].filhos[0])

var cores = [
    "blue",
    "red",
    "pink",
    "black",
    "orange"
]
console.log(cores[0])

function mudarCor(){
    var res = parseInt(document.getElementById("numero").value)
    var color = cores[res]
     //pega o array na 
    //posição digitada pelo usuário, armazena em uma variável convertida em int
    //e a utiliza como index do array de cores. Esse indíce do array será armazenado
    //em outra variável. Que será exibida na tela. 
    /* for (let index = 0; index < cores.length; index++) {
        console.log(cores[index])
    } */
    /* switch (res) {
        case 1: "blue"
            break;
        case 2: "red"
            break;
        case 3: "pink"
            break;
        case 4: "black"
            break;
        case 5: "orange"
            break;
        default: console.log("Necessário digitar um valor: ")
        break; */
        document.getElementById("area").style.backgroundColor = color
    //}
}
