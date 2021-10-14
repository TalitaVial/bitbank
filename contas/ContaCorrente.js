import { Conta } from "./Conta.js";
export class contaCorrente extends Conta{
  static numeroDeContas = 0; //atributo estático 

  constructor(cliente, agencia){
    super(0, cliente, agencia);
    contaCorrente.numeroDeContas += 1;
  }


  //sobreescrevendo o metodo da classe pai
  sacar(valor){
    let taxa = 1.1;
    return super._sacar(valor,taxa)
  }

}