// queries.js
const connection = require('./databaseConnection');

class Database {
  static getAllDepartments() {
    return connection.promise().query('SELECT * FROM department');
  }

  static addDepartment(name) {
    return connection.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
  }

  // Add similar functions for roles and employees
}

module.exports = Database;
