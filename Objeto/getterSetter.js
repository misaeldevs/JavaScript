const sequencia = {
    _valor: 1, // Convenção. Está se pretendendo mostrar para os desenvolvedores que esta é uma variável que se pretende usar apenas internamente.
    get valor(){ return this._valor++},
    set valor(valor) {
        if(valor > this.valor){
            this.valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)