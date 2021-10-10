import { cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
export class contaCorrente extends Conta{
  static numeroDeContas = 0; //atributo estático 

  constructor(cliente, agencia){
    super(0, cliente, agencia);
    contaCorrente.numeroDeContas += 1;
  }

  sacar(valor){
    let taxa = 1.1;
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }

}