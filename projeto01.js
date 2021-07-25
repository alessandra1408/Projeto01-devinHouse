var form = document.querySelector("#form")
var inputItem = document.querySelector("#inputItem")
var checkbox = document.querySelector("#checkbox");
var itemRiscado = document.querySelectorAll(".normal");

var listaItens = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    adicionaItem(inputItem.value);
    armazenarNoLocal();
})

exibeLista();

function adicionaItem(txtItem) {
    if (txtItem) {

        document.querySelector("#divItens").innerHTML += `
        <div class="itens">
            <input type="checkbox" id="checkbox" class="normal">
            <span class="span">
            ${txtItem}
            </span>
            <input type="button" class="deleta" value="X">
        </div>
        `

        var itemExcluido = document.querySelectorAll(".deleta");
        var itemSpan = document.querySelector(".span");

        for (var i = 0; i < itemExcluido.length; i++) {

            itemExcluido[i].onclick = function () {
                var confirmacao = confirm("Deseja mesmo excluir?");
                if (confirmacao) {
                    this.parentNode.remove();
                }
                localStorage.setItem("lista", JSON.stringify(listaItens))
            }
        };

        var listaProvisoria = []

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

/* function riscaItem() {
    var itemSpan = document.querySelector(".span");
    for (var i = 0; i < itemSpan.length; i++) {

    }
} */