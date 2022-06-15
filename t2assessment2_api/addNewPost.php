<?php

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit();
    }

    include 'db_connection.php';

    $request_body = file_get_cotents('php://input');
    $data = json_decode($request_body);

    $message = $data -> postMessage;
    $user -> username;

    if($messag === ''){
        echo 'Message is empty.'
    } else {
        $sql = "INSERT INTO posts (id, username, dateTime, postMessage) VALUES (NULL,'$user', CURRENT_TIMESTAMP ,' $message');";
        $result = mysqli_query($conn, $sql);

        if (!$result) {
            echo ("Error: " . mysqli_error($conn));
        } else {
            echo "true";
        }
    }
?>

