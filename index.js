import { cliente } from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new cliente("Talita" , 58626896488);

const contaCorrente1 = new contaCorrente(cliente1, 1001);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);



const contaPoupanca = new ContaPoupanca(50, 1001, cliente1);
console.log(contaCorrente1);
