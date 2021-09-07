import { cliente } from "./Cliente.js";
export class contaCorrente {
  agencia;
  _cliente;

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

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente; //aqui dentro pode usar os acessores que temos na classe, nesse caso ele faz a verificação antes
  }


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