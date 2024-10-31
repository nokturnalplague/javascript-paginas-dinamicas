import { adicionarItem } from "./js/adicionarItem.js"; //importa a função
import { verificarListaComprados } from "./js/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem); //primeiro valor é o evento, segundo valor é o que vai acontecer

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);