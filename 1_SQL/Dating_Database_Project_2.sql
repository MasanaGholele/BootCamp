CREATE DATABASE Dating_Database_Project_2


SELECT * FROM my_contacts;
SELECT * FROM zip_codes;
SELECT * FROM professions;
SELECT * FROM statuses;
SELECT * FROM contact_seeking;
SELECT * FROM seekings;
SELECT * FROM contact_interest;
SELECT * FROM interests;


CREATE TABLE my_contacts 
	(
		contact_id BIGSERIAL CONSTRAINT contact_id_key PRIMARY KEY, 
		first_name VARCHAR(30) NOT NULL,
		last_name VARCHAR(30) NOT NULL,
		phone VARCHAR(10) UNIQUE NOT NULL,
		email VARCHAR(30) UNIQUE NOT NULL,
		gender CHAR(1) NOT NULL,
		birthday DATE NOT NULL CONSTRAINT birthday_check CHECK (birthday > '1923/1/1'),
		postal_code INT REFERENCES zip_codes (postal_code) ON DELETE CASCADE, 
		status_id BIGINT REFERENCES statuses (status_id) ON DELETE CASCADE,
		prof_id BIGINT REFERENCES professions (prof_id) ON DELETE CASCADE
	);


CREATE TABLE zip_codes
	(
		postal_code INT CHECK (postal_code between 0 and 9999) CONSTRAINT postal_code PRIMARY KEY,
		province VARCHAR(30) NOT NULL,
		city VARCHAR(30) NOT NULL
	);
	
	
CREATE TABLE professions
	(
		prof_id BIGSERIAL CONSTRAINT prof_id_key PRIMARY KEY,
		profession VARCHAR(30) UNIQUE
	);
 
 
CREATE TABLE statuses
	(
		status_id BIGSERIAL CONSTRAINT status_id_key PRIMARY KEY,
		status VARCHAR(30) NOT NULL
 	);


CREATE TABLE interests
	(
		interest_id BIGSERIAL CONSTRAINT interest_id_key PRIMARY KEY,
		interest VARCHAR(50) NOT NULL UNIQUE
	);
	

CREATE TABLE contact_interest
	(
		contact_id BIGINT NOT NULL REFERENCES my_contacts(contact_id) ON DELETE CASCADE,
		interest_id BIGINT NOT NULL REFERENCES interests(interest_id) ON DELETE CASCADE
	);
	

CREATE TABLE seekings
	(
		seeking_id BIGSERIAL CONSTRAINT seeking_id_key PRIMARY KEY,
		seeking VARCHAR(50) NOT NULL UNIQUE
	);
	
	
CREATE TABLE contact_seeking
	(
		contact_id BIGINT NOT NULL REFERENCES my_contacts(contact_id) ON DELETE CASCADE,
		seeking_id BIGINT NOT NULL REFERENCES seekings(seeking_id) ON DELETE CASCADE
	);

	
INSERT INTO my_contacts
	(
		first_name,
		last_name,
		phone,
		email,
		gender,
		birthday,
		postal_code, 
		status_id,
		prof_id
	)
VALUES 
	('Tonny','Leon','0680615009','tonny@gmail.com','M','1989/06/13',1001,NULL,1),
    ('Girly','Ndala','0810615012','girly@gmail.com','F','1991/08/15',6100,1,9),
    ('Joey','Ndlala','0789615078','joey@gmail.com','F','2000/10/04',2002,2,NULL),
    ('Marrylin','Smith','0696615009','marrylin@gmail.com','F','1988/06/07',1001,2,8),
    ('Kienen','Kook','0710615889','kienen@gmail.com','M','1970/06/23',2900,3,5),
    ('Sipho','Nchabeleng','0840465099','sipho@gmail.com','M','2001/11/13',2000,1,6),
    ('Lizzy','Sunny','0830541009','lizzy@gmail.com','F','1976/06/13',1001,NULL,1),
	('Tom','Smith','0780875909','tom@gmail.com','F','1993/04/17',6100,1,1),
    ('Gugu','Ndaba','0786312012','gugu@gmail.com','F','2000/08/18',2002,3,7),
    ('Jo','Nala','0780618469','jo@gmail.com','M','1959/09/13',2900,1,3),
    ('Mary','Smith','0610615009','mary@gmail.com','F','1999/06/13',6100,2,4),
    ('Kyle','Koo','0710615009','kyle@gmail.com','M','1989/06/13',2900,2,5),
    ('Sizwe','Nchabe','0840615099','sizwe@gmail.com','M','1976/06/13',2000,3,NULL),
    ('Liz','Sun','0830777009','liz@gmail.com','F','2001/11/13',7000,1,2),
	('Goodness','Ndaba','0786312002','goodness@gmail.com','F','1993/04/17',8000,2,7),
    ('Jo-Anne','Ngobeni','0780645669','jo-anne@gmail.com','F','1945/12/18',2000,1,3),
    ('Maartin','Smith','0610455009','maartin@gmail.com','M','1985/10/24',2300,NULL,9),
    ('Kulani','Koloi','0710616309','kulani@gmail.com','M','2002/12/18',7000,2,6),
    ('Sibusiso','Nchabe','0894615099','sibusiso@gmail.com','M','1987/02/18',8000,1,NULL),
    ('Lizbeth','Sungu','0830777889','lizbeth@gmail.com','F','1955/12/18',2300,3,6);
	
	
