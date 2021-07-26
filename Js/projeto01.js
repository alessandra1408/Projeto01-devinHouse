var form = document.querySelector("#form")
var inputItem = document.querySelector("#inputItem")
var itemRiscado = document.querySelectorAll(".normal");
var btnExcluirLista = document.getElementById("btnExcluirLista");

var listaItens = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    adicionaItem(inputItem.value);
    armazenarNoLocal();
})

btnExcluirLista.addEventListener("click", function (event) {
    excluirLista()
    window.location.reload()
})

exibeLista();

function adicionaItem(txtItem) {
    if (txtItem) {

        document.querySelector("#divItens").innerHTML += `
        <div class="itens">
            <input type="checkbox" class="normal" onClick="checar(event)" >
            <span class="span">
            ${txtItem}
            </span>
            <input type="button" class="deleta" value="X">
        </div>
        `
        var itemExcluido = document.querySelectorAll(".deleta");

        for (var i = 0; i < itemExcluido.length; i++) {
            itemExcluido[i].onclick = function () {
                var confirmacao = confirm("Deseja mesmo excluir?");
                if (confirmacao) {
                    this.parentNode.remove();
                }
            }
        };

        /* nao consegui excluir o item span do localStorage :v
        só consegui tirar tudo. Remover um item não deu certo. */

        listaItens.push(txtItem);

        inputItem.innerHTML = "";
        inputItem.value = "";
        inputItem.focus();
    }
    else {
        alert("Por favor, insira uma valor");
    }
}

function armazenarNoLocal() {
    localStorage.setItem("lista", JSON.stringify(listaItens))
}

function exibeLista() {
    var itensLocalStorage = JSON.parse(localStorage.getItem("lista"));

    if (itensLocalStorage) {
        for (var i = 0; i < itensLocalStorage.length; i++) {
            adicionaItem(itensLocalStorage[i]);
        }
    }
    return itensLocalStorage;
}

function checar(event) {
    let target = event.target
    target.nextElementSibling.classList.toggle('riscar')
}

function excluirLista() {
    localStorage.clear();
}