
var form = document.querySelector("#form");
/* var btnAdd = document.querySelector("#btnAdd");
 */var inputItem = document.getElementById("inputTxt");
var lista = document.querySelector("#lista");
var btnExclui = document.getElementById("btnExclui");
var divBotoes = document.querySelector("#divBotoes");
var novoBtnFeito;
var novoItem;
var novoBtnExcluir;


var itensDaLista = [];

/* btnAdd.addEventListener("click", adicionarLocal);
 */

btnExclui.addEventListener("click", function (event) {
    excluiLista();
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    salvarLista(inputItem.value);
    /* criarBotoes(); */
});


mostraLista();

/* function adicionarLocal() {
    //TODO: Adicionar item no localStorage
    console.log("Entrou na Local");
} */

function salvarLista(txtItem) {
    var optDefault = document.getElementById("optDefault");
    if (txtItem) {
        if (optDefault) {
            lista.remove(optDefault);
            console.log("Removeu o 1o");
        }
        console.log("Entrou na Lista");
        novoItem = document.createElement("option");
        novoItem.innerHTML = txtItem;
        novoItem.value = txtItem;
        lista.appendChild(novoItem);
        itensDaLista.push(txtItem);
        inputItem.value = "";
        inputItem.focus();
        criarBotoes();

        localStorage.setItem("lista", JSON.stringify(itensDaLista))

        console.log("leu tudo");

        return novoItem;
    }
    else {
        console.log("Favor inserir um item")
    }
    console.log(txtItem);

}

function criarBotoes() {

    novoBtnFeito = document.createElement("button");
    novoBtnFeito.innerHTML = "✅";
    novoBtnFeito.value = "✅";
    novoItem.setAttribute("id", "btnFeito")
    novoItem.classList.add("optNormal");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    divBotoes.appendChild(novoBtnFeito);

    novoBtnExcluir = document.createElement("button");
    novoBtnExcluir.innerHTML = "❌";
    novoBtnExcluir.value = "❌";
    divBotoes.appendChild(novoBtnExcluir);

    return novoBtnFeito;
}

function mostraLista() {
    var listaLocalStorage = JSON.parse(localStorage.getItem("lista"));
    console.log(listaLocalStorage);
    console.log(typeof listaLocalStorage)
    if (listaLocalStorage) {
        for (var i = 0; i < listaLocalStorage.length; i++) {
            salvarLista(listaLocalStorage[i]);
        }
    }
}

function efeitosBotoes() {
        novoItem.classList.remove("optNormal");
        novoItem.classList.add("optRiscado");
    }

function excluiLista() {
    localStorage.clear();
}
