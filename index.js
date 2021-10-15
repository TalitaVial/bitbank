import { cliente } from "./Cliente.js"
import { Diretor } from "./funcionarios/diretor.js"
import { Gerente } from "./funcionarios/gerente.js"
import { SistemaAutenticacao } from "./sistemaAutenticacao.js"

const diretor = new Diretor("Talita", 1000, 12568659877);
diretor.cadastrarSenha("123456")

const gerente = new Gerente ("Fofurete", 2000, 12578614522);

const estaLogado = SistemaAutenticacao.login(diretor, '123456');


console.log(estaLogado);