
export class ContaPoupanca{
  constructor(saldoInicial,cliente,agencia){
      this._saldo = saldoInicial;
      this._cliente = cliente;
      this._agencia = agencia;
  }

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