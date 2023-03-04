<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table align="left" border="1" cellpadding="3" cellspacing="0" style="width:50%; height:50%">
        <tr>
            <th>♪</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
        </tr>
        <?php

        echo "<tr>";
        echo "<th> 1 </th>";
        echo "<th class='mouse'><p style='color:red'>x</p></th>";
        echo "<th></th>";
        echo "<th rowspan='2'></th>";
        echo "<th></th>";
        echo "<th rowspan='2' colspan='2'></th>";
        echo "</tr>";

        echo "<tr>";
        echo "<th> 2 </th>";
        echo "<th></th>";
        echo "<th class='mouse'><p style='color:green'>x</p></th>";
        echo "<th></th>";
        echo "</tr>";

        echo "<tr>";
        echo "<th> 3 </th>";
        echo "<th colspan='2'></th>";
        echo "<th class='mouse'><p style='color:blue'>x</p></th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "</tr>";

        echo "<tr>";
        echo "<th> 4 </th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "<th class='mouse'><p style='color:brown'>x</p></th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "</tr>";

        echo "<tr>";
        echo "<th> 5 </th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "<th></th>";
        echo "<th class='mouse'><p style='color:yellow'>x</p></th>";
        echo "<th></th>";
        echo "</tr>";

        
        ?>
         <script src="skrypt.js"></script> 
</body>

</html>