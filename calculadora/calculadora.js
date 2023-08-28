function calculadora () {
    const operacao = Number(prompt('Escolha a Operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potencoação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação Invalida');
        calculadora();
    }else { 
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;
    
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOp()
        }
        function subtração() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOp()
        }    
        function multiplicação() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOp()
        }    
        function divisãoreal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOp()
        }
        function divisaointeira() {
            resultado = n1 % n2;
            alert(`${n1} % ${n2} = ${resultado}`)
            novaOp()
        }
        function potenciação() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
            novaOp()
        }
        function novaOp() {
            let opcao = prompt ('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2){
                alert("Até mais e Obrigado!")
            } else {
                alert('Digite uma Opção Válida!')
                novaOp()
            }
        }
    
    
        if (operacao == 5) {
            divisaointeira ();
        }  else if (operacao == 2) {
            subtração();
        }  else if (operacao == 3) {
            multiplicação();
        }  else if (operacao == 4) {
            divisãoreal();
        }  else if (operacao == 1) {
            soma();
        }  else if (operacao == 6) {
            potenciação();
        }  
    }
    

   

}


calculadora();