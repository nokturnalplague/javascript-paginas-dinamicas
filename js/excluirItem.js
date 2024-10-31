import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados")

const excluirItem = (elemento) => { //arrow function anonima, serve para definir mais especificamente o escopo da função
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    } 
}

export { excluirItem }; //chaves = poderia ser exportado mais de uma função, recomendado para isso