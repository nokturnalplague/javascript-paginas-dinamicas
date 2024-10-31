import { gerarData } from "./gerarData.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o nome do novo item: "); //prompt que a pessoa digite um novo valor que será armazenado na variável

    if (novoItem !== null && novoItem.trim() !== "") { //se tiver algo no campo || trim = remove os espaços e depois verifica se não está em branco
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;
        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through"
        }

        const dataDeCriacao = elemento.querySelector(".texto-data");
        dataDeCriacao.textContent = gerarData();
    } else {
        alert("Por favor, insira um item.")
    }
}