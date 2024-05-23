# Parte 1: Conexión a Base de Datos MySQL y Manejo de Funciones Directas a Base de Datos

## Requirements
  ```bash
    sudo apt-get update
    npm install mysql
    sudo apt-get install mysql-server
    sudo systemctl start mysql
    sudo systemctl enable mysql
  ```
  ```bash
      node -v  #version de node > 18
      sudo apt install nodejs
  ```
## connexion a Mysql
  ```bash
    mysql -u root -p 
    #user: root 
    #paassword :alcaldiaibague 
  ```
  ### Base de datos a utilizar
  ```bash
      USE users 
  ```
  ## Posible error
  ```bash
  /home/user/node_modules/mysql/lib/protocol/Parser.js:437
      throw err; // Rethrow non-MySQL errors
      ^

    Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
  ```
## Ejecutar
 ```bash
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'alcaldiaibague';
    FLUSH PRIVILEGES
  ```
## Run
```bash
  node database.js #(para ejecutar: 1.La creacion de la tabla usuarios, 2.el insert de los usuarios y 3.la consulta del nombre de usario a traves del email)
```
```bash
#funcion:updatePassword (descomentar para ingresar parametros para actualizacion de contrasena) y ejecutar de nuevo node database.js para que se actualice la contrasena
```
## Descripción del archivo database.js

Este archivo contiene una serie de funciones para interactuar con una base de datos MySQL. Las funciones permiten conectarse a una base de datos Mysql crear una tabla, insertar usuarios, obtener el nombre de un usuario por su correo electrónico y actualizar la contraseña de un usuario.

## Funciones database.sj

- `createTableAndInsertUsers()`: Esta función crea una tabla llamada 'usuarios' en la base de datos y luego inserta tres usuarios en la tabla.

- `getUserName(email)`: Esta función toma un correo electrónico como argumento y devuelve el nombre del usuario asociado a ese correo electrónico.

- `updatePassword(username, newPassword)`: Esta función toma un nombre de usuario y una nueva contraseña como argumentos y actualiza la contraseña del usuario en la base de datos. (para ejecutar esta funcion descomenta la funcion - linea 78)

## Uso

Para usar este archivo, primero debes asegurarte de tener una base de datos MySQL en ejecución y que los detalles de la conexión en la parte superior del archivo sean correctos.

Para ejecutar las funciones, simplemente descomenta la llamada a la función que deseas ejecutar en la parte inferior del archivo.

Por ejemplo, para ejecutar la función `createTableAndInsertUsers` y luego obtener el nombre del usuario con el correo electrónico 'user2@email.com', asegúrate de que las siguientes líneas estén descomentadas:

Si deseas actualizar la contraseña de un usuario, puedes descomentar la llamada a la función `updatePassword`:

Recuerda reemplazar 'User1' y 'newPassword' con el nombre del usuario y la nueva contraseña que deseas establecer.