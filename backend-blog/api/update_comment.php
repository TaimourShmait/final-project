<?php
    header("Content-Type: application/json");
    require "../db.php";

    $data = json_decode(file_get_contents("php://input"), true);

    $comment_id = $data['comment_id'];
    $comment_content = $data['content'];

    $sql = "UPDATE comments SET content = :content WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":content", $comment_content);
    $stmt->bindParam(":id", $comment_id);
    $stmt->execute();

    echo json_encode(["success" => true]);


?>