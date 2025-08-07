<?php

    header("Content-Type: application/json");
    require "../db.php";

    $data = json_decode(file_get_contents("php://input"), true);

    $post_id = $data['post_id'];

    $sql_post = "SELECT * FROM posts WHERE id = :id";
    $stmt_post = $pdo->prepare($sql_post);
    $stmt_post->bindParam(":id", $post_id);
    $stmt_post->execute();
    $post = $stmt_post->fetch(PDO::FETCH_ASSOC);

    $sql_comments = "SELECT comments.content, users.name AS user_name FROM comments
            JOIN users ON comments.user_id = users.id WHERE comments.post_id = :post_id ORDER BY comments.id DESC LIMIT 15";
    $stmt_comments = $pdo->prepare($sql_comments);
    $stmt_comments->bindParam(':post_id', $post_id);
    $stmt_comments->execute();
    $comments = $stmt_comments->fetchAll(PDO::FETCH_ASSOC);

    $result = [
        "post" => $post,
        "recent_comments" => $comments
    ];

    echo json_encode($result);
?>