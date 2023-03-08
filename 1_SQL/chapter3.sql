--Understanding Data Types
--In a SQL database, each column in a table can hold one and only one data type

/*
char(n) - will add spaces if you enter less than the max characters
varchar(n) - will not add extra spaces even if you enter less characters i.e no of characters may vary
text - unlimited characters 
*/

CREATE TABLE char_data_types (
varchar_column varchar(10),
char_column char(10),
text_column text
);

INSERT INTO char_data_types
VALUES
('abc', 'abc', 'abc'),
('defghi', 'defghi', 'defghi');

SELECT * FROM char_data_types;
--C:Importing data using the "COPY command"
COPY char_data_types TO 'C:\Users\masan\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\Chapter_03\typetest.txt'
WITH (FORMAT CSV, HEADER, DELIMITER '|');

COPY char_data_types TO 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\typetest.txt'
WITH (FORMAT CSV, HEADER, DELIMITER '|');
/*
The contents should look
like this:

varchar_column|char_column|text_column
abc|abc |abc
defghi|defghi   |defghi

Even though you specified 10 characters for both the varchar and char
columns, only the char column outputs 10 characters every time, padding
unused characters with spaces. The varchar and text columns store only the
characters you inserted.

/*Aditional notes
Example of CSV - Comma Separated Values
John,Doe,"123 Main St., Apartment 200",Hyde Park,NY,845-555-1212
Delimiter
For example, if you received pipe-delimited data, you would
treat the option this way: DELIMITER '|'.*/

Numbers (Integers and Decimals)

decimal(precision,scale)*/

CREATE TABLE number_data_types (
numeric_column numeric(20,2),
real_column real,
double_column double precision
);
INSERT INTO number_data_types
VALUES
(.7, .7, .7),
(2.13579, 2.13579, 2.13579),
(2.1357987654, 2.1357987654, 2.1357987654);

SELECT * FROM number_data_types;

--Trouble with Floating-Point Math is that it can be inacurate
SELECT
numeric_column * 10000000 AS "Fixed",
real_column * 10000000 AS "Float"
FROM number_data_types
WHERE numeric_column = .7;

CREATE TABLE date_time_types (
timestamp_column timestamp with time zone,
interval_column interval
);

INSERT INTO date_time_types
VALUES
('2018-12-31 01:00 EST','2 days'),
('2018-12-31 01:00 -8','1 month'),
('2018-12-31 01:00 Australia/Melbourne','1 century'),
(now(),'1 week');

SELECT * FROM date_time_types;

SELECT
timestamp_column,
interval_column,
timestamp_column - interval_column AS new_date
FROM date_time_types;

SELECT timestamp_column, CAST(timestamp_column AS varchar(10))
FROM date_time_types;

SELECT numeric_column,
CAST(numeric_column AS integer),
CAST(numeric_column AS varchar(6))
FROM number_data_types;

--Casting text with letters of the alphabet as a number is not possible that's why this one will yield an error since a leeter cannot become an integer
SELECT CAST(char_column AS integer) FROM char_data_types;

--CAST Shortcut Notation
SELECT timestamp_column, CAST(timestamp_column AS varchar(10))
FROM date_time_types;

SELECT timestamp_column::varchar(10) --PostgreSQL only (::)
FROM date_time_types;

/*Wrapping Up
You’re now equipped to better understand the nuances of the data formats
you encounter while digging into databases. If you come across monetary
values stored as floating-point numbers, you’ll be sure to convert them to
decimals before performing any math. And you’ll know how to use the right
kind of text column to keep your database from growing too big.*/

--Try it yourself
/*
1.	Your company delivers fruit and vegetables to local grocery stores, and
you need to track the mileage driven by each driver each day to a tenth
of a mile. Assuming no driver would ever travel more than 999 miles in a
day, what would be an appropriate data type for the mileage column in
your table? Why?
*/
numeric(4,1)
---999,tenth - one decimal place


/*
2.	In the table listing each driver in your company, what are appropriate
data types for the drivers’ first and last names? Why is it a good idea to
separate first and last names into two columns rather than having one
larger name column?
*/

varchar(50) --easier to sort out if they are in separate columns

/*3.	
Assume you have a text column that includes strings formatted as dates.
One of the strings is written as '4//2017'. What will happen when you try
to convert that string to the timestamp data type?
*/

SELECT CAST('4//2017' AS timestamp with time zone); --error because of a "wrong" format

