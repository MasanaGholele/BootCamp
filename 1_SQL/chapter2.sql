--Basic select Syntax
--Selecting the whole table i.e. all columns
SELECT * FROM teachers;

/*Selecting from specific columns
SELECT some_column, another_column, amazing_column FROM table_name;*/
--No need to include the "id" column as it is bigserial
SELECT last_name, first_name, salary FROM teachers;

--Sorting Data with ORDER BY
--Descending order
SELECT first_name, last_name, salary
FROM teachers
ORDER BY salary DESC;

--If you don't specify it will automatically sort it in Ascending order, by default
SELECT first_name, last_name, salary
FROM teachers
ORDER BY salary;

--Sort by a particular column, then by another column
SELECT last_name, school, hire_date
FROM teachers
ORDER BY school ASC, hire_date DESC;

--Filtering Rows with WHERE
--Using the equals operator to find teachers whose first name is Janet:
SELECT first_name, last_name, school
FROM teachers
WHERE first_name = 'Janet';

--Using the equals operator to find just the teachers hired at the Myers Middle School:
SELECT last_name, school, hire_date
FROM teachers
WHERE school = 'Myers Middle School';

--Select all school names in the table but exclude F.D. Roosevelt HS using the not equal operator:
SELECT school
FROM teachers
WHERE school != 'F.D. Roosevelt HS';

--Here we use the less than operator to list teachers hired before January 1, 2000 (using the date format YYYY-MM-DD):
SELECT first_name, last_name, hire_date
FROM teachers
WHERE hire_date < '2000-01-01';

--Here we find teachers who earn $43,500 or more using the >= operator:
SELECT first_name, last_name, salary
FROM teachers
WHERE salary >= 43500;

/*Here we use the BETWEEN operator to find teachers who earn
between $40,000 and $65,000. Note that BETWEEN is inclusive, meaning the
result will include values matching the start and end ranges specified.*/
SELECT first_name, last_name, school, salary
FROM teachers
WHERE salary BETWEEN 40000 AND 65000;

--Using LIKE and ILIKE with WHERE

--to find names that start with the characters sam, and because it’s case sensitive, it will return zero results.
SELECT first_name
FROM teachers
WHERE first_name LIKE 'sam%';

--using the case-insensitive ILIKE, will return Samuel and Samantha from the table:
SELECT first_name
FROM teachers
WHERE first_name ILIKE 'sam%';

--using the underscore to return a "single character" in the first name Samuel
SELECT first_name
FROM teachers
WHERE first_name LIKE 'Sam_el';

/*Additional notes
Percent sign (%) A wildcard matching one or more characters
Underscore (_) A wildcard matching just one character
For example, if you’re trying to find the word baker, the following LIKE
patterns will match it:
LIKE 'b%'
LIKE '%ak%'
LIKE '_aker'
LIKE 'ba_er'*/

--Combining Operators with AND and OR
SELECT *
FROM teachers
WHERE school = 'Myers Middle School'
AND salary < 40000;

SELECT *
FROM teachers
WHERE last_name = 'Cole'
OR last_name = 'Bush';

SELECT *
FROM teachers
WHERE school = 'F.D. Roosevelt HS'
AND (salary < 38000 OR salary > 40000);

--Putting it all together
--!!Pay attention to the order i.e. SELECT, FROM, WHERE, ORDER BY
SELECT first_name, last_name, school, hire_date, salary
FROM teachers
WHERE school LIKE '%Roos%'
ORDER BY hire_date DESC;

--Try it yourself
/*
1.	The school district superintendent asks for a list of teachers in each school.
Write a query that lists the schools in alphabetical order along with teachers
ordered by last name A–Z.
*/
SELECT school, first_name, last_name
FROM teachers
ORDER BY school, last_name;

/*
2.	Write a query that finds the one teacher whose first name starts with the
letter S and who earns more than $40,000.
*/

SELECT first_name, last_name, school, salary
FROM teachers
WHERE first_name LIKE 'S%' 
AND salary > 40000;
--Like is case sensitive so it is best to use a capital "S" to make sure it does not return the 
--other ones that are in the middle of the word

--3.	Rank teachers hired since January 1, 2010, ordered by highest paid to lowest.

SELECT last_name, first_name, school, hire_date, salary
FROM teachers
WHERE hire_date >= '2010-01-01'
ORDER BY salary DESC;
