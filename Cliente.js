export class cliente {
  get cpf(){
    return this._cpf;
  }

  constructor(nome, cpf){ // construtores são para inicializar os atributos 
    this.nome = nome 
    this._cpf = cpf
  }

}