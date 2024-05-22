README
Descripción del archivo database.js
Este archivo contiene una serie de funciones para interactuar con una base de datos MySQL. Las funciones permiten crear una tabla, insertar usuarios, obtener el nombre de un usuario por su correo electrónico y actualizar la contraseña de un usuario.

Funciones
createTableAndInsertUsers(): Esta función crea una tabla llamada 'usuarios' en la base de datos y luego inserta tres usuarios en la tabla.

getUserName(email): Esta función toma un correo electrónico como argumento y devuelve el nombre del usuario asociado a ese correo electrónico.

updatePassword(username, newPassword): Esta función toma un nombre de usuario y una nueva contraseña como argumentos y actualiza la contraseña del usuario en la base de datos.

Uso
Para usar este archivo, primero debes asegurarte de tener una base de datos MySQL en ejecución y que los detalles de la conexión en la parte superior del archivo sean correctos.

Para ejecutar las funciones, simplemente descomenta la llamada a la función que deseas ejecutar en la parte inferior del archivo.

Por ejemplo, para ejecutar la función createTableAndInsertUsers y luego obtener el nombre del usuario con el correo electrónico 'user2@email.com', asegúrate de que las siguientes líneas estén descomentadas:

Si deseas actualizar la contraseña de un usuario, puedes descomentar la llamada a la función updatePassword:

Recuerda reemplazar 'User1' y 'newPassword' con el nombre del usuario y la nueva contraseña que deseas establecer.