--Joining Tables in a Rel ational Database
--"Modified table according to how we were taught"

DROP TABLE departments;
CREATE TABLE departments (
	dept_id bigserial CONSTRAINT dept_key PRIMARY KEY,
	dept varchar(100) UNIQUE,
	city varchar(100) UNIQUE
);

INSERT INTO departments 
(
	dept,
	city)	
VALUES
	('Tax', 'Atlanta'),
	('IT', 'Boston');
	
CREATE TABLE employees 
(
	emp_id bigserial CONSTRAINT emp_id_key PRIMARY KEY,
	first_name varchar(100),
	last_name varchar(100),
	salary integer,
	dept_id integer REFERENCES departments (dept_id)
);

INSERT INTO employees 
(
	first_name,
	last_name,
	salary,
	dept_id
)
VALUES
('Nancy', 'Jones', 62500, 1),
('Lee', 'Smith', 59300, 1),
('Soo', 'Nguyen', 83000, 2),
('Janet', 'King', 95000, 2);

SELECT * 
FROM departments AS d
JOIN employees AS e
ON d.dept_id = e.dept_id;

SELECT * 
FROM departments AS d
LEFT JOIN employees AS e
ON d.dept_id = e.dept_id;

SELECT * 
FROM departments AS d
RIGHT JOIN employees AS e
ON d.dept_id = e.dept_id;

--Cross join ( do not specify the ON )
SELECT * 
FROM departments AS d
CROSS JOIN employees AS e



--own code
SELECT (dept,first_name)
FROM departments AS d
JOIN employees AS e
ON d.dept_id = e.dept_id;

CREATE TABLE schools_left (
id integer CONSTRAINT left_id_key PRIMARY KEY,
left_school varchar(30)
);

CREATE TABLE schools_right (
id integer CONSTRAINT right_id_key PRIMARY KEY,
right_school varchar(30)
);

INSERT INTO schools_left (id, left_school) VALUES
	(1, 'Oak Street School'),
	(2, 'Roosevelt High School'),
	(5, 'Washington Middle School'),
	(6, 'Jefferson High School');
	
INSERT INTO schools_right (id, right_school) VALUES
	(1, 'Oak Street School'),
	(2, 'Roosevelt High School'),
	(3, 'Morrison Elementary'),
	(4, 'Chase Magnet Academy'),
	(6, 'Jefferson High School');

SELECT *
FROM schools_left AS sl
JOIN schools_right AS sr
ON sl.id = sr.id;

--Left join
SELECT *
FROM schools_left AS sl
LEFT JOIN schools_right AS sr
ON sl.id = sr.id;

SELECT *
FROM schools_left AS sl
RIGHT JOIN schools_right AS sr
ON sl.id = sr.id;

--Using Full Outer Join
SELECT *
FROM schools_left FULL OUTER JOIN schools_right
ON schools_left.id = schools_right.id;

--Cross Join
SELECT *
FROM schools_left 
CROSS JOIN schools_right;
--With Cross Join you do not specify "ON"


--Using NULL to Find Rows with Missing Values
SELECT *
FROM schools_left LEFT JOIN schools_right
ON schools_left.id = schools_right.id
WHERE schools_right.id IS NULL;

SELECT schools_left.id, schools_left.left_school, schools_right.right_school
FROM schools_left LEFT JOIN schools_right
ON schools_left.id = schools_right.id;

--using AS aliases
SELECT lt.id, lt.left_school, rt.right_school
FROM schools_left AS lt 
LEFT JOIN schools_right AS rt
ON lt.id = rt.id;

--Joining multiple tables

CREATE TABLE schools_enrollment
(
	id integer,
	enrollment integer
);

INSERT INTO schools_enrollment 
(
	id, 
	enrollment)
VALUES
	(1, 360),
	(2, 1001),
	(5, 450),
	(6, 927);
	
CREATE TABLE schools_grades 
(
	id integer,
	grades varchar(10)
);

INSERT INTO schools_grades 
(	
	id, 
	grades)
VALUES
	(1, 'K-3'),
	(2, '9-12'),
	(5, '6-8'),
	(6, '9-12');
	
	--Joining three tables on specific columns
SELECT lt.id, lt.left_school, en.enrollment, gr.grades
FROM schools_left AS lt 
LEFT JOIN schools_enrollment AS en
ON lt.id = en.id
LEFT JOIN schools_grades AS gr
ON lt.id = gr.id;

--Performing Math on Joined Table Columns
--census table 2000 (chap 4 was 2010)
--calculating a percentage from the population data of the two decades

CREATE TABLE us_counties_2000
(
	geo_name varchar(90),
	state_us_abbreviation varchar(2),
	state_fips varchar(2),
	county_fips varchar(3),
	p0010001 integer,
	p0010002 integer,
	p0010003 integer,
	p0010004 integer,
	p0010005 integer,
	p0010006 integer,
	p0010007 integer,
	p0010008 integer,
	p0010009 integer,
	p0010010 integer,
	p0020002 integer,
	p0020003 integer
);

