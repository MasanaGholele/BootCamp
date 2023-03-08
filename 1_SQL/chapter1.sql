CREATE DATABASE analysis;
CREATE TABLE teachers (
id bigserial,
first_name varchar(25),
last_name varchar(50),
school varchar(50),
hire_date date,
salary numeric
);

INSERT INTO teachers
(first_name,
 last_name,
 school,
 hire_date,
 salary)
VALUES 
(
	'Janet', 'Smith', 'F.D. Roosevelt HS', '2011-10-30', 36200),
	('Lee', 'Reynolds', 'F.D. Roosevelt HS', '1993-05-22', 65000),
	('Samuel', 'Cole', 'Myers Middle School', '2005-08-01', 43500),
	('Samantha', 'Bush', 'Myers Middle School', '2011-10-30', 36200),
	('Betty', 'Diaz', 'Myers Middle School', '2005-08-30', 43500),
	('Kathleen', 'Roush', 'F.D. Roosevelt HS', '2010-10-22', 38500);

--Try it yourself
DROP TABLE animal_types;
CREATE TABLE animal_types (
   animal_type_id bigserial,
   animal_name varchar(100),
   family_name varchar(100),
   scientific_name varchar(100)
   );
   
 INSERT INTO animal_types 
(
	animal_name,
	family_name,
	scientific_name)
VALUES ('Lion', 'Cats', 'Panthera Leo'),
       ('Tiger', 'Cats', 'Panthera tigris');
	   	   
/*ERROR:  syntax error at or near "'Panthera Leo'"
LINE 6: VALUES ('Lion', 'Cats' 'Panthera Leo'),
                               ^
SQL state: 42601
Character: 98*/
DROP TABLE animal_specifications;
CREATE TABLE animal_specifications (
	specification_id bigserial,
   animal_type_id bigserial,
   date_acquired date,
   gender varchar(6),
   acquired_from varchar(100),
   zoo_name varchar(100),
   notes text
);

INSERT INTO animal_specifications (animal_type_id, date_acquired, gender, acquired_from, zoo_name, notes)
VALUES
('Lion', '1996/3/12', 'F', 'Dhaka Zoo', 'Ariel', 'Healthy coat at last exam.'),
('Tiger', '2000/9/30', 'M', 'National Zoo', 'Freddy', 'Strong appetite.');


CREATE TABLE animal_types2 (
	   animal_type2_id bigserial CONSTRAINT animal_types2_key PRIMARY KEY,
	   common_name varchar(100) NOT NULL,
		family_name varchar(100) NOT NULL,
	   scientific_name varchar(100) NOT NULL
);

CREATE TABLE variations (
   variation_id bigserial CONSTRAINT variation_key PRIMARY KEY,
   animal_type2_id bigint REFERENCES animal_types2 (animal_type2_id),
   date_acquired date NOT NULL,
   gender varchar(1),
   acquired_from varchar(100),
   zoo_name varchar(100),
   notes text
);

INSERT INTO animal_types2 (common_name, family_name, scientific_name)
VALUES ('Lion', 'Cats', 'Panthera Leo'),
       ('Tiger', 'Cats', 'Panthera tigris');
	   	   

INSERT INTO variations (animal_type2_id, date_acquired, gender, acquired_from, zoo_name, notes)
VALUES
(1, '1999/3/12', 'F', 'Dhaka Zoo', 'Ariel', 'Healthy coat at last exam.'),
(2, '2010/9/30', 'F', 'National Zoo', 'Freddy', 'Strong appetite.');

