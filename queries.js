// queries.js
const connection = require('./databaseConnection');

class Database {
  static getAllDepartments() {
    return connection.promise().query('SELECT * FROM department');
  }

  static addDepartment(name) {
    return connection.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
  }

  static getAllRoles() {
    return connection.promise().query('SELECT * FROM role');
  }

  static addRole(title, salary, department) {
    return connection.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department]);
  }

  static getAllEmployees() {
    return connection.promise().query('SELECT * FROM employee');
  }

  static addEmployee(first_name, last_name, role, manager) {
    return connection.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role, manager]);
  }

  static updateEmployeeRole(employee_id, new_role) {
    return connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [new_role, employee_id]);
  }
}

module.exports = Database;
