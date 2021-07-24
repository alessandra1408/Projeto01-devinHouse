
var form = document.querySelector("#form");
var inputItem = document.getElementById("inputTxt");
var lista = document.querySelector("#lista");
var btnExclui = document.getElementById("btnExclui");
var divBotoes = document.querySelector("#divBotoes");
var divBtnLi;
var novoBtnFeito;
var li;
var novoBtnExcluir;
var itensDaLista = [];

btnExclui.addEventListener("click", function (event) {
    excluiLista();
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    salvarLista(inputItem.value);
});

mostraLista();

function salvarLista(txtItem) {
    if (txtItem) {

        divBtnLi = document.createElement("div");
        divBtnLi.classList.add("divBtnLi");
        divBtnLi.innerHTML = `
        <input type="checkbox" >
        <li>${txtItem}</li>
        <input type="button" value="X">
        `
        lista.appendChild(divBtnLi);

        /* li = document.createElement("li");
        li.appendChild(document.createTextNode(txtItem));
        lista.appendChild(li);
        divBtnLi.appendChild(botaoFeito());
        divBtnLi.appendChild(botaoExclui()); */

        itensDaLista.push(txtItem);
        inputItem.value = "";
        inputItem.focus();

        localStorage.setItem("lista", JSON.stringify(itensDaLista))

        return li;
    }
    else {
        alert("Favor inserir um item")
    }
    console.log(txtItem);
}



function botaoFeito() {

    novoBtnFeito = document.createElement("button");
    novoBtnFeito.innerHTML = "✅";
    novoBtnFeito.value = "✅";
    /* li.setAttribute("id", "btnFeito")
    li.classList.add("optNormal"); */

    return novoBtnFeito;
}

function botaoExclui() {

    novoBtnExcluir = document.createElement("button");
    novoBtnExcluir.innerHTML = "❌";
    novoBtnExcluir.value = "❌";

    return novoBtnExcluir;
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

function efeitosBotoes(botao) {
        li.classList.remove("optNormal");
        li.classList.add("optRiscado");
}

function excluiLista() {
    localStorage.removeItem(divBtnLi);
}