<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo Game</title>
    <link rel="stylesheet" href="style_player.css">
    <link rel="stylesheet" type="text/css" href="header.css">
      <link rel="stylesheet" type="text/css" href="footer.css">
      <link rel="shortcut icon" href="image/topimg.jpg">
    <script src="https://kit.fontawesome.com/906fa1413c.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
</head>
<body>

    <div id="header">
    <?php 
    include('header.html');
    include('connection.php'); 

    ?>
</div class="player-body">
    
    <div class="bingo-id">
        
        <?php
           // Start or resume the session
           session_start();

            if (!isset($_GET['token'])) {
                $uniqueToken = bin2hex(random_bytes(16));
            } else {
                $uniqueToken = $_GET['token'];
            }

             $checkPlayerQuery = "SELECT * FROM Bingo WHERE token = '$uniqueToken'";
            // $checkPlayerQuery = "SELECT * FROM BingoNumbers WHERE token = '$uniqueToken'";
            $result = mysqli_query($conn, $checkPlayerQuery);

            if (mysqli_num_rows($result) > 0) {
    
            $row = mysqli_fetch_assoc($result);
            $bingoId = $row['bingo_id'] + 1; 

              // Update the `bingoid` session
             $_SESSION['bingo_id'] = $bingoId;

             $updateBingoQuery = "UPDATE Bingo SET bingo_id = $bingoId WHERE token = '$uniqueToken'";
            // $updateBingoQuery = "UPDATE BingoNumbers SET bingo_id = $bingoId WHERE token = '$uniqueToken'";
    
            if (mysqli_query($conn, $updateBingoQuery)) {
       
            } else {
                echo "Error updating Bingo ID: " . mysqli_error($conn);
            }

            } else {
                // No player data with the same token found, insert a new player with a Bingo ID of 1
                $bingoId = 1;

                 $insertPlayerQuery = "INSERT INTO Bingo (token, bingo_id) VALUES ('$uniqueToken', $bingoId)";
                // $insertPlayerQuery = "INSERT INTO BingoNumbers (token, bingo_id) VALUES ('$uniqueToken', $bingoId)";

                if (mysqli_query($conn, $insertPlayerQuery)) {
                  
                  // Set the `bingoid` session
                   $_SESSION['bingo_id'] = $bingoId;
                } else {
                    echo "Error inserting player data: " . mysqli_error($conn);
                }
            }

            // Display the updated Bingo ID
            echo "Bingo card ID: " . $bingoId;

            // Close the database connection
            mysqli_close($conn);
        ?>
    </div>
    
    <div id="bingo-card-container">
        <div id="bingo-card" class="bingo-card">
            <table>
                <!-- Bingo card numbers will be generated here -->         
            </table>
        </div>

    </div>

    <div class="button-container">
    <button class="generate-button" id="generate-button">Play again</button>
    <button class="reset-button" id="reset-button">Reset </button>
    </div>

         <div id="footer">
    <?php include('footer.html'); ?>
</div>


    <script src="js_player.js"></script>
    <script src="header.js"></script>
</body>
</html>

