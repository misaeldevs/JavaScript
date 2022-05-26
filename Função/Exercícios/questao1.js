// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function calculo(a, b, operacao){
if (operacao == "+")
return a + b
if (operacao == "-")
return a - b
if (operacao == "*")
return a * b
if (operacao == "/")
return a / b
}
console.log(calculo(5, 3, "+"))
