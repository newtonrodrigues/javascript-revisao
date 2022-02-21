// var veiculo = /** @class */ (function () {
 //   function veiculo() {
 //       this.cor = "Azul";
//        this.placa = "XPTO-0253";
//    }
 //   veiculo.prototype.acelerando = function () {
 //       for (var index = 1; index < 6; index++) {
 //           console.log("Marcha " + index);
//        }
//    };
  //  return veiculo;
//}());
//var carro = new veiculo();
//carro.acelerando();
//console.log(carro.placa); 
 

var nome = "Newton Rodrigues"
var lista = []

function imp(texto) {
    for (let index = 0; index < texto.length; index++) {
        var element = texto[index]
        lista.push(element)
        
        console.log(element)
    }     
}
imp(nome)
console.log(lista)

/* for (let index = 0; index <= 100; index++) {
    console.log(index)
    
} */
/* function retangulo(b, a) {
        return console.log(b * a)
     
}
retangulo(4,3) */

