

<?php
    require_once 'config.php';
    require 'vendor/autoload.php'; // Adjust the path as needed if you're not using Composer

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $fname = $_POST['fname'];
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $message = $_POST['message'];

        $sql = "INSERT INTO contact (fname, email, message) VALUES ('$fname', '$email', '$message')";
        mysqli_query($conn, $sql);
        header('Location: index.html');
        echo "<script>alert('success')</script>";
    }
?>
