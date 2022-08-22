let numberOfCards;
function start() {
    numberOfCards = prompt("Olá, esse é o jogo da memória dos parrots.\nPor Favor,digite o número de cartas que deseja para iniciar:\n(Obs.:o número de cartas deve ser um número par de 4 até 14 e digitado com caracteres numéricos)");
    if (numberOfCards % 2 == 0 && numberOfCards >= 4 && numberOfCards <= 14) {
        alert ("Tenha um bom jogo!");
        dealCards(numberOfCards);
    }else {
        alert("Por favor,digite um número par de 4 até 14.")
        start();
    }
}

function dealCards(numberOfCards) {
    const cards = ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif","metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif","unicornparrot.gif","unicornparrot.gif"];
    let cardList = document.querySelector("ul");
    let cardsDealt = [];

    for (let i = 0; i < numberOfCards; i++) {
        cardsDealt.push(cards[i]); 
    }

    cardsDealt.sort(comparador);
    playmatSize(cardList,numberOfCards);

    for (let i = 0; i < numberOfCards; i++) {
        cardList.innerHTML += 
        `<li> 
            <div class="card">
                <div class="front">
                    <img src="./assets/front.png" alt="front">
                </div>
            </div>
        </li>`;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function playmatSize(cardList,numberOfCards){
    if (window.screen.width > 414) {
        cardList.style.width = `${132 * (numberOfCards/2)}px`;
    } else {
        cardList.style.width = "117px"
    }
}

start();