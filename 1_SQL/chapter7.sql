--Table Design That Works for You 

--column constraint syntax
--If a column’s values obey the primary key constraint—unique for every row and never empty—
--it can be used as a natural key rather than creating a column and filling it with 
--artificial values to act as keys. (surrogate)
--NOTE: pros and cons of each type are outlined on page 98

CREATE TABLE natural_key_example (
license_id varchar(10) CONSTRAINT license_key PRIMARY KEY,
first_name varchar(50),
last_name varchar(50)
);
/*Note that in the column constraint syntax you can omit the CONSTRAINT keyword 
and name for the key, and simply use PRIMARY KEY.*/

DROP TABLE natural_key_example;

--the table constraint syntax
CREATE TABLE natural_key_example (
license_id varchar(10),
first_name varchar(50),
last_name varchar(50),
CONSTRAINT license_key PRIMARY KEY (license_id)
);

INSERT INTO natural_key_example (license_id, first_name, last_name)
VALUES ('T229901', 'Lynn', 'Malero');

--having a primary key protects you from ruining the integrity of your data
INSERT INTO natural_key_example (license_id, first_name, last_name)
VALUES ('T229901', 'Sam', 'Tracy');

/*ERROR:  duplicate key value violates unique constraint "license_key"
DETAIL:  Key (license_id)=(T229901) already exists.
SQL state: 23505*/

--composite primary key -to ensure that a student is not marked Y and N on the same day
CREATE TABLE natural_key_composite_example
(
	student_id varchar(10),
	school_day date,
	present boolean,
CONSTRAINT student_id_key PRIMARY KEY (student_id, school_day)
);

INSERT INTO natural_key_composite_example 
(student_id,
 school_day,
 present)
VALUES
(775,
 '2017/1/22',
 'Y');

INSERT INTO natural_key_composite_example 
	(student_id,
	 school_day,
	 present)
VALUES
	(775,
	'2017/1/23',
	 'Y');
	 
INSERT INTO natural_key_composite_example
	(student_id,
	 school_day,
	 present)
VALUES
	(775,
	'2017/1/23',
	'N');
/*ERROR:  duplicate key value violates unique constraint "student_id_key"
DETAIL:  Key (student_id, school_day)=(775, 2017-01-23) already exists.
SQL state: 23505*/

--Declaring a bigserial column as a surrogate key

CREATE TABLE surrogate_key_example 
(
	order_number bigserial,
	product_name varchar(50),
	order_date date,
	CONSTRAINT order_key PRIMARY KEY (order_number)
);
--you can omit the order_number column when you insert
INSERT INTO surrogate_key_example 
(
	product_name,
	order_date)
VALUES 
	('Beachball Polish', '2015-03-17'),
	('Wrinkle De-Atomizer', '2017-05-22'),
	('Flux Capacitor', '1985-10-26');
	
SELECT * FROM surrogate_key_example;

DROP TABLE licenses;
DROP TABLE registrations;

CREATE TABLE licenses 
(
	license_id varchar(10),
	first_name varchar(50),
	last_name varchar(50),
	CONSTRAINT licenses_key PRIMARY KEY (license_id)
);
INSERT INTO licenses 
(
	license_id,
	first_name,
	last_name)
VALUES ('T229901','Lynn','Malero');


CREATE TABLE registrations 
(
	registration_id varchar(10),
	registration_date date,
	license_id varchar(10) REFERENCES licenses (license_id),
	CONSTRAINT registration_key PRIMARY KEY (registration_id, license_id)
);

INSERT INTO registrations 
(
	registration_id,
	registration_date, 
	license_id)
VALUES ('A203391','2017/3/17','T229901');

--trying to insert a "reference" value that is not present in the main table
INSERT INTO registrations 
(
	registration_id,
	registration_date,
	license_id)
VALUES 
(
	'A75772', 
	'2017/3/17', 
	'T000001');
/*ERROR:  insert or update on table "registrations" violates foreign key constraint "registrations_license_id_fkey"
DETAIL:  Key (license_id)=(T000001) is not present in table "licenses"
SQL state: 23503*/

--Automatically Deleting Related Records with CASCADE
DROP TABLE registrations;
CREATE TABLE registrations 
(
	registration_id varchar(10),
	registration_date date,
	license_id varchar(10) REFERENCES licenses (license_id) ON DELETE CASCADE,
	CONSTRAINT registration_key PRIMARY KEY (registration_id, license_id)
);
--Deleting a record on the licenses will automatically delete the "parent record" in the registrations


--The CHECK Constraint
CREATE TABLE check_constraint_example 
(
	user_id bigserial,
	user_role varchar(50),
	salary integer,
	CONSTRAINT user_id_key PRIMARY KEY (user_id),
	CONSTRAINT check_role_in_list CHECK (user_role IN('Admin', 'Staff')),
	CONSTRAINT check_salary_not_zero CHECK (salary > 0)
);

--combine more than one test in a single CHECK statement if we use the table constraint syntax
CONSTRAINT grad_check CHECK (credits >= 120 AND tuition = 'Paid')

--test values across columns
CONSTRAINT sale_check CHECK (sale_price < retail_price)

--The UNIQUE Constraint
--NOTE: In a primary key, no values can be NULL, but a UNIQUE constraint permits multiple NULL values in a column.

