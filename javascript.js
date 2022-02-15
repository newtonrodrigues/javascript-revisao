
    function exibirNome(){
        
        var nome = prompt("Digite seu nome: ")
        alert("O nome digitado foi: " + nome)   
        document.getElementById("textoNome").innerHTML =
         `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer!</p>`     
       // `Olá, ${nome}! É um prazer te conhecer!`
    }
    contador = 50
    function botaoUm(){
        
        //var toques = document.getElementById("textoNome") += 1
        document.getElementById("textoNome").innerText = contador++
    }

    function botaoDois(){
        document.getElementById("textoNome").innerText = new Date
    }

    function botaoTres(){
        var num1 = prompt("Digite o primeiro número: ")
        var num2 = prompt("Digite o segundo número: ")
         var res = (parseInt(num1) + parseInt(num2))
        document.getElementById("textoNome").innerText = res

        }



        verao = [
            "Janeiro",
            "Fevereiro",
            "Março"
        ]
        inverno = [
            "Dezembro",
            "Novembro",
            "Outubro"
        ]


    botaoQuatro = () => {
       // document.getElementById("textoNome").innerText = "Você clicou no botão 4."
        var res = prompt("Digite qual o mês da estação que deseja saber: ")
        /*  if (res.toUpperCase() == "MARÇO" || res == "ABRIL" || res == "MAIO" || res == "JUNHO") {
            alert("A estação que pertence o mês digitado é: Outono.") }
 */
            

           /*  switch (res.toUpperCase()) {
                case "MARÇO": case "ABRIL": case "MAIO": case "JUNHO":
                    alert("A estação é outono.")
                    break;
                case "JULHO":
                    alert("A estação é inverno")
                    break
                default: alert("Necessário informar um mês para correspondência!")
                    break;
            } */
        }

       
        

    
    /* function exibirNome(){
        alert(nome)
    }

    //abrirAlerta()

    function exibirNome(){
        
        return nome
    } */