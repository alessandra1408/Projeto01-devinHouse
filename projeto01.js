var btnAdd = document.querySelector("#btnAdd")
var inputItem = document.querySelector("#inputItem")
var alerta = document.querySelector("#alerta")

btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    adicionaItem(inputItem.value);
})

function adicionaItem(txtItem) {
    if (txtItem) {
        document.querySelector("#divItens").innerHTML += `
        <div class="itens">
            <input type="checkbox" class="riscar">
            <span id="span">
            ${txtItem}
            </span>
            <input type="button" class="deletar" value="X">
        </div>
        `
        inputItem.innerHTML = "";
        inputItem.value = "";
        inputItem.focus();
    }
    else {
        alerta.innerHTML = "Por favor, insira uma valor"
    }
}