const moduloA = require("../../moduloA.js")
console.log(moduloA.ola)

const saudacao = require("saudacao")
console.log(saudacao.ola)

const texto = require("./PastaC")
console.log(texto.ola2)

const http = require("http")
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)