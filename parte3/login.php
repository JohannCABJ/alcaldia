<?php

session_start();

$servername = 'localhost';
$username = 'root';
$password = 'alcaldiaibague';
$dbname = 'users';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("pan Connection failed: " . $conn->connect_error);
}

// Comprobar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];

  if (empty($email)) {
    $error = 'Por favor, introduce tu email';
  } else if (empty($password)) {
    $error = 'Por favor, introduce tu contraseña';
  } else {
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ? AND contraseña = ?");
    if ($stmt === false) {
      die("Error preparing statement: " . $conn->error);
    }

    $bind = $stmt->bind_param("ss", $email, $password);
    if ($bind === false) {
      die("Error binding parameters: " . $stmt->error);
    }

    $execute = $stmt->execute();
    if ($execute === false) {
      die("Error executing statement: " . $stmt->error);
    }

    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $_SESSION['username'] =  $row['nombre'];
      header('Location: dashboard.php');
      exit;
    } else {
      $error = 'Email o contraseña incorrectos';
    }

    $stmt->close();
    $conn->close();
  }

}
?>

<!DOCTYPE html>
<html>

<head>
  <title>Iniciar sesión</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
  <h1>Iniciar sesión</h1>
  <?php if (isset($error)): ?>
    <p style="color: red;"><?php echo $error; ?></p>
  <?php endif; ?>
  <form method="post" action="login.php">
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br>
    <label for="password">Contraseña:</label><br>
    <input type="password" id="password" name="password"><br>
    <input type="submit" value="Iniciar sesión">
  </form>
  <p>¿No tienes una cuenta? <a href="index.php">Regístrate</a></p>
</body>

</html>