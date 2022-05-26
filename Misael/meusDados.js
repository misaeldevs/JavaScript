const meusDados = objeto => objeto({ ch, vl })
const primeiroNome = nome => nome('Misael')
const primeiraLetra = letra => letra[0]

new Promise(function(resolve) {
        resolve({
            nome: 'Misael',
            sobrenome: 'Pereira de Oliveira',
            idade: 39,
            estado_civil: 'solteiro',
            endereco: {
                logradouro: 'Avenida Francisco José da Fonseca',
                numero: 450,
                complemento: 'Bloco 05, Apto 303',
                bairro: 'São Conrado',
                cidade: 'Aracaju',
                estado: 'Sergipe'
            },
            filiacao: {
                pai: 'José Jacinto de Oliveira',
                mae: 'Helena Pereira de Jesus'
            },
            naturalidade: 'Buerarema-BA',
            RG: '3.054.203 - 0',
            CPF: '799.862.185-00',
            profissao: 'Funcionário Público',
            funcao: 'Assistente de Gestão Administrativo II',
            salario: 3.248,
            formacao: {
                graduacao_1: 'Superior Completo em Gestão Ambiental',
                graduacao_2: 'CST / Curso Superior de Tecnologia em Análise e Desenvolvimento de Sitemas'
            }
        })

    })
    .then(console.log)

new Promise(function(resolve) {
        resolve('Misael')
    })
    //.then(primeiroNome)
    .then(primeiraLetra)
    .then(console.log)