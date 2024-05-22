const util = require('util');
const connection = require('./db');

connection.query = util.promisify(connection.query);

//2.crear la tabla en mysql
async function createTableAndInsertUsers() {
  try {
    const createTableQuery = `
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT,
  nombre VARCHAR(100),
  email VARCHAR(100),
  contraseña VARCHAR(100),
  PRIMARY KEY(id)
)`;
    await connection.query(createTableQuery);
    console.log('2.Tabla usuarios creada');

    // 3.insert usuarios  la tabla en mysql
    const insertUsersQuery = `
    INSERT INTO usuarios (nombre, email, contraseña) VALUES
    ('User1', 'user1@email.com', 'pass1'),
    ('User2', 'user2@email.com', 'pass2'),
    ('User3', 'user3@email.com', 'pass3')`;

    await connection.query(insertUsersQuery);
    console.log('3.Usuarios insertados');
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

//4.obtener el nombre del usuario por email

async function getUserName(email) {
  try {
    const results = await connection.query('SELECT nombre FROM usuarios WHERE email = ?', [email]);
    if (results.length > 0) {
      return results[0].nombre;
    } else {
      throw new Error(`No user found with email: ${email}`);
    }
  } catch (err) {
    console.error('Error getting user name:', err);
  }
}

function getUserName(email) {
  connection.query('SELECT nombre FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) throw err;
    console.log(`4.El usuario del email ${email} es:`, results[0].nombre);
  });
}

//5.actualizar la contraseña del usuario
async function updatePassword(username, newPassword) {
  try {
    const results = await connection.query('UPDATE usuarios SET contraseña = ? WHERE nombre = ?', [newPassword, username]);
    if (results.affectedRows > 0) {
      console.log(`Password updated for user: ${username}`);
    } else {
      throw new Error(`No user found with username: ${username}`);
    }
  } catch (err) {
    console.error('Error updating password:', err);
  }
}
createTableAndInsertUsers()
  .then(() => {
    return getUserName('user2@email.com'); // Reemplazar 'user1@email.com' con el email del usuario que desea obtener
  })
  .then(() => {
    connection.end();
  })
  .catch((err) => {
    console.error(err);
    connection.end();
  });

//  *******  Descomentar para ejecutar la función de updatePassword y comentar la funcion createTableAndInsertUsers ********

/* updatePassword('User1', 'newPassword')  // Reemplaza 'User1' con el nombre del usuario y 'newPassword' con la nueva contraseña
  .then(() => {
    connection.end();
  })
  .catch((err) => {
    console.error(err);
    connection.end();
  }); */

