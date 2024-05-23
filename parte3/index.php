<!DOCTYPE html>
<html>

<head>
  <title>Registration Form</title>
  <link rel="stylesheet" type="text/css" href="style.css">

</head>

<body>
  <h1>Formulario de Registro</h1>
  <form action="register.php" method="POST">
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required><br><br>
    <span id="passwordError" style="display: none; color: red;">La contraseña debe tener al menos 8 caracteres y contener números.</span>

    <input type="submit" value="Register">
  </form>
  <p>¿Ya tienes una cuenta? <a href="login.php">Iniciar sesión</a></p>
  <script>
    document.querySelector("form").addEventListener("submit", function (event) {
      var isValid = true;
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      var passwordRegex = /^(?=.*\d).{8,}$/;

      this.querySelectorAll("input").forEach(function (input) {
        if (input.type === "email") {
          if (!emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add("error");
          } else {
            input.classList.remove("error");
          }
        } else if (input.type === "password") {
          if (!passwordRegex.test(input.value)) {
            isValid = false;
            input.classList.add("error");
            document.getElementById("passwordError").style.display = "block";
          } else {
            input.classList.remove("error");
            document.getElementById("passwordError").style.display = "none";
          }
        } else if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (!isValid) {
        event.preventDefault();
      }
    });
  </script>
</body>

</html>