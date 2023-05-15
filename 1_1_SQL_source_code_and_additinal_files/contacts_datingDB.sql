CREATE DATABASE datingDB;

DROP TABLE my_contacts;
--many to many do not need to be here (no id's for them)
CREATE TABLE my_contacts (
	contact_id BIGSERIAL CONSTRAINT contact_id_key PRIMARY KEY, 
	last_name VARCHAR(30) NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	gender CHAR(1) NOT NULL,
	phone VARCHAR(10) UNIQUE NOT NULL,
	email VARCHAR(30) UNIQUE NOT NULL,
	zip_code_id BIGINT REFERENCES zip_codes (zip_code_id) ON DELETE CASCADE, --ref zip_codes "TABLE" using zip_code_id
	status_id BIGINT REFERENCES statuses (status_id) ON DELETE CASCADE,
	profession_id BIGINT REFERENCES professions (profession_id) ON DELETE CASCADE
);


SELECT * FROM my_contacts;
DELETE FROM my_contacts;
--do not insert the id because it's bigserial
INSERT INTO my_contacts
(
	last_name,
	first_name,
	gender, --M/F
	phone,
	email,
	zip_code_id, --replaces the 4 columns here as well 
	status_id,  --""
	profession_id --""
	)
VALUES 
	('Tom','Smith','F','0780615009','tom@gmail.com',1,1,1),
    ('Gugu','Ndaba','F','0780615012','gugu@gmail.com',2,2,2),
    ('Jo','Nala','M','0780615078','jo@gmail.com',1,1,3),
    ('Mary','Smith','F','0610615009','mary@gmail.com',2,2,4),
    ('Kyle','Koo','M','0710615009','kyle@gmail.com',1,2,1),
    ('Sizwe','Nchabe','M','0840615099','sizwe@gmail.com',3,1,3),
    ('Liz','Sun','F','0830777009','liz@gmail.com',3,1,2);
	
DROP TABLE zip_codes;
CREATE TABLE zip_codes
(
	zip_code_id BIGSERIAL CONSTRAINT zip_code_id_key PRIMARY KEY, --take it to the main table to replace the 4 columns that it represents
	zip_code CHAR(11) NOT NULL,
	city VARCHAR(30) NOT NULL,
	state_name VARCHAR(30) NOT NULL,
	state_abbr VARCHAR(2) NOT NULL
);

--no bigserial insert remember
INSERT INTO zip_codes
	(zip_code,
	city,
	state_name,
	state_abbr
)
VALUES
('36013-36191','Mongomery','Alabama','AL'),
('99703-99781','Fairbanks','Alaska','AK'),
('85641-85705','Tucson','Arizona','AR');
--now that you have id's for the states replace the 4 values with the id's on the main table's insert


--join all the columns in both tables "altogether"
SELECT * 
FROM my_contacts AS mc
JOIN zip_codes AS zc
ON mc.zip_code_id = zc. zip_code_id

--join the two tables but only on the specific columns 
SELECT mc.last_name, mc.first_name, zc.zip_code, zc.city, zc.state_name 
FROM my_contacts AS mc
JOIN zip_codes AS zc
ON mc.zip_code_id = zc. zip_code_id

DROP TABLE professions;

CREATE TABLE professions
(profession_id BIGSERIAL CONSTRAINT profession_id_key PRIMARY KEY,
 profession VARCHAR(30) NOT NULL
 );

INSERT INTO professions
(profession
)
VALUES 
('doctor'),
('teacher'),
('software developer'),
('student');

SELECT * FROM professions;

SELECT * 
FROM my_contacts AS mc
JOIN professions AS pro
ON mc.profession_id = pro.profession_id;

SELECT mc.last_name, mc.first_name, pro.profession
FROM my_contacts AS mc
JOIN professions AS pro
ON mc.profession_id = pro.profession_id;

DROP TABLE statuses;
CREATE TABLE statuses
(status_id BIGSERIAL CONSTRAINT status_id_key PRIMARY KEY,
 status VARCHAR(30) NOT NULL
 );

INSERT INTO statuses
(status
)
VALUES 
('single'),
('divorced');

SELECT * FROM statuses;

SELECT * 
FROM my_contacts AS mc
JOIN statuses AS st
ON mc.status_id = st.status_id;

SELECT mc.last_name, mc.first_name, st.status
FROM my_contacts AS mc
JOIN statuses AS st
ON mc.status_id = st.status_id;

--Many to many relationships seekings
DROP TABLE seekings;
CREATE TABLE seekings
(
	seeking_id BIGSERIAL CONSTRAINT seeking_id_key PRIMARY KEY,
	seeking VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO seekings
( 
	seeking
)
VALUES
('single male'),
('single female'),
('same profession'),
('employed'),
('student'),
('retired'),
('over 50'),
('under 25'),
('under 50');

SELECT * FROM seekings;

DROP TABLE contact_seeking;
CREATE TABLE contact_seeking
(
	contact_id BIGINT NOT NULL REFERENCES my_contacts(contact_id) ON DELETE CASCADE,
	seeking_id BIGINT NOT NULL REFERENCES seekings(seeking_id) ON DELETE CASCADE
);

INSERT INTO contact_seeking
(
	contact_id,
	seeking_id
)

VALUES 
(1,1),
(1,2),
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
(7,3);
--Delete everything to do with seeking on the main contact table including the insert 

SELECT mc.first_name, mc.last_name, sk.seeking
FROM my_contacts AS mc
JOIN contact_seeking AS cs
ON mc.contact_id = cs.contact_id
JOIN seekings AS sk
ON sk.seeking_id = cs.seeking_id;

--many to many - interests
DROP TABLE interests;
CREATE TABLE interests
(
	interest_id BIGSERIAL CONSTRAINT interest_id_key PRIMARY KEY,
	interest VARCHAR(50) NOT NULL UNIQUE
);

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
('studying'),
('movies'),
('cycling');


SELECT * FROM interests;

DROP TABLE contact_interest;
CREATE TABLE contact_interest
(
	contact_id BIGINT NOT NULL REFERENCES my_contacts(contact_id) ON DELETE CASCADE,
	interest_id BIGINT NOT NULL REFERENCES interests(interest_id) ON DELETE CASCADE
);

INSERT INTO contact_interest
(
	contact_id,
	interest_id
)

VALUES 
(1,1),
(1,2),
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
(7,3);
--Delete everything to do with seeking on the main contact table including the insert 

SELECT mc.first_name, mc.last_name, ints.interest
FROM my_contacts AS mc
JOIN contact_interest AS ci
ON mc.contact_id = ci.contact_id
JOIN interests AS ints
ON ci.interest_id = ints.interest_id;