COPY us_counties_2000
FROM 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\practical-sql-main\Chapter_06\us_counties_2000.csv'
WITH (FORMAT CSV, HEADER);

SELECT 
	c2010.geo_name,
	c2010.state_us_abbreviation AS state,
	c2010.p0010001 AS population_2010,
	c2000.p0010001 AS population_2000,
	c2010.p0010001 - c2000.p0010001 AS raw_change,
	round( (CAST(c2010.p0010001 AS numeric(8,1)) - c2000.p0010001)/ c2000.p0010001 * 100, 1 ) AS pct_change
FROM us_counties_2010 c2010 
INNER JOIN us_counties_2000 c2000
ON c2010.state_fips = c2000.state_fips  
AND c2010.county_fips = c2000.county_fips
AND c2010.p0010001 <> c2000.p0010001
ORDER BY pct_change DESC;

/*
	The reason to join on two columns instead of one is that in both tables, we need the combination 
	of a state code and a county code to find a unique county. 
	I’ve added a third condition "<>" to illustrate using an inequality. 
	This limits the join to counties where the p0010001 population column has a different value.
	Since we are trying to find a percentage change, if they are equal it means there was no change
	We combine all three conditions using the AND keyword. Using that syntax, 
	a join happens when all three conditions are satisfied.
*/

--Try it yourself

/* 	1.	
	The table us_counties_2010 contains 3,143 rows, and us_counties_2000 has 3,141.
	That reflects the ongoing adjustments to county-level geographies
	that typically result from government decision making. 
	Using appropriate joins and the NULL value, identify which counties don’t exist in both tables.
	For fun, search online to find out why they’re missing.
*/
--exists in 2010 but not in 2000
SELECT c2010.geo_name, c2010.state_us_abbreviation, c2000.geo_name
FROM us_counties_2010 c2010 
LEFT JOIN us_counties_2000 c2000
	ON c2010.state_fips = c2000.state_fips
	AND c2010.county_fips = c2000.county_fips
WHERE c2000.geo_name IS NULL;
--"Left join means the other table (2010) will join it (2000) on the left"


--exists in 2000 but not in 2010
SELECT c2010.geo_name,
       c2000.geo_name,
       c2000.state_us_abbreviation
FROM us_counties_2010 c2010 
RIGHT JOIN us_counties_2000 c2000
	ON c2010.state_fips = c2000.state_fips
   	AND c2010.county_fips = c2000.county_fips
WHERE c2010.geo_name IS NULL;

--own code to see if it swapping the tables and sticking to left join would work
SELECT c2010.geo_name,
       c2000.geo_name,
       c2000.state_us_abbreviation
FROM  us_counties_2000 c2000
left JOIN us_counties_2010 c2010
	ON c2010.state_fips = c2000.state_fips
   	AND c2010.county_fips = c2000.county_fips
WHERE c2010.geo_name IS NULL;


/*
	2. 
	Using either the median() or percentile_cont() functions in Chapter 5, 
	determine the median of the percent change in county population.
*/

-- Using median():
SELECT median
(round( (CAST(c2010.p0010001 AS numeric(8,1)) - c2000.p0010001) / c2000.p0010001 * 100, 1 )) AS median_pct_change
FROM us_counties_2010 c2010 
INNER JOIN us_counties_2000 c2000
	ON c2010.state_fips = c2000.state_fips
  	AND c2010.county_fips = c2000.county_fips;


-- Using percentile_cont():
SELECT percentile_cont(.5)
    WITHIN GROUP (ORDER BY round( 
	(CAST(c2010.p0010001 AS numeric(8,1)) - c2000.p0010001) / c2000.p0010001 * 100, 1 )) AS percentile_50th
FROM us_counties_2010 c2010 INNER JOIN us_counties_2000 c2000
	ON c2010.state_fips = c2000.state_fips
   	AND c2010.county_fips = c2000.county_fips;

/*
	3. 
	Which county had the greatest percentage loss of population between 2000 and 2010?
    Do you have any idea why? Hint: a weather event happened in 2005.

	Answer: St. Bernard Parish, La. It and other Louisiana parishes (the county equivalent name in Louisiana)
	experienced substantial population loss following Hurricane Katrina in 2005.
*/

SELECT c2010.geo_name,
       c2010.state_us_abbreviation,
       c2010.p0010001 AS pop_2010,
       c2000.p0010001 AS pop_2000,
       c2010.p0010001 - c2000.p0010001 AS raw_change,
       round( (CAST(c2010.p0010001 AS DECIMAL(8,1)) - c2000.p0010001) / c2000.p0010001 * 100, 1 ) AS pct_change
FROM us_counties_2010 c2010 
INNER JOIN us_counties_2000 c2000
	ON c2010.state_fips = c2000.state_fips
   	AND c2010.county_fips = c2000.county_fips
ORDER BY pct_change ASC;
--same as that last code except that this time we wanted the losses so the order had to be Ascending 

