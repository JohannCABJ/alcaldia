const cron = require('node-cron');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { config } = require('../parte1/db');

const backupDir = path.join(__dirname, 'backup');
const backupPath = path.join(backupDir, 'backup.sql');

// Crea el directorio de backup si no existe
if (!fs.existsSync(backupDir)){
    fs.mkdirSync(backupDir);
}

// Obtenemos la hora y los minutos actuales y agrega un minuto (para probar el cron)
let date = new Date();
let minutes = date.getMinutes() + 1;
let hour = date.getHours();

//cron.schedule(`${minutes} ${hour} * * *`, () => { (para probar el cron)  
cron.schedule('0 12 * * *', () => {
  // Ejecuta el comando mysqldump para crear una copia de seguridad de la base de datos MySQL
  exec(`MYSQL_PWD=${config.password} mysqldump -u ${config.user} ${config.database} > ${backupPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`La copia de seguridad falló: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`La copia de seguridad falló: ${stderr}`);
      return;
    }
    console.log('Copia de seguridad creada con éxito');
  });
});