INSERT INTO zip_codes
	(
		postal_code,
		province,
		city
	)
VALUES
	(1001, 'Gauteng', 'Pretoria'),
	(2000, 'Gauteng', 'Johannesburg'),
	(2002, 'Limpopo', 'Polokwane'),
	(3000, 'Limpopo', 'Tzaneen'),
	(2200, 'Mpumalanga', 'Middleburg'),
	(2300, 'Mpumalanga', 'Nelspruit'),
	(2900, 'Kwa-Zulu Natal', 'Durban'),
	(3200, 'Kwa_Zulu Natal', 'Pietermaritzburg'),
	(6000, 'Eastern Cape', 'East Lodon'),
	(6100, 'Eastern Cape', 'Port Elizabeth'),
	(6006, 'Western Cape', 'Cape Town'),
	(7000, 'Western  Cape', 'Stellenbosch'),
	(8008, 'Northen Cape', 'Namaqualand'),
	(8000, 'Northern Cape', 'Worcester'),
	(9009, 'North West', 'Rusternburg'),
	(9000, 'North West', 'Hartebeespoort'),
	(1010, 'Free State', 'Bethlehem'),
	(1000, 'Free State', 'Bloemfontien');


INSERT INTO statuses
	(
		status
	)
VALUES 
	('single'),
	('divorced'),
	('widowed');


INSERT INTO professions
	(	
		profession
	)
VALUES 
	('software developer'),
	('author'),
	('artist'),
	('chef'),
	('teacher'),
	('student'),
	('actor'),
	('doctor'),
	('scientist');


INSERT INTO interests
	( 
		interest
	)
VALUES
('hiking'),
('reading'),
('biking'),
('cooking'),
('running'),
('diving'),
('music'),
('movies'),
('cycling'),
('art');

	
INSERT INTO contact_interest
	(
		contact_id,
		interest_id
	)

VALUES 
	(1,9),
	(1,8),
	(1,3),
	(2,4),
	(2,5),
	(2,6),
	(3,7),
	(3,10),
	(3,9),
	(4,1),
	(4,2),
	(4,3),
	(5,4),
	(5,10),
	(5,6),
	(6,7),
	(6,8),
	(6,9),
	(7,1),
	(7,2),
	(7,10),
	(8,1),
	(8,2),
	(8,3),
	(9,4),
	(9,5),
	(9,10),
	(10,7),
	(10,8),
	(11,9),
	(11,1),
	(11,2),
	(12,3),
	(12,4),
	(12,5),
	(13,6),
	(13,7),
	(13,8),
	(14,9),
	(14,1),
	(14,2),
	(15,3),
	(16,7),
	(16,8),
	(16,9),
	(17,1),
	(17,2),
	(17,3),
	(18,4),
	(18,5),
	(18,6),
	(19,7),
	(19,8),
	(19,9),
	(20,1),
	(20,2),
	(20,3);


INSERT INTO seekings
	( 
		seeking
	)
VALUES
	('single male'),
	('single female'),
	('single male or female'),
	('same profession'),
	('employed'),
	('student'),
	('retired'),
	('over 50'),
	('under 50');


INSERT INTO contact_seeking
	(
		contact_id,
		seeking_id
	)
VALUES 
	(1,9),
	(1,8),
	(1,3),
	(2,4),
	(2,5),
	(2,6),
	(3,7),
	(3,8),
	(3,9),
	(4,1),
	(4,2),
	(4,3),
	(5,4),
	(5,5),
	(5,6),
	(6,7),
	(6,8),
	(6,9),
	(7,1),
	(7,2),
	(7,3),
	(8,1),
	(8,2),
	(8,3),
	(9,4),
	(9,5),
	(9,6),
	(10,7),
	(10,8),
	(11,9),
	(11,1),
	(11,2),
	(12,3),
	(12,4),
	(12,5),
	(13,6),
	(13,7),
	(13,8),
	(14,9),
	(14,1),
	(14,2),
	(15,3),
	(16,7),
	(16,8),
	(16,9),
	(17,1),
	(17,2),
	(17,3),
	(18,4),
	(18,5),
	(18,6),
	(19,7),
	(19,8),
	(19,9),
	(20,1),
	(20,2),
	(20,3);


SELECT * 
FROM my_contacts AS mc
LEFT JOIN zip_codes AS zc
ON mc.postal_code = zc.postal_code

SELECT * 
FROM my_contacts AS mc
LEFT JOIN statuses AS st
ON mc.status_id = st.status_id;

SELECT * 
FROM my_contacts AS mc
LEFT JOIN professions AS pro
ON mc.prof_id = pro.prof_id;


--Many to many relationships seekings
SELECT mc.first_name, mc.last_name, sk.seeking
FROM my_contacts AS mc
LEFT JOIN contact_seeking AS cs
ON mc.contact_id = cs.contact_id
LEFT JOIN seekings AS sk
ON sk.seeking_id = cs.seeking_id;

--many to many - interests
SELECT mc.first_name, mc.last_name, ints.interest
FROM my_contacts AS mc
JOIN contact_interest AS ci
ON mc.contact_id = ci.contact_id
LEFT JOIN interests AS ints
ON ci.interest_id = ints.interest_id;


