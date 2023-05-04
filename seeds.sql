INSERT INTO department(name)
VALUES ("Web Development"),
        ("Human Resources"),
        ("Research and Development");
       


INSERT INTO role(title,salary,department_id)
VALUES  ("HR Manager",50000,2),
        ("HR worker",50000,2),
        ('RD Manager',50000,3),
        ("Sciencetist",150000,3),
        ("WD Manager", 15000,1),
        ("Web Developer",250000,1);

INSERT INTO employee (first_name,last_name,role_id, manager_id)
VALUES ("John","Edward",5,null),
        ("Tim","Johnson",6,1),
        ("Tom",'Lansky',1,null),
        ("Fritz","Gerald",2,3),
        ("Michael","Omi",3,null),
        ("Raymond", "Reddington",4,5);
