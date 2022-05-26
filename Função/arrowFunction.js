let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Este modelo só funciona se a função tiver apenas um parâmetro

console.log(dobro(Math.PI))

console.log("==================================================")

let ola = function () {
    return `Olá!`
}

ola = () => `Olá!`
ola = _ => `Olá!`

console.log(ola())