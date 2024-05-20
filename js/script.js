const gridElement = document.querySelector("div#grid");

function generateBombs(max) {
    const bombs = [];
    while (bombs.length < 16) {
        const bomb = Math.floor(Math.random() * max) +1;
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    return bombs;
}

const gridSize = 100;
const bombs = generateBombs(gridSize);

const playButton = document.getElementById("play-button");
playButton.addEventListener("click", function(){
    gridElement.innerHTML = '';
        for (let index = 0; index < gridSize; index++) {
        const squareElement = document.createElement("article");
        squareElement.classList.add("square");
        squareElement.append(index + 1);

        squareElement.addEventListener("click", function() {
            if (bombs.includes(index + 1)) {
                squareElement.classList.add("bomb");
                alert("Hai perso! Hai calpestato una bomba! Partita terminata.");
            } else {
                squareElement.classList.add("salvo");
            }
        });
        gridElement.appendChild(squareElement);
    }
});

