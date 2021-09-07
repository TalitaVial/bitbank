import { cliente } from "./Cliente.js";
export class contaCorrente {
  agencia;
  _cliente;

  set cliente(novoCliente){
    if (novoCliente instanceof cliente){
      this._cliente = novoCliente;
    }
  }

  get cliente(){
    return this._cliente;
  }

  _saldo = 0;

  get saldo(){
    return this._saldo;
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