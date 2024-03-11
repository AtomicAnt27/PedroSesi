function adicionarItem() {
    var nome = document.getElementById("nome");
    var valor = document.getElementById("valor");
    var quantidade = document.getElementById("quantidade");

    if(!nome || !valor || !quantidade){
        alert("Preencha todos os campos!")
        return;
    }

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
}