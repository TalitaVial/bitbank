import { cliente } from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new cliente("Talita" , 58626896488);

const contaCorrente1 = new contaCorrente(1001, cliente1);
contaCorrente1.depositar(520);



const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
