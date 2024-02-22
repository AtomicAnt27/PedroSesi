
function muda_cardapio(n) {
    var cardapios = document.querySelectorAll('.cardapio');

    cardapios.forEach(cardapio => {
        cardapio.classList.add('hidden');
    });

    cardapios[n].classList.remove('hidden');
}


function aparece_cardapio(n) {
    var cardapios = document.querySelectorAll('.content');

    cardapios.forEach(cardapio => {
        cardapio.classList.add('hidden');
    });

    cardapios[n].classList.remove('hidden');
}