<?php 

    // header('Access-Control-Origin: *');
    // header('Access-Control-Headers: *');

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $username - $data -> activeUser; 

    if ($username === ""){
        echo "";
    } else {
        $sql = "SELECT * FROM assessmentposts WHERE posts = '$username';";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);

        if ($resultCheck > 0){

            $empArray = array();

            while($row = mysqli_fetch_assoc($result)){
                $empArray[] = $row;
            }

            echo json_encode($empArray);

        } else {
            echo 'false';
        }
    }

?>