CREATE TABLE unique_constraint_example 
(
	contact_id bigserial CONSTRAINT contact_id_key PRIMARY KEY,
	first_name varchar(50),
	last_name varchar(50),
	email varchar(200),
	CONSTRAINT email_unique UNIQUE (email)
);
--1st insert
INSERT INTO unique_constraint_example 
(
	first_name,
	last_name,
	email)
VALUES 
	('Samantha',
	'Lee',
	'slee@example.org');

--2nd insert
INSERT INTO unique_constraint_example 
(
	first_name,
	last_name,
	email)
VALUES 
	('Betty',
	'Diaz',
	'bdiaz@example.org');
	
--3rd insert
INSERT INTO unique_constraint_example 
(
	first_name,
	last_name,
	email)
VALUES
	('Sasha',
	 'Lee', 
	 'slee@example.org');
/*ERROR:  duplicate key value violates unique constraint "email_unique"
DETAIL:  Key (email)=(slee@example.org) already exists.
SQL state: 23505*/

--The NOT NULL Constraint
--re-named column to "id2" cause student_id alareaady exists
CREATE TABLE not_null_example
(
	student_id2 bigserial,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	CONSTRAINT student_id2_key PRIMARY KEY (student_id2)
);

--Removing Constraints or Adding Them Later
ALTER TABLE not_null_example DROP CONSTRAINT student_id2_key;
ALTER TABLE not_null_example ADD CONSTRAINT student_id2_key PRIMARY KEY (student_id2);

--NOT NULL is SET not "ADDED"
ALTER TABLE not_null_example ALTER COLUMN first_name DROP NOT NULL;
ALTER TABLE not_null_example ALTER COLUMN first_name SET NOT NULL;

--Speeding Up Queries with Indexes
--B-Tree: "Balanced-Tree"

CREATE TABLE new_york_addresses 
(
	longitude numeric(9,6),
	latitude numeric(9,6),
	street_number varchar(10),
	street varchar(32),
	unit varchar(7),
	postcode varchar(5),
	id integer CONSTRAINT new_york_key PRIMARY KEY
);

COPY new_york_addresses
FROM 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\practical-sql-main\Chapter_07\city_of_new_york.csv'
WITH (FORMAT CSV, HEADER);

SELECT * FROM new_york_addresses;

EXPLAIN ANALYZE SELECT * 
FROM new_york_addresses
WHERE street = 'BROADWAY';

EXPLAIN ANALYZE SELECT * 
FROM new_york_addresses
WHERE street = '52 STREET';

EXPLAIN ANALYZE SELECT * 
FROM new_york_addresses
WHERE street = 'ZWICKY AVENUE';

CREATE INDEX street_idx ON new_york_addresses (street);
DROP INDEX street_idx;

--Try it yourself
/*
	Consider the following two tables from a database you’re making to keep
	track of your vinyl LP collection. 
	Start by reviewing these CREATE TABLE statements.

	The albums table includes information specific to the overall collection of songs on the disc.
	The songs table catalogs each track on the album. Each song has a title and its own artist column,
	because each song might feature its own collection of artists.
*/

CREATE TABLE albums (
    album_id bigserial,
    album_catalog_code varchar(100),
    album_title text,
    album_artist text,
    album_time interval,
    album_release_date date,
    album_genre varchar(40),
    album_description text
);

CREATE TABLE songs (
    song_id bigserial,
    song_title text,
    song_artist text,
    album_id bigint
);

-- Use the tables to answer these questions:

-- 1. Modify these CREATE TABLE statements to include primary and foreign keys plus
--    additional constraints on both tables. Explain why you made your choices.

CREATE TABLE albums (
    album_id bigserial CONSTRAINT album_id_key PRIMARY KEY,
    album_catalog_code varchar(100) NOT NULL,
    album_title text NOT NULL,
    album_artist text NOT NULL,
    album_release_date date CONSTRAINT release_date_check CHECK (album_release_date > '1925/1/1'),
    album_genre varchar(40),
    album_description text
);

CREATE TABLE songs (
    song_id bigserial,
    song_title text NOT NULL,
    song_artist text NOT NULL,
    album_id bigint REFERENCES albums (album_id),
    CONSTRAINT song_id_key PRIMARY KEY (song_id)
);

-- Answers:
-- a) Both tables get a primary key using surrogate key id values that are
-- auto-generated via serial data types.

-- b) The songs table references albums via a foreign key constraint.

-- c) In both tables, the title and artist columns cannot be empty, which
-- is specified via a NOT NULL constraint. We assume that every album and
-- song should at minimum have that information.

-- d) In albums, the album_release_date column has a CHECK constraint
-- because it would be likely impossible for us to own an LP made before 1925.


-- 2. Instead of using album_id as a surrogate key for your primary key, are
-- there any columns in albums that could be useful as a natural key? What would
-- you have to know to decide?

-- Answer:
-- We could consider the album_catalog_code. We would have to answer yes to
-- these questions:
-- - Is it going to be unique across all albums released by all companies?
-- - Will we always have one?


-- 3. To speed up queries, which columns are good candidates for indexes?

-- Answer:
-- Primary key columns get indexes by default, but we should add an index
-- to the album_id foreign key column in the songs table because we'll use
-- it in table joins. It's likely that we'll query these tables to search
-- by titles and artists, so those columns in both tables should get indexes
-- too. The album_release_date in albums also is a candidate if we expect
-- to perform many queries that include date ranges.



