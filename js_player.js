// Function to generate a unique Bingo card for a player
function generateBingoCard(playerNumber) {
    const card = document.createElement("div");
    card.className = "bingo-card";

    const table = document.createElement("table");
    const columns = ["B", "I", "N", "G", "O"];
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];

    const columnNumbers = {};

    // Generate numbers for each column
    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
        const colLetter = columns[colIndex];
        const colRange = ranges[colIndex];

        const shuffledNumbers = shuffleArray(Array.from({ length: colRange[1] - colRange[0] + 1 }, (_, i) => i + colRange[0]));

        // Create an array of objects, each containing the number and letter
        const cellData = shuffledNumbers.map(number => ({ number, letter: colLetter }));

        columnNumbers[colLetter] = shuffledNumbers;
    }

     
    // Transpose the numbers to create the Bingo card
    const bingoNumbers = [];
    for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        const row = [];
        for (let colIndex = 0; colIndex < columns.length; colIndex++) {
            const colLetter = columns[colIndex];
            row.push(columnNumbers[colLetter].pop());

        }
        bingoNumbers.push(row);
    }

    // Create the Bingo card table with headers
    const headerRow = document.createElement("tr");
    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
        const col = document.createElement("th");
        col.textContent = columns[colIndex];
        headerRow.appendChild(col);
    }
    table.appendChild(headerRow);

    for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        const row = document.createElement("tr");
        for (let colIndex = 0; colIndex < columns.length; colIndex++) {
            const col = document.createElement("td");
            col.textContent = bingoNumbers[rowIndex][colIndex];
            row.appendChild(col);
        }
        table.appendChild(row);
    }

    card.appendChild(table);

    // Remove the previous card (if any)
    const previousCard = document.querySelector(".bingo-card");
    if (previousCard) {
        previousCard.remove();
    }

    return card;
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Function to generate a random number within a range (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the selected letter based on the selected number
function getSelectedLetter(selectedNumber, cellData) {
    const selectedCell = cellData.find(cell => cell.number === selectedNumber);
    return selectedCell ? selectedCell.letter : null;
}

//Initial generation of the Bingo card
const initialCard = generateBingoCard(1);
document.getElementById("bingo-card-container").appendChild(initialCard);
attachCellClickListeners(initialCard);


// Function to generate a new Bingo card for the same player
function generateNewCard() {
    // Generate a new Bingo card
    const bingoCardContainer = document.getElementById("bingo-card-container");
    const newCard = generateBingoCard(1);

    // Remove any existing card and add the new card
    bingoCardContainer.innerHTML = "";
    bingoCardContainer.appendChild(newCard);

    // Reattach event listeners to the new card
    attachCellClickListeners(newCard);
  }



// Function to attach click event listeners to Bingo numbers
function attachCellClickListeners(cellData, bingoCardId, initialCard) {
  const cells = document.querySelectorAll('.bingo-card table td');

  cells.forEach((cell) => {
    cell.addEventListener('click', function () {
    
      // Toggle the "selected" class
      cell.classList.toggle('selected');

      // Get the parent row and column index of the clicked cell
      const row = cell.parentElement;
      const colIndex = [...row.children].indexOf(cell);


      // Check if all cells in the row, column, and diagonals are selected
      const isRowFullySelected = [...row.querySelectorAll('td')].every((cell) => cell.classList.contains('selected'));
      const isColFullySelected = [...document.querySelectorAll(`.bingo-card table tr td:nth-child(${colIndex + 1})`)].every((cell) => cell.classList.contains('selected'));

      const diagonal1 = [...document.querySelectorAll('.bingo-card table tr')].map((row) => row.children[colIndex - row.rowIndex]);
      const diagonal2 = [...document.querySelectorAll('.bingo-card table tr')].map((row) => row.children[colIndex + row.rowIndex]);

      const isDiagonal1FullySelected = diagonal1.every((cell) => cell && cell.classList.contains('selected'));
      const isDiagonal2FullySelected = diagonal2.every((cell) => cell && cell.classList.contains('selected'));

      // Remove the strike-through effect from all rows, columns, and diagonals
      document.querySelectorAll('.strike-through').forEach((element) => {
        element.classList.remove('strike-through');
      });

      if (isRowFullySelected) {
        // Add the strike-through effect to the entire row
        row.classList.add('strike-through');
      }

      if (isColFullySelected) {
        // Add the strike-through effect to the entire column
        document.querySelectorAll(`.bingo-card table tr td:nth-child(${colIndex + 1})`).forEach((cell) => {
          cell.classList.add('strike-through');
        });
      }

      if (isDiagonal1FullySelected) {
        // Add the strike-through effect to the main diagonal
        diagonal1.forEach((cell) => {
          if (cell) {
            cell.parentElement.classList.add('strike-through');
          }
        });
      }

      if (isDiagonal2FullySelected) {
        // Add the strike-through effect to the secondary diagonal
        diagonal2.forEach((cell) => {
          if (cell) {
            cell.parentElement.classList.add('strike-through');
          }
        });
      }

      // Check for a win after each selection and strike if there's a win
      checkForWinAndStrike();

      // Send the selected number and letter to the server using AJAX
            const selectedNumber = cell.textContent.trim();
            // console.log("Selected Number:", selectedNumber);
            // alert(selectedNumber);

 let newdata = {
     playerId: selectedNumber,
    playernumber: selectedNumber
 };

 $.ajax({
     url: "http://bingoquiz.infinityfreeapp.com/add_number.php",
     method: "POST",
     data: JSON.stringify(newdata),
     contentType: "application/json",
     success: function(response) {
         console.log(response);
     },
     error: function(xhr, status, error) {
         alert(2);
         console.error("Error:", status, error);
     }
 });


// // Add an AJAX request to retrieve the token and bingo_id values
// $.ajax({
//     url: "http://bingoquiz.infinityfreeapp.com/get_token_bingoid.php",
//     method: "GET",
//     success: function(response) {
//         const token = response.token;
//         const bingo_id = response.bingo_id; 

//         // Log the received values
//         console.log("Token:", token);
//         console.log("Bingo ID:", bingo_id);

//         // Now you can use the retrieved token and bingo_id values in your AJAX request
//         let newdata = {
//             playerId: selectedNumber,
//             playernumber: selectedNumber,
//             token: token,
//             bingo_id: bingo_id 
//         };

//         // Send all the data in a single AJAX request to the server
//         $.ajax({
//             url: "http://bingoquiz.infinityfreeapp.com/add_number.php",
//             method: "POST",
//             data: JSON.stringify(newdata),
//             contentType: "application/json",
//             success: function(response) {
//                 console.log(response);
//             },
//             error: function(xhr, status, error) {
//                 alert(2);
//                 console.error("Error:", status, error);
//             }
//         });
//     },
//     error: function(xhr, status, error) {
//         console.error("Error:", status, error);
//     }
// });




    });
  });
}



 // Define the winning combinations (row, column, main diagonal, secondary diagonal)
const winningCombinations = [
    // Rows
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // Columns
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // Main Diagonal
    [0, 6, 12, 18, 24],
    // Secondary Diagonal
    [4, 8, 12, 16, 20]
];


// Function to check for a win and strike if there's a win
function checkForWinAndStrike() {
  const table = document.querySelector('.bingo-card table');
  const rows = table.querySelectorAll('tr');
  const cells = table.querySelectorAll('td');

  for (const combination of winningCombinations) {
    const isWin = combination.every((index) => cells[index].classList.contains('selected'));
    
    if (isWin) {
      // Strike the winning combination
      combination.forEach((index) => cells[index].classList.add('strike-through'));
    } 
  
  }
}


  // Function to handle the "Generate Bingo Card" button click
  document.getElementById("generate-button").addEventListener("click", function () {
    // Generate a new Bingo card for the same player
    generateNewCard();
  });


  // Function to handle the "Reset Selected Block" button click
  document.getElementById("reset-button").addEventListener("click", function () {
    // Remove the "selected" class from all Bingo numbers (reset the selected blocks)
    document.querySelectorAll(".bingo-card td.selected").forEach((cell) => {
      cell.classList.remove("selected");
    });

     // Remove the strike-through effect from all cells
    document.querySelectorAll(".bingo-card td.strike-through").forEach((cell) => {
        cell.classList.remove("strike-through");
    });

    // Remove the strike-through effect from all rows
  document.querySelectorAll(".bingo-card table tr").forEach((row) => {
    row.classList.remove("strike-through");
  });

  });

  


  