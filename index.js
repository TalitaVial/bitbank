import { cliente } from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js"

const cliente1 = new cliente("Talita" , 58626896488);

const cliente2 = new cliente("Pepinha", 58973452236);
console.log(cliente2.cpf);

const contaCorrente1 = new contaCorrente(1001, cliente1);
contaCorrente1.depositar(520);
console.log(contaCorrente1);
console.log("\n\n")


const contaCorrente2 = new contaCorrente(1002, cliente2);
console.log(contaCorrente2);

contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente2);
console.log(contaCorrente1);