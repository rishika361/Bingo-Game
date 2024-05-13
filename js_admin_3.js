
const startButton = document.getElementById("game-button");
const tableCells = document.querySelectorAll(".call-grid-manual td[id^='n_']");
const atCallInput = document.getElementById("check-call-input");
const countTable = document.querySelector(".count-table");
const previousButton = document.getElementById("popup-content");
const restartButton = document.getElementById("restart-game");
const viewCardButton = document.getElementById("check-card-button");

// Array to store previously called numbers
const previousCalls = [];

// Initialize the "At Call" counter
let atCallValue = 0;
atCallInput.value = atCallValue;

// Function to increase the "At Call" value
function increaseAtCall() {
    atCallValue++;
    atCallInput.value = atCallValue;
}

// Hide the "Previous" button initially
previousButton.style.display = "none";


function resetGame() {
    // Change the button's text to "Start Game"
    startButton.textContent = "Start Game";

    // Hide the "Previous" button
    previousButton.style.display = "none";

    // Clear the previousCalls array
    previousCalls.length = 0;

    tableCells.forEach(cell => {
        cell.style.backgroundColor = "";
        cell.classList.remove("called");
    });

        countTable.textContent = "";

        atCallValue = 0;
        atCallInput.value = atCallValue;
    
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

// Add a event listener
startButton.addEventListener("click", function () {

    increaseAtCall();

    startButton.textContent = "Next Call";

    previousButton.style.display = "block";

    const availableCells = [...tableCells].filter(cell => !cell.classList.contains("called"));

    //for view card
    // const cardModal = document.getElementById("cardModal");
    // cardModal.style.display = "block";
    // const bingoCard = document.getElementById("bingoCard");
    // bingoCard.textContent = "This is where your bingo card content goes.";

    if (availableCells.length > 0) {

        const randomIndex = Math.floor(Math.random() * availableCells.length);

        const randomCell = availableCells[randomIndex];

        randomCell.style.backgroundColor = "red";
        randomCell.classList.add("called"); 

        const calledNumber = parseInt(randomCell.textContent);

        previousCalls.push(calledNumber);

        let section = "";
        if (calledNumber >= 1 && calledNumber <= 15) {
            section = "Current Call : B - ";
        } else if (calledNumber >= 16 && calledNumber <= 30) {
            section = "Current Call : I - ";
        } else if (calledNumber >= 31 && calledNumber <= 45) {
            section = "Current Call : N - ";
        } else if (calledNumber >= 46 && calledNumber <= 60) {
            section = "Current Call : G - ";
        } else if (calledNumber >= 61 && calledNumber <= 75) {
            section = "Current Call : O - ";
        }

        countTable.textContent = section + calledNumber;
    } else {
        alert("No more moves You have");
    }
});




let callNumber = 0;

previousButton.addEventListener("click", function () {

    const modal = document.getElementById("myModal");

    const previousCallsElement = document.getElementById("previousCalls");

    previousCallsElement.innerHTML = "";

        for (const calledNumber of previousCalls) {
            let section = "";
            if (calledNumber >= 1 && calledNumber <= 15) {
                section = "B";
            } else if (calledNumber >= 16 && calledNumber <= 30) {
                section = "I";
            } else if (calledNumber >= 31 && calledNumber <= 45) {
                section = "N";
            } else if (calledNumber >= 46 && calledNumber <= 60) {
                section = "G";
            } else if (calledNumber >= 61 && calledNumber <= 75) {
                section = "O";
            }

            callNumber++;
    
            const callData = `Call ${callNumber}: ${section}-${calledNumber}`;
    
            const calledNumberElement = document.createElement("p");
            calledNumberElement.textContent = callData;
            previousCallsElement.appendChild(calledNumberElement);
        }


    modal.style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("myModal");   
    modal.style.display = "none";
});

document.querySelector("#cardModal .close").addEventListener("click", function () {
    const cardModal = document.getElementById("cardModal");
    cardModal.style.display = "none";
});


window.addEventListener("click", function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("click", function (event) {
    const cardModal = document.getElementById("cardModal");
    if (event.target === cardModal) {
        cardModal.style.display = "none";
    }
});



function resetGame() {
    startButton.textContent = "Call Game";

    previousButton.style.display = "none";

    previousCalls.length = 0;

    countTable.textContent = "";

    tableCells.forEach(cell => {
        cell.style.backgroundColor = "";
        cell.classList.remove("called");
    });


    countTable.textContent = "";
    callNumber = 0;

    atCallValue = 0;
    atCallInput.value = atCallValue;

    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
restartButton.addEventListener("click", resetGame);
resetGame();







function generateBingoNumber(column, bingoCardID) {

    // Make an AJAX request to fetch data for the specified Bingo Card ID
    fetch('http://bingoquiz.infinityfreeapp.com/fetch_bingo.php', {
        method: 'POST',
        body: JSON.stringify({ bingoCardID: bingoCardID }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(data => {
        // Assuming data is an array of objects with B, I, N, G, O properties
        // You can update the bingo card based on the retrieved data
        // Example:
        const bingoCardTable = document.getElementById("bingoCardTable");
        // ... Update the table cells with the retrieved data ...
    })
    .catch(error => {
        console.error('Error fetching bingo data:', error);
    });
}

function generateBingoCard() {
    const bingoCardTable = document.getElementById("bingoCardTable");
    bingoCardTable.innerHTML = "";
    bingoCardTable.classList.add("bingo-card-table");

    const columnNames = ["B", "I", "N", "G", "O"];

    // Create the table headers (B, I, N, G, O)
    const headerRow = bingoCardTable.insertRow(0);
    for (let column = 0; column < 5; column++) {
        const headerCell = headerRow.insertCell(column);
        headerCell.textContent = columnNames[column];
    }

    // Create the 5x5 table with randomized numbers
    for (let row = 1; row <= 5; row++) {
        const newRow = bingoCardTable.insertRow(row);
        for (let column = 0; column < 5; column++) {
            const newCell = newRow.insertCell(column);
            // Generate and set content for each cell (e.g., "B-5")
            newCell.textContent = generateBingoNumber(column);
        }
    }
}

// ...

viewCardButton.addEventListener("click", function () {
    const cardModal = document.getElementById("cardModal");
    cardModal.style.display = "block";
    
    const bingoCardID = parseInt(document.getElementById("check-card-input").value);

    generateBingoNumber(bingoCardID);
});
