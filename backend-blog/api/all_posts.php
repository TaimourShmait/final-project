refactor this if needed. use json  - <?php
    // Get all posts - most recent first with comment count for each

    header('Content-Type: application/json');
    require "../db.php";

    $sql = "SELECT * FROM posts ORDER BY id DESC";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $comment_count = [];

    $sql_comments = "SELECT * FROM comments";
    $stmt_comments = $pdo->prepare($sql_comments);
    $stmt_comments->execute();
    $comments = $stmt_comments->fetchAll(PDO::FETCH_ASSOC);

    foreach ($posts as $post) {
        $comment_count[$post["id"]] = 0;
    }

    foreach ($comments as $comment) {
        $post_id = $comment["post_id"];
        foreach ($posts as $post) {
            if ($post["id"] == $post_id) {
                $comment_count[$post["id"]]++;
            }
        }
    }

    // Assign a new comment_count field in each of the posts

    for ($i = 0; $i < count($posts); $i++) {
        $posts[$i]["comment_count"] = $comment_count[$posts[$i]["id"]];
    }
    
    echo json_encode($posts);

?>