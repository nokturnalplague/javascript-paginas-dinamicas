const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia(lista) {
    if (lista.querySelectorAll("li").length === 0) { //seleciona todas as vezes que aparecer um li dentro da lista e reúne dentro de outra lista que, sendo vazia, vai exibir a mensagem
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}