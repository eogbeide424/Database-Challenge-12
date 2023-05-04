const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable= require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
  

    port: 3306,
  
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
        }
    )
     .then((answer)=> {
        if(answer.viewOrAdd === 'view all departments'){
            viewAllDep();
        } else if (answer.viewOrAdd === 'view all roles'){
            viewRole();
        } else if (answer.viewOrAdd === 'view all employees'){
            viewEmployee ();
        } else if (answer.viewOrAdd === 'add a role'){
            addRole();
        }else if (answer.viewOrAdd === 'add an employee'){
            addEmployee();
        } else if(answer.viewOrAdd === 'add a department') {
            addDep();
        }else {
            updateEmployee();
        }
     });



     const viewAllDep = () => {
        db.query('SELECT * FROM department',function(err,results) {
            console.log('Selected all from department ', results);
        });
     }

     const viewRole = ()=> {
        db.query('SELECT * FROM role JOIN role ON role.department_id = department.name',function(err,results) {
            console.log('Selected all from role table', results);
        });
     }
     const viewEmployee = () => {
        db.query('SELECT * FROM employee JOIN employee ON employee.role_id = role.title',function(err,results){
            console.log('Selected all from employee table ', results);
        });
     }

     const addDep = ()=> {
        inquirer
         .prompt([
            {
                name: 'addDepart',
                type: "input",
                message:"What department would you like to add",
            }
         ]).then(function(answer){
            db.query("INSERT INTO department SET ?",
            {
                name: answer.addDepart,
            },
            function(err){
                if (err) throw err;
                console.log('added department successfully');
            })
         });
     }

     const addRole = ()=> {
        inquirer
         .prompt([
            {
                name:'title',
                type: "input",
                message: "Enter the role title",
            },
            {
                name: "salary",
                type: "input",
                message: "Enter Salary for role",
            },
            {
                name: "department",
                type: "input",
                message: "Enter department role belongs to 1-5"
            }
         ])
         .then(function(answers){
            db.query("INSERT INTO role SET ?",
            {
                title: answers.title,
                salary: answers.salary,
                department_id:answers.department,
            },
            function(err){
                if (err) throw err;
                console.log("your role has been added");
            })
         })
     }

     const addEmployee = ()=> {
        inquirer
         .prompt([
            {
                name:"firstName",
                type: "input",
                message: "Enter employee first name",
            },
            {
                name: "lastName",
                type:"input",
                message:"Enter employee last name",
            },
            {
                name: "role",
                type: "input",
                message: "what is there role",
            },
            {
                name: "manager",
                type: "input",
                message:"Enter employee manager",
            },
         ])
         .then(function(answers){
            db.query("INSERT INTO employee SET ?",
            {
                first_name: answers.firstName,
                last_name: answers.lastName,
                role_id: answers.role,
                manager_id: answers.manager,
            },
            function(err){
                if (err) throw err;
                console.log('Your employee has been added');
            });
         })
     }
  } 
  start();