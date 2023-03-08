--Inspecting and Modifying Data

CREATE TABLE meat_poultry_egg_inspect
(
	est_number varchar(50) CONSTRAINT est_number_key PRIMARY KEY,
	company varchar(100),
	street varchar(100),
	city varchar(30),
	st varchar(2),
	zip varchar(5),
	phone varchar(14),
	grant_date date,
	activities text,
	dbas text
);

COPY meat_poultry_egg_inspect
FROM 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\practical-sql-main\Chapter_09\MPI_Directory_by_Establishment_Name.csv'
WITH (FORMAT CSV, HEADER, DELIMITER ',');

CREATE INDEX company_idx ON meat_poultry_egg_inspect (company);

SELECT count(*) FROM meat_poultry_egg_inspect;

--Interviewing the Data Set
--Checking if all companies have a different address (HAVING count (*) >1)
SELECT company,
street,
city,
st,
count(*) AS address_count
FROM meat_poultry_egg_inspect
GROUP BY company, street, city, st
HAVING count(*) > 1
ORDER BY company, street, city, st;

--The query returns 23 cases where the same company is listed multiple times at the same address
--One possibility could be that there are two different plants of thesame company at the same address
--Let's investigate to find other possibilities

--Checking for Missing Values (how many companies are in each state?)

SELECT st,
count(*) AS st_count
FROM meat_poultry_egg_inspect
GROUP BY st
ORDER BY st;

--3 Companies return NULL meaning they do not have a state let's find out which ones
SELECT est_number,
company,
city,
st,
zip
FROM meat_poultry_egg_inspect
WHERE st IS NULL;

--Checking for Inconsistent Data Values
SELECT company,
count(*) AS company_count
FROM meat_poultry_egg_inspect
GROUP BY company
ORDER BY company ASC;
--this reveals that the same company was spelled differently 4 times etc


--Checking for Malformed Values Using length()
--zip code should be 5 characters long
SELECT length(zip),
count(*) AS length_count
FROM meat_poultry_egg_inspect
GROUP BY length(zip)
ORDER BY length(zip) ASC;
--however 86=3 and 496=4
--mainly because during conversion of the data some zeros  at the beginning were left out because integers excluded it

--Using the WHERE clause, we can check the details of the results to see which states these shortened ZIP Codes correspond to
SELECT st,
count(*) AS st_count
FROM meat_poultry_egg_inspect
WHERE length(zip) < 5
GROUP BY st
ORDER BY st ASC;

--Modifying Tables, Columns, and Data
--Creating Backup Tables
CREATE TABLE meat_poultry_egg_inspect_backup AS
SELECT * FROM meat_poultry_egg_inspect;

--to verify if they both have the same number of columns
SELECT
(SELECT count(*) FROM meat_poultry_egg_inspect) AS original,
(SELECT count(*) FROM meat_poultry_egg_inspect_backup) AS backup;

--extra cautious by creating a "back up column"
ALTER TABLE meat_poultry_egg_inspect 
ADD COLUMN st_copy varchar(2);
UPDATE meat_poultry_egg_inspect
SET st_copy = st;

--confirm that the values were copied properly
SELECT st,
st_copy
FROM meat_poultry_egg_inspect
ORDER BY st;

--Updating Rows Where Values Are Missing
UPDATE meat_poultry_egg_inspect
SET st = 'MN'
WHERE est_number = 'V18677A';

UPDATE meat_poultry_egg_inspect
SET st = 'AL'
WHERE est_number = 'M45319+P45319';

UPDATE meat_poultry_egg_inspect
SET st = 'WI'
WHERE est_number = 'M263A+P263A+V263A';

--if we re-run the NULL code again it should not return anything
SELECT est_number,
company,
city,
st,
zip
FROM meat_poultry_egg_inspect
WHERE st IS NULL;

--Restoring Original Values
UPDATE meat_poultry_egg_inspect
SET st = st_copy;

UPDATE meat_poultry_egg_inspect original
SET st = backup.st
FROM meat_poultry_egg_inspect_backup backup
WHERE original.est_number = backup.est_number;


--Updating Values for Consistency
--create a new column for the standardised spellings
ALTER TABLE meat_poultry_egg_inspect ADD COLUMN company_standard varchar(100);
UPDATE meat_poultry_egg_inspect
SET company_standard = company;

UPDATE meat_poultry_egg_inspect
SET company_standard = 'Armour-Eckrich Meats'
WHERE company LIKE 'Armour%';
 
--compare the two columns for all the compnay names where the word "Armor" appears
SELECT company, company_standard
FROM meat_poultry_egg_inspect
WHERE company LIKE 'Armour%';

--Repairing ZIP Codes Using Concatenation (with less than 5 characters)
--the double-pipe string operator (||) performs concatenation
--add a back up column first
ALTER TABLE meat_poultry_egg_inspect ADD COLUMN zip_copy varchar(5);
UPDATE meat_poultry_egg_inspect
SET zip_copy = zip;

--add 2 zeros in front
UPDATE meat_poultry_egg_inspect
SET zip = '00' || zip
WHERE st IN('PR','VI') AND length(zip) = 3;

--add 1 zero in front
UPDATE meat_poultry_egg_inspect
SET zip = '0' || zip
WHERE st IN('CT','MA','ME','NH','NJ','RI','VT') AND length(zip) = 4;

--Updating Values Across Tables
CREATE TABLE state_regions 
(
st varchar(2) CONSTRAINT st_key PRIMARY KEY,
region varchar(20) NOT NULL
);

COPY state_regions
FROM 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\practical-sql-main\Chapter_09\state_regions.csv'
WITH (FORMAT CSV, HEADER, DELIMITER ',');


ALTER TABLE meat_poultry_egg_inspect ADD COLUMN inspection_date date;
UPDATE meat_poultry_egg_inspect inspect
SET inspection_date = '2019-12-01'
WHERE EXISTS (SELECT state_regions.region
FROM state_regions
WHERE inspect.st = state_regions.st
AND state_regions.region = 'New England');

SELECT st, inspection_date
FROM meat_poultry_egg_inspect
GROUP BY st, inspection_date
ORDER BY st;

--Deleting Unnecessary Data
--Deleting Rows from a Table (remove the companies in Puerto Rico and the Virgin Islands)
DELETE FROM meat_poultry_egg_inspect
WHERE st IN('PR','VI');

--Deleting a Column from a Table
ALTER TABLE meat_poultry_egg_inspect DROP COLUMN zip_copy;

--Deleting a table from a database
DROP TABLE meat_poultry_egg_inspect_backup;

--Using Transaction Blocks to Save or Revert Changes
/*START TRANSACTION signals the start of the transaction block. In
PostgreSQL, you can also use the non-ANSI SQL BEGIN keyword.
COMMIT signals the end of the block and saves all changes.
ROLLBACK signals the end of the block and reverts all changes.*/

--we are making a deleberate mistake so that we can discard the changes
START TRANSACTION;
UPDATE meat_poultry_egg_inspect
SET company = 'AGRO Merchants Oakland LLC'
WHERE company = 'AGRO Merchants Oakland, LLC';

SELECT company
FROM meat_poultry_egg_inspect
WHERE company LIKE 'AGRO%'
ORDER BY company;

ROLLBACK; ---after rolling back you will be back to where you started, changes will only be made after you commit

--Improving Performance When Updating Large Tables
		
DROP TABLE meat_poultry_egg_inspect_backup
CREATE TABLE meat_poultry_egg_inspect_backup AS
SELECT *,
'2018-02-07'::date AS reviewed_date
FROM meat_poultry_egg_inspect;

