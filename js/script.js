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

