const { connection } = require('./db');

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
function getUserName(email) {
  connection.query('SELECT nombre FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) throw err;
    console.log(`4.El usuario del email ${email} es:`, results[0].nombre);
  });
}

//5.actualizar la contraseña del usuario
async function updatePassword(username, newPassword) {
  try {
    const users = await connection.query('SELECT * FROM usuarios WHERE nombre = ?', [username]);
    if (users.length === 0) {
      throw new Error(`No user found with username: ${username}`);
    }

    const results = await connection.query('UPDATE usuarios SET contraseña = ? WHERE nombre = ?', [newPassword, username]);
    if (results.affectedRows > 0) {
      console.log(`5.Contrasena actualizada satisactoriamente para el usuario: ${username}`);
    } else {
      console.log(`Password for user ${username} was not updated because it is already the same as the new password.`);
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
/* 
connection.ping(error => {
  if (error) {
    console.error('Error pinging the MySQL database:', error);
    process.exit(1);
  }

  updatePassword('User2', 'newPassword888')
    .then(() => {
      connection.end();
    })
    .catch((err) => {
      console.error(err);
      connection.end();
    });
});  */

