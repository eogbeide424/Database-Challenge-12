const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
    host: 'localhost',
  

    port: 3003,
  
    user: 'root',
    password: 'OseBabyboy64$',
    database: 'employee_db',
  });

  const start = () => {
    inquirer
     .prompt({
        name: 'viewOrAdd',
        type: 'list',
        message: 'choose an option',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
     })

  }