DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
);

CREATE TABLE role(
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee(
    id int AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT 
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id REFERENCES employee (id),

);