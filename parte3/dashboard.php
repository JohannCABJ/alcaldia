<?php

session_start();

// Comprobar si el usuario ha iniciado sesión
if (!isset($_SESSION['username'])) {
  // Si el usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
  header('Location: login.php');
  exit;
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Bienvenido, <?php echo $_SESSION['username']; ?>!</h1>
  <p><a href="logout.php">Cerrar sesión</a></p>
</body>
</html>