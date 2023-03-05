<?php
$json_data = file_get_contents('C:\Users\Admin\Downloads\osoby.json');
try {
    $servername = "10.10.10.155:3307";
    $db_name = "sakila";
    $username = "uczen_1";
    $password = "test1234";

    $db_pdo = new PDO(
      "mysql:host=$servername;dbname=$db_name",
      $username,
      $password,
      [PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"]
    );

    $db_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    print "<p style='text-align: center; color: green;'>Zawartosc bazy danych MySQL:</p>".PHP_EOL;
    foreach ($osoby as $osoba) {
        $stmt = $db_pdo->prepare("INSERT INTO losulosu.person (name, surname, gender) VALUES('{$osoba['imie']}', '{$osoba['nazwisko']}', '{$osoba['plec']}')");
        $stmt->execute();
      }
    
    $db_pdo = NULL; //zamknij polaczenie z bazą

  } catch (PDOException $e) {
    print "Błąd!: " . $e->getMessage(); //przekaze co tu zjebalo?
    die();
  }
// echo($json_data);
// Dekodowanie JSON do obiektu PHP
// $osoby = json_decode($json_data, true);
// Wyświetlenie zawartości obiektu
// var_dump($osoby);
?>


