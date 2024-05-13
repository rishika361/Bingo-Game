<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Call</title>
    <link rel="styleSheet" href="style_admin_3.css">
    <link rel="stylesheet" type="text/css" href="header.css">
    <link rel="stylesheet" type="text/css" href="footer.css">
    <link rel="shortcut icon" href="image/topimg.jpg">
    <script src="https://kit.fontawesome.com/906fa1413c.js" crossorigin="anonymous"></script>
</head>

<body>

    <?php 

    // // Define the Bingo Card ID you want to retrieve
    // $bingoCardID = $_POST['bingoCardID'];

    // // Prepare and execute a SQL query to fetch data for the given Bingo Card ID
    // $sql = "SELECT B, I, N, G, O FROM BingoNumbers WHERE bingo_id = ?";
    
    // $stmt = $mysqli->prepare($sql);
    // $stmt->bind_param("i", $bingoCardID);
    // $stmt->execute();
    // $stmt->bind_result($b, $i, $n, $g, $o);

    // // Fetch the result
    // $bingoNumbers = [];
    // while ($stmt->fetch()) {
    //     $bingoNumbers[] = ["B" => $b, "I" => $i, "N" => $n, "G" => $g, "O" => $o];
    // }

    // // Close the database connection
    // $stmt->close();
    // $mysqli->close();

    // // Send the data as a JSON response
    // echo json_encode($bingoNumbers);

    ?>

    <div id="header">
        <?php include('header.html'); ?>
    </div>

    
    <div class="contact-head">Game Title:<span id="title-name"></span></div>

    <div class="cont1">
        <div class="left">
            <button id="game-button">Call Game</button>
        </div>
        <div class="center">
            Bingo Card ID: <input id="check-card-input" type="number" value="001" size="3">
            At Call: <input id="check-call-input" type="number" size="3" value="0" readonly>
        </div>
        <button id="check-card-button">View Card</button>
    </div>


    <div class="count-main">
        <div class="left-side">
            <h2><div class="count-table"></div></h2>
        </div>
        <div class="right-side">
            <button id="popup-content">previous</button>
            <button id="restart-game">Restart</button>
        </div>
    </div>

    <!-- For POpup -->
    <div id="myModal" class="modal-popup">
        <div class="modal-content-popup">
            <span class="close">&times;</span>
            <h2>Previous Calls:</h2>
            <div id="previousCalls"></div>
        </div>
    </div>

    <div id="cardModal" class="modal-popup">
        <div class="modal-content-popup">
            <span class="close">&times;</span>
            <h2>Bingo Card:</h2>
            <table id="bingoCardTable" class="bingo-card-table">
            <!-- Table rows and cells will be generated by JavaScript -->
            </table>
        </div>
    </div>


    <table class="call-grid-manual">
        <tr>
            <td class="col">B</td>
            <td id="n_1" class>1</td>
            <td id="n_2" class>2</td>
            <td id="n_3" class>3</td>
            <td id="n_4" class>4</td>
            <td id="n_5" class>5</td>
            <td id="n_6" class>6</td>
            <td id="n_7" class>7</td>
            <td id="n_8" class>8</td>
            <td id="n_9" class>9</td>
            <td id="n_10" class>10</td>
            <td id="n_11" class>11</td>
            <td id="n_12" class>12</td>
            <td id="n_13" class>13</td>
            <td id="n_14" class>14</td>
            <td id="n_15" class>15</td>
        </tr>
    
        <tr>
            <td class="col">I</td>
            <td id="n_16" class>16</td>
            <td id="n_17" class>17</td>
            <td id="n_18" class>18</td>
            <td id="n_19" class>19</td>
            <td id="n_20" class>20</td>
            <td id="n_21" class>21</td>
            <td id="n_22" class>22</td>
            <td id="n_23" class>23</td>
            <td id="n_24" class>24</td>
            <td id="n_25" class>25</td>
            <td id="n_26" class>26</td>
            <td id="n_27" class>27</td>
            <td id="n_28" class>28</td>
            <td id="n_29" class>29</td>
            <td id="n_30" class>30</td>
        </tr>
    
        <tr>
            <td class="col">N</td>
            <td id="n_31" class>31</td>
            <td id="n_32" class>32</td>
            <td id="n_33" class>33</td>
            <td id="n_34" class>34</td>
            <td id="n_35" class>35</td>
            <td id="n_36" class>36</td>
            <td id="n_37" class>37</td>
            <td id="n_38" class>38</td>
            <td id="n_39" class>39</td>
            <td id="n_40" class>40</td>
            <td id="n_41" class>41</td>
            <td id="n_42" class>42</td>
            <td id="n_43" class>43</td>
            <td id="n_44" class>44</td>
            <td id="n_45" class>45</td>
        </tr>
    
        <tr>
            <td class="col">G</td>
            <td id="n_46" class>46</td>
            <td id="n_47" class>47</td>
            <td id="n_48" class>48</td>
            <td id="n_49" class>49</td>
            <td id="n_50" class>50</td>
            <td id="n_51" class>51</td>
            <td id="n_52" class>52</td>
            <td id="n_53" class>53</td>
            <td id="n_54" class>54</td>
            <td id="n_55" class>55</td>
            <td id="n_56" class>56</td>
            <td id="n_57" class>57</td>
            <td id="n_58" class>58</td>
            <td id="n_59" class>59</td>
            <td id="n_60" class>60</td>
        </tr>
    
        <tr>
            <td class="col">O</td>
            <td id="n_61" class>61</td>
            <td id="n_62" class>62</td>
            <td id="n_63" class>63</td>
            <td id="n_64" class>64</td>
            <td id="n_65" class>65</td>
            <td id="n_66" class>66</td>
            <td id="n_67" class>67</td>
            <td id="n_68" class>68</td>
            <td id="n_69" class>69</td>
            <td id="n_70" class>70</td>
            <td id="n_71" class>71</td>
            <td id="n_72" class>72</td>
            <td id="n_73" class>73</td>
            <td id="n_74" class>74</td>
            <td id="n_75" class>75</td>
        </tr>
    </table>

     <div id="footer">
    <?php include('footer.html'); ?>
    </div>
<script>
  // Retrieve the form data from localStorage
  const titleNameValue = localStorage.getItem('title-name');
  if (titleNameValue !== null) {
    const resultElement = document.getElementById('title-name');
    resultElement.textContent =  titleNameValue;
  }
</script>
    <script src="js_admin_3.js"></script>
    <script src="header.js"></script>
</body>

</html>