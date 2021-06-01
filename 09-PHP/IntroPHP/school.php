<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="get" action="">
	    <label for="grade">grade</label>
	    <input type="" name="grade"></br>
</form>

<?php

$grade = $_GET['grade'];

switch ($grade){
    case ($grade<4) : 
        echo 'Are you dumb or what?';
        break;
    case ($grade>=5 && $grade<=9) : 
        echo 'You need to study more. This not sufficient';
        break;
    case ($grade == 10) : 
        echo 'Barely enough';
        break;
    case ($grade>=11 && $grade<=14) : 
        echo 'not bad ! ';
        break;
    case ($grade>=15 && $grade<=18) :
        echo 'Bravo, bravissimo ! ';
        break;
    case ($grade == 19 || $grade == 20) : 
        echo 'You must be a cheater..';
        break;
}

?>

</body>
</html>