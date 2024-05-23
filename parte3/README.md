# Descripción del Proyecto

Parte 3: Desarrollo Web bajo Código PHP Nativo, HTML, CSS, JavaScript y WordPress

## Requisitos

Para ejecutar este proyecto, necesitarás:

- Node.js y npm instalados en tu sistema.
  ```bash
      node -v  #version de node > 18
      sudo apt install nodejs
  ```
- PHP 
    ```bash
    sudo apt install php 
    ```
- La base de datos 'usuarios' MySQL creada en la parte 1 en ejecución.

- Para la insercion de los regitros en mysql se necesitara instalar:
    ```bash
   sudo apt-get install php-mysql
    ```
### En caso de error con Mysqli
```bash
mysqli 127.0.0.1:58778 [500]: POST /register.php - Uncaught Error: Class "mysqli" not found
```
Ejecutar: `sudo apt install php8.1-mysql`

- Para verificar la instalacion de la extension `php -m | grep mysqli`

- Los demas paquetes necesarios instalados en el proyecto. Puede instalarlos con `npm install`.

## Configuración

Antes de ejecutar el proyecto, verificar la conexión a tu base de datos MySQL.
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

## Ejecución

Para ejecutar el proyecto, sigue estos pasos:

1. Navega hasta el directorio del proyecto en una terminal.
2. Ejecuta `sudo php -S localhost:800 #para ejecutar el servidor web`.

Si todo está configurado correctamente, el script se ejecutará y realizará las tareas especificadas.

## Pruebas

![register](https://i.ibb.co/jRhNfz3/image-2024-05-23-153740962.png)

![login](https://i.ibb.co/Wy1Gmxx/login.jpg)

