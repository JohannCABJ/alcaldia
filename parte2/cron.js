const cron = require('node-cron');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const backupDir = path.join(__dirname, 'backup');
const backupPath = path.join(backupDir, 'backup.sql');

// Crea el directorio de backup si no existe
if (!fs.existsSync(backupDir)){
    fs.mkdirSync(backupDir);
}

cron.schedule('0 12 * * *', () => {
  // Ejecuta el comando mysqldump para crear una copia de seguridad de la base de datos MySQL
  exec(`mysqldump -u <username> -p<password> <database> > ${backupPath}`, (error, stdout, stderr) => {
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