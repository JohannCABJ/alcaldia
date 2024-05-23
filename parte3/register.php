<?php
/* session_start();

if (!isset($_SESSION['username'])) {
  header('Location: login.php');
  exit;
} */
$servername = 'localhost';
$username = 'root';
$password = 'alcaldiaibague';
$dbname = 'users';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $pass);

$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['password'];
$stmt->execute();

echo "Nuevo usuario agregado exitosamente. <a href='login.php'>Iniciar sesión</a>";

$stmt->close();
$conn->close();
