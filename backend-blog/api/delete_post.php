<?php
    // Delete a post

    header("Content-Type: application/json");
    require "../db.php";

    $data = json_decode(file_get_contents("php://input"), true);

    $post_id = $data['post_id'];

    $sql = "DELETE FROM posts WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":id", $post_id);
    $stmt->execute();
?>