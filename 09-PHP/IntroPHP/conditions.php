<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditions</title>
</head>

<body>
    <?php

    $possible_states = ["health hazard", "filthy", "dirty", "clean", "immaculate"];

    $room_filthiness = $possible_states[4];

    if ($room_filthiness == "health hazard") {
        echo "<br>Yuk, Room is Disgusting! Let's clean it up !";
    } else if ($room_filthiness == "filthy") {
        echo "<br>Yuk, Room is filthy : let's clean it up !";
        // ...
    } else if ($room_filthiness == "dirty") {
        echo "<br>Yuk, Room is dirty : let's clean it up !";
        // ...
    } else if ($room_filthiness == "clean") {
        echo "<br>Yuk, Room is clean : let's clean it up !";
        // ...
    } else {
        echo "<br>Nothing to do, room is neat.";
    }


    date_default_timezone_set("Europe/Paris");
    $now = date('G:i'); 
    echo '<br> ' . $now;


    if (($now > "5:00") and ($now < "9:00")) {
        echo "<br>Good afternoon !";
    } elseif (($now > "9:01") and ($now < "12:00")) {
        echo "<br>Good day !";
    } elseif (($now > "12:01") and ($now < "16:00")) {
        echo "<br>Good afternoon !";
    } elseif (($now > "16:01") and ($now < "21:00")) {
        echo  "<br>Good evening !";
    } else {
        echo "<br>Good night !";
    }

    $adjective = "";
    $boyOrGirl = "";
    if (isset($_GET['gender'])) {
        if ($_GET['gender'] == "male") {
            $adjective = "mister";
            $boyOrGirl = "Boy";
        } else {
            $adjective = "miss";
            $boyOrGirl = "Girl";
        }
    }


    if (isset($_GET['age'])) {

        if ($_GET['age'] > 115) {
            echo "<br>Wow! Still alive ? Are you a robot, like me ? Can I hug you ?";
        } else if ($_GET['age'] > 18) {
            echo "<br>Hello $adjective Adult !";
        } elseif ($_GET['age'] > 12) {
            echo "<br>Hello $adjective Teenager !";
        } else {
            echo "<br>Hello $adjective kiddo!";
        }
    }

    if (isset($_GET['age']) and isset($_GET['gender']) and isset($_GET['english-speaker'])) {
        if (($_GET['age'] < 12) and $_GET['english-speaker'] == "yes") {
            echo "<br>Hello $boyOrGirl";
        } else {
            echo "<br>Aloha $boyOrGirl";
        }
    }


    ?>

    <form method="get" action="">
        <label for="name">Your name :</label>
        <input type="" name="name"><br>
        <label for="age">Please type your age :</label>
        <input type="" name="age"><br>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <p>Do you speak English ?</p>
        <input type="radio" name="english-speaker" value="yes">
        <label for="male">yes</label>
        <input type="radio" name="english-speaker" value="no">
        <label for="female">no</label><br>
        <input type="submit" name="submit" value="Greet me now">
    </form>

    <?php
    $doesitfit = "Sorry you don't fit the criteria";
    if (isset($_GET['age']) and isset($_GET['gender']) and isset($_GET['name'])) {
        if (($_GET['age'] > 21) and ($_GET['age'] < 40)) {
            $doesitfit = "welcome to the team !";
        }
    ?>
        <h2> <?php echo $doesitfit . " " . $_GET['name']; ?></h2>
    <?php } ?>
</body>

</html>