let numberOfCards,click,card1,card2,numberOfPlays = 0;

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
            <div class="card" onclick="cardClick(this)">
                <div class="front cardFace">
                    <img src="./assets/front.png" alt="front">
                </div>
                <div class="back cardFace">
                    <img src="./assets/${cardsDealt[i]}" alt="back">
                </div>
            </div>
        </li>`;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function playmatSize(cardList,numberOfCards){
    if (window.screen.width > 768) {
        cardList.style.width = `${132 * (numberOfCards/2)}px`;
    } else {
        cardList.style.width = "117px"
    }
}

function cardFlip(card){
    card.children[0].classList.add("flipped");
    card.children[1].classList.add("flipped");
}

function cardUnflip(){
    card1.children[0].classList.remove("flipped");
    card1.children[1].classList.remove("flipped");
    card2.children[0].classList.remove("flipped");
    card2.children[1].classList.remove("flipped");
}


function cardClick(card){
    const select = card.children[1].innerHTML;
    if (click === undefined){
        cardFlip(card);
        click = select;
        card1 = card;
        numberOfPlays++;
    }else if (click === select){
        cardFlip(card);
        click = undefined;
        numberOfPlays++;
        end();
    }else if (click !== select){
        cardFlip(card);
        card2 = card;
        setTimeout(cardUnflip,1000);
        click = undefined;
        numberOfPlays++;
    }
}

function end(){
    const cardsFlipped = document.querySelectorAll(".flipped");
    if (cardsFlipped.length === 2*numberOfCards) {
        alert("Você ganhou em " + numberOfPlays + " jogadas!");
    }
}

start();