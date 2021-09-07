export class contaCorrente {
  agencia;
  cliente;


  _saldo = 0;

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor){
    if(valor <= 0) return; //retorno antes para facilitar a leitura do codigo nessa caso as chaves são opcionais na sintaxe

    this._saldo += valor;
  }

  transferir(valor, conta){
    let valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

}