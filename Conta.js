export class Conta{
  
  constructor(saldoInicial,cliente,agencia){
      this._saldo = saldoInicial;
      this._cliente = cliente;
      this._agencia = agencia;
  
  }

  set cliente(novoCliente){
    if (novoCliente instanceof cliente){
      this._cliente = novoCliente;
      //verificação de instância 
    }
  }

  get cliente(){
    return this._cliente;
  }

  get saldo(){
    return this._saldo;
  }

  sacar(valor){
    let taxa = 1;
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
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