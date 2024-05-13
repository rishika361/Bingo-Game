<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Url</title>
    <link rel="stylesheet" href="style_admin_2.css">
     <link rel="stylesheet" type="text/css" href="header.css">
      <link rel="stylesheet" type="text/css" href="footer.css">
      <link rel="shortcut icon" href="image/topimg.jpg">

    
    <script src="https://kit.fontawesome.com/906fa1413c.js" crossorigin="anonymous"></script>
</head>
<body>

 <div id="header">
    <?php
     include('header.html');
     include('connection.php');
     ?>
</div>


    <!-- Body -->
    <div class="container">
        <div class="left-image">
            <img src="image/left_img(admin2).png" alt="banner">
        </div>
        <div class="right-text">

            <div class="dis-link">
                <h2>Play Bingo Game With Your Friends</h2><br>
                <p>Share the virtual link to your Friends. They can play virtually Bingo on any device.</p><br>

                <h2>
                    <?php

                        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                            // This is the initial page load or a refresh

                            // Delete the previous token from the "Bingo" table
                            // $deleteQuery = "DELETE FROM Bingo";
                            // if (mysqli_query($conn, $deleteQuery)) {
                            //     echo "Previous token deleted successfully!";
                            // } else {
                            //     echo "Error deleting previous token: " . mysqli_error($conn);
                            // }
                        }

                        // Generate a random unique token for each player
                        $uniqueToken = bin2hex(random_bytes(16));

                        // Store the token in a PHP session variable
                        session_start();
                        $_SESSION["token"] = $uniqueToken;

                        // Create a unique link using the base URL and the token
                        $uniqueLink = "http://bingoquiz.infinityfreeapp.com/player.php?token=$uniqueToken";

                        // Output the unique link
                        echo "Virtual Game Link: <a href='$uniqueLink' target='_blank' >$uniqueLink</a>";

                         // SQL query to insert the token into the database
                         $insertQuery = "INSERT INTO Bingo (token) VALUES ('$uniqueToken')";

                        // $insertQuery="INSERT INTO BingoNumbers (token) VALUES ('$uniqueToken')";

                        // Execute the SQL query
                        // if (mysqli_query($conn, $insertQuery)) {
                        //     echo "Token inserted successfully!";
                        // } else {
                        //     echo "Error inserting token: " . mysqli_error($conn);
                        // }

                        // Close the database connection
                        mysqli_close($conn);
                    ?>
                </h2><br>
                <p>Everyone who wants to play this game click on the link and enjoy the game. Everyone gets the random different bingo card each time.</p><br>
                <p>But It's possible that two player will get the same bingo card. then you need to just click on <span style="color: red;">reset card</span> button.</p>
            </div>

            <a href="admin_3.php"><button class="button">
                <span>Start Game </span>
            </button></a>
        </div>
    </div>

   <div id="footer">
    <?php include('footer.html'); ?>
    </div>
    <div id="footer">
   <!--  
   <footer>
        <div class="footer-content">
            <p class="copyright">© 2023 Bingo Game. All rights reserved.</p>
        </div>
    </footer>    </div>-->



    <script src="header.js"></script>
    
</body>
</html>