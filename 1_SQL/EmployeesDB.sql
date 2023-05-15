CREATE DATABASE Employee_Database_Project_1;

SELECT * FROM employees;
SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM salaries;
SELECT * FROM overtime_hours;


CREATE TABLE employees
	(	
		emp_id BIGSERIAL CONSTRAINT emp_id_key PRIMARY KEY,
		first_name VARCHAR(30) NOT NULL,
		surname VARCHAR(30) NOT NULL,
		gender CHAR (1) NOT NULL,
		email VARCHAR UNIQUE NOT NULL,
		address VARCHAR NOT NULL,
		depart_id BIGINT REFERENCES departments (depart_id) ON DELETE CASCADE,
		role_id BIGINT REFERENCES roles (role_id) ON DELETE CASCADE,
		salary_id BIGINT REFERENCES salaries (salary_id) ON DELETE CASCADE,
		overtime_id BIGINT REFERENCES overtime_hours (overtime_id) ON DELETE CASCADE
	);
	
	
CREATE TABLE departments
	(
		depart_id BIGSERIAL CONSTRAINT depart_id_key PRIMARY KEY,
		depart_name VARCHAR(30) NOT NULL,
		depart_city VARCHAR(30) NOT NULL
	);


CREATE TABLE roles
	(
		role_id BIGSERIAL CONSTRAINT role_id_key PRIMARY KEY,
		emp_role VARCHAR(30) NOT NULL
	);
	
	
CREATE TABLE salaries
	(
		salary_id BIGSERIAL CONSTRAINT salary_id_key PRIMARY KEY,
		salary_pa INTEGER CONSTRAINT check_salary_not_zero CHECK (salary_pa > 0)
	);
	

CREATE TABLE overtime_hours
	(
		overtime_id BIGSERIAL CONSTRAINT overtime_id_key PRIMARY KEY,
		overtime_hours_worked INTEGER
	);
	
	
INSERT INTO employees
	(
		first_name,
		surname,
		gender,
		email,
		address,
		depart_id,
		role_id,
		salary_id,
		overtime_id	
	)
VALUES
	('Melodie','Cobb','F','est@aol.org','280 Magna Road Pretoria 0001',5,3,4,NULL),
	('Lawrence','Newman','M','leo.morbi.neque@outlook.net','414-2685 Eros St Norkem Park 1619',3,9,5,5),
	('Ashton','Fulton','M','velit.eu@hotmail.net','767 Iaculis, Av Johannesburg 2000',3,6,4,2),
	('Lionel','Terrell','M','malesuada.malesuada@protonmail.com','391 Praesent St Pretoria 0001',2,5,3,4),
	('Kiara','Maddox','F','donec.felis@yahoo.com','142 Lobortis Rd Pretoria 0001',1,7,2,4),
	('Cedric','Stanton','M','velit.cras@hotmail.couk','2940 Enim St Norkem Park 1619',1,2,2,NULL),
	('Flavia','Sanders','F','eros.proin@hotmail.com','881 Nam St Johannesburg 2000',5,3,1,5),
	('Raymond','Levy','M','lacus.cras@yahoo.net','513 Ac Rd Johannesburg 2000',4,6,1,3),
	('Grace','Haynes','F','eros@aol.co.uk','9058 Phasellus Street Norkem Park 1619',4,7,4,1),
	('TaShya','Hood','M','quisque.ac@hotmail.org','453 Urna St Johannesburg 2000',3,4,4,2),
	('Edan','Powers','M','nisi.aenean.eget@outlook.net','452 Nonto Road Pretoria 0001',2,3,2,NULL),
	('Gil','Boyer','M','litora.torquent.per@aol.com','472 Augue RoadJohannesburg 2000',1,4,2,4),
	('Giacomo','Hudson','M','n.consectetuer@protonmail.co.uk','6820 Cubilia Avenue Norkem Park 1619',3,7,1,5),
	('Lionel','Randolph','M','nec.imperdiet@icloud.ca','799 Ornare Road Pretoria 0001',5,3,1,5),
	('Jessica','Stafford','F','eu.dolor.egestas@hotmail.ca','616 Mi Road Pretoria 0001',2,1,3,2);


INSERT INTO departments
	(
		depart_name,
		depart_city
	)	
VALUES
	('Sales','Pretoria'),
	('IT','Johannesburg'),
	('HR','Pretoria'),
	('Finance','Cape Town'),
	('Operations','Rusternburg');
	
	
INSERT INTO roles
	(
		emp_role
	)
VALUES
	('Director'),
	('Executive'),
	('Manager'),
	('Supervisor'),
	('Departmental Head'),
	('Personal Assistant'),
	('Intern'),
	('Clerk'),
	('Senior Clerk');
	
	
INSERT INTO salaries
	(
		salary_pa
	)
VALUES
	(150000),
	(200000),
	(300000),
	(500000),
	(750000),
	(1500000);
	
	
INSERT INTO overtime_hours
	(
		overtime_hours_worked
	)
VALUES
	(0),
	(20),
	(40),
	(60),
	(80),
	(100),
	(120);


SELECT * 
FROM employees AS e
JOIN departments AS d
ON e.depart_id = d.depart_id;

SELECT * 
FROM employees AS e
JOIN roles AS r
ON e.role_id = r.role_id;

SELECT * 
FROM employees AS e
JOIN salaries AS s
ON e.salary_id = s.salary_id;

SELECT * 
FROM employees AS e
JOIN overtime_hours AS o
ON e.overtime_id = o.overtime_id;

-- LEFT JOIN query that will display the department name, job title, salary figure and overtime hours worked.

SELECT first_name, surname, depart_name, emp_role, salary_pa, overtime_hours_worked
FROM employees AS e

LEFT JOIN departments AS d
ON e.depart_id = d.depart_id

LEFT JOIN roles AS r
ON e.role_id = r.role_id

LEFT JOIN salaries AS s
ON e.salary_id = s.salary_id

LEFT JOIN overtime_hours AS o
ON e.overtime_id = o.overtime_id;

