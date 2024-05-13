<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Title</title>
    <link rel="stylesheet" href="style_admin_1.css">
      <link rel="stylesheet" type="text/css" href="header.css">
    <!--<link rel="stylesheet" type="text/css" href="footer.css">-->
      <link rel="shortcut icon" href="image/topimg.jpg">  
    <script src="https://kit.fontawesome.com/906fa1413c.js" crossorigin="anonymous"></script>
</head>

<body>

   <div id="header">
    <?php include('header.html'); ?>
    </div>
    <div class="bingo-host">
        <div class="left_side">
            <h2 id="heading_1">1-75 Numbers Bingo</h2>
            <p id="para"> The most popular bingo game in the world.The numbers 1-75 are randomized in columns on a 5x5 grid. 1-75
                Bingo works brilliantly for small and large groups.You'll be playing bingo in minutes with the fastest
                and best bingo card generator in the world
                To get started, click on Next Step</p>
                
            <form id="form">
                    <h2 id="heading_2">Title</h2>
                    <input type="text" id="titleName" name="input"placeholder="Write a Title">   
        </div>
        <div class="right_side">
            <img src="image/right_image(admin1).jpeg" alt="bingoimage" id="img"
            width="600px" height="350px"><br>
        </div>
    </div>
    <div class="butt">
        <a href="admin_2.php"><button class="button" type="submit">
            <span>NEXT STEP </span>
        </button></a>
    </div>
        </form>
    
   <!-- <div id="footer">
        <?php include('footer.html'); ?>
    </div>-->
     
    <div id="footer">
    
   <footer>
        <div class="footer-content">
            <p class="copyright">© 2023 Bingo Game. All rights reserved.</p>
        </div>
    </footer>    </div>

   
   <script>
  const form = document.getElementById('form');
  const titleName = document.getElementById('titleName');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const titleNameValue = titleName.value;

    // Store the form data in localStorage
    localStorage.setItem('title-name', titleNameValue);

    // Redirect to the next page (admin_2.php)
    window.location.href = "admin_2.php";
  });
</script>
    <script src="header.js"></script>    
</body>
</html>