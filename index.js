import { cliente } from "./Cliente.js"
import { contaCorrente } from "./contas/ContaCorrente.js"
import { ContaPoupanca } from "./contas/ContaPoupanca.js";

const cliente1 = new cliente("Talita" , 58626896488);

const contaCorrente1 = new contaCorrente(cliente1, 1001);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);


const contaPoupanca = new ContaPoupanca(0,cliente1,1001);
contaPoupanca.depositar(50);
contaPoupanca.sacar(10);

console.log(contaCorrente1);
console.log(contaPoupanca);
