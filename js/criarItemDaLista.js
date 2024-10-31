import { verificarListaComprados } from "./verificarListaComprados.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";
import { gerarData } from "./gerarData.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function criarItemDaLista(item) {

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container"); //acesa a lista de classes do item e adiciona uma nova

    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox"; //definir um atributo
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id); //também define um id, mas pegando de outra variável

    checkboxLabel.addEventListener("click", function (evento){ //"evento", função || criação de função anonima - sem nome - útil para funções que não serão reutilizadas || parâmetro evento vem automaticamente
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox"); //currentTarget = elemento atual
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo"); //closest = o li mais próximo do label

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through"; //adiciona estilo ao itemTitulo
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }

        verificarListaComprados(listaComprados);
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item; //adiciona o valor do campo de digitação
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "./img/delete.svg"; //adiciona a imagem à tag img criada
    imagemRemover.alt = "Deletar"; //adiciona o alt da tag img
    
    botaoRemover.addEventListener("click", function() { //precisa ser colocado antes do appendChild | segundo parametro do eventListener deve ser uma função de callback - função de retorno, função declarada antes de uma função | se colocasse o excluirItem diretamente ia executar mesmo sem clicar
        excluirItem(itemDaLista);
    });

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);
    
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "./img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function(){
        editarItem(itemDaLista);
    })
    
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    
    itemData.classList.add("texto-data");
    itemData.innerText = gerarData();
    itemDaLista.appendChild(containerItemLista); //tornar a div como elemento filho do li
    
    itemDaLista.appendChild(itemData);

    return itemDaLista; //retorna o li que foi gerado pela função para usar na adicionarItem
}