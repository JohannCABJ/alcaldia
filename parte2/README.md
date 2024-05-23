# Descripción del Proyecto

Parte 2: Ejecutables Directos desde Servidor para Tareas Automáticas Programadas

## Requisitos

Para ejecutar este proyecto, necesitarás:

- Node.js y npm instalados en tu sistema.
  ```bash
      node -v  #version de node > 18
      sudo apt install nodejs
  ```
- La base de datos 'usuarios' MySQL creada en la parte 1 en ejecución.
- El paquete node-cron instalado en tu proyecto. Puedes instalarlo con npm install node-cron.
  ```bash
     npm install node-cron
  ```
- El paquete child_process de Node.js para ejecutar comandos del sistema.

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

Además, debes ajustar el horario de la tarea programada en el archivo cron.js. Actualmente, está configurado para todos los días a las 12:00 PM (para pruebas se deja comentada la programacion del cron para que se ejecute un minuto después de la hora actual cuando se inicia el script).

## Ejecución

Para ejecutar el proyecto, sigue estos pasos:

1. Navega hasta el directorio del proyecto en una terminal.
2. Ejecuta node cron.js.
  ```bash
      node cron.js
  ```

Si todo está configurado correctamente, el script creará una copia de seguridad de tu base de datos MySQL en la carpeta backup en el mismo directorio que cron.js a la hora programada.

## Pruebas

Para probar el proyecto, simplemente ejecuta node cron.js y espera a que se ejecute la tarea programada. Si la copia de seguridad se crea con éxito, verás un mensaje en la consola que dice "Copia de seguridad creada con éxito". Si hay algún error, se imprimirá en la consola.