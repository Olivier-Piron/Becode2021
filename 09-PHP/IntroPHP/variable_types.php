<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php $name = " Michael Zerghe";
          $age = 24;
          $eyes = 'green/brown';
          $family = array(
              'Fabian',
              'Stephanie',
          );
    ?>
    <p>My name is <?php echo $name?></p>
    <p>I am <?php echo $age?> years old</p>
    <p>My eyes are <?php echo $eyes?></p>
    <p>The first person in my family is <?php echo $family[0]?></p>
</body>
</html>