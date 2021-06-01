<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php

$pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');

foreach ($pronouns as $key => $value) {
    if ($key == 2) {
        echo $pronouns[$key].' codes'.'<br>';
    }
    else {
        echo $pronouns[$key].' code'.'<br>';
    };
    
};

while ($a <= 120) {
    echo $a.'<br>';
    $a = $a+1;
;};

for ($i=0; $i <=120 ; $i++) { 
    echo $i.'<br>';
};

?>


</body>
</html>