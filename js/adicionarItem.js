import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) { //colocar export para usar em outro
    evento.preventDefault() //"previnir o padrão" = rendereiza o conteúdo do console sem atualizar a tela. por padrão, formulário atualiza a tela
    
    if (item.value.trim() === "") {
        alert("Por favor, insira um item.");
        return;
    };

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    item.value = "";
}