const gridElement = document.querySelector("div#grid");

for (let index = 0; index < 100; index++) {
    const squareElement = document.createElement("article");

    squareElement.classList.add("square");

    squareElement.append(index +1);
    squareElement.addEventListener("click", function(){
        squareElement.classList.add("active");
    });

    gridElement.appendChild(squareElement);
}

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
console.log("bombs", bombs);