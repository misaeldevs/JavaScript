/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário.*/

function areaTriangulo(base, altura){
    return (base * altura).toFixed(2)
}
console.log(areaTriangulo(8, 7.7))