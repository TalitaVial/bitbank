import { cliente } from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js"

const cliente1 = new cliente();
cliente1.nome = "Talita";
cliente1.cpf = 58626896488; 

const cliente2 = new cliente();
cliente2.nome = "Pepinha";
cliente2.cpf = 58973452236;

const contaCorrente1 = new contaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;
contaCorrente1.depositar(520);
console.log(contaCorrente1);
console.log("\n\n")


const contaCorrente2 = new contaCorrente();
contaCorrente2.agencia = 1002;
contaCorrente2.cliente = cliente2;
console.log(contaCorrente2);

contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente2);
console.log(contaCorrente1.saldo);