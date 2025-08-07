<?php

    header("Content-Type: application/json");
    require "../db.php";

    $data = json_decode(file_get_contents("php://input"), true);
    $user_id = $data['user_id'];

    $sql = "SELECT * FROM posts WHERE user_id = :user_id ORDER BY id DESC LIMIT 10";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":user_id", $user_id);
    $stmt->execute();
    $user_posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($user_posts);
?>