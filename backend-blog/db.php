<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $db = "blog_fcs_db";
    $dns = "mysql:host=$host;dbname=$db";

    try {
        $pdo = new PDO($dns, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die($e->getMessage());
    }
?>