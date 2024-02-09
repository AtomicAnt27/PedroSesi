window.onscroll = async () => {
    if (window.scrollY != 0)
    {
        document.querySelector('header').className = "header-box-shadow"
    } else {
        document.querySelector('header').className = ''
    }
}

var nomeGlobal;
var mensagemGlobal;

function conferirMensagemWhatsapp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    
    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
}

function enviarZap(){
    var numTelEster = "5"
    var numTelFonseca = "5"

    var linkWhatsApp = "https://wa.me/" + numTelEster + "?text=Nome:" + nomeGlobal + "-" + mensagemGlobal;
    window.open(linkWhatsApp, "_blank");
}