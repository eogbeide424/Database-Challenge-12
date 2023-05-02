INSERT INTO department(name)
VALUES ("Web Development"),
        ("Human Resources"),
        ("Research and Development"),
        ("Management");


INSERT INTO role(id,title,salary,department_id)
VALUES  (1,"Manager",50000,1),
        (2,"HR worker",50000,2),
        (3,"Sciencetist",150000,3),
        (4,"Web Developer",250000,4);

INSERT INTO employee (id,first_name,last_name,role_id)
VALUES (1,"John","Edward",1),
        (2,"Fritz","Gerald",2),
        (3,"Michael","Omi",3),
        (4,"Raymond", "Reddington",4);
