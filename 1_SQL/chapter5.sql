--Adding, Subtracting, and Multiplying
SELECT 2 + 2;
SELECT 9 - 1;
SELECT 3 * 4;

--Division and Modulo(remainder)
SELECT 11 / 6; --returns no decimals
SELECT 11 % 6; --returns the remainder
SELECT 11.0 / 6; --returns with decimals 
SELECT CAST (11 AS numeric(3,1)) / 6; --returns with decimals

--Exponents, Roots, and Factorials
SELECT 3 ^ 4;
SELECT |/ 10; --yields a squareroot
SELECT sqrt(10); --yields a squareroot (another method)
SELECT ||/ 10; --yields a cuberoot
SELECT 4 !; --ERROR this method was taken out of SQL
SELECT factorial (4); --use a function instead 

--Minding the Order of Operations - BODMAS
SELECT 7 + 8 * 9;
SELECT (7 + 8) * 9;

SELECT 3 ^ 3 - 1;
SELECT 3 ^ (3 - 1);

--Doing Math Across Census Table Columns
SELECT geo_name,
state_us_abbreviation AS "st",
p0010001 AS "Total Population",
p0010003 AS "White Alone",
p0010004 AS "Black or African American Alone",
p0010005 AS "Am Indian/Alaska Native Alone",
p0010006 AS "Asian Alone",
p0010007 AS "Native Hawaiian and Other Pacific Islander Alone",
p0010008 AS "Some Other Race Alone",
p0010009 AS "Two or More Races"
FROM us_counties_2010;

--Adding and Subtracting Columns
SELECT geo_name,
state_us_abbreviation AS "st",
p0010003 AS "White Alone",
p0010004 AS "Black Alone",
p0010003 + p0010004 AS "Total White and Black"
FROM us_counties_2010;

--Should return a zero because you are subtracting the "total" from the sum of all the 7 population groups
SELECT geo_name, state_us_abbreviation AS "st", --selecting from the original columns
	p0010001 AS "Total", --original total column
	p0010003 + p0010004 + p0010005 + p0010006 + p0010007 + p0010008 + p0010009 AS "All Races", --
	(p0010003 + p0010004 + p0010005 + p0010006 + p0010007+ p0010008 + p0010009) - p0010001 AS "Difference" 
	--take those same columns and subtract the total column
FROM us_counties_2010
ORDER BY "Difference" DESC;


--Finding Percentages of the Whole
SELECT geo_name, state_us_abbreviation AS "st",
(CAST (p0010006 AS numeric(8,1)) / p0010001) * 100 AS "pct_asian" 
--specific (asian) column divided by the total column
FROM us_counties_2010
ORDER BY "pct_asian" DESC;

--Tracking Percent Change
CREATE TABLE percent_change (
department varchar(20),
spend_2014 numeric(10,2),
spend_2017 numeric(10,2)
);

INSERT INTO percent_change
VALUES
('Building', 250000, 289000),
('Assessor', 178556, 179500),
('Library', 87777, 90001),
('Clerk', 451980, 650000),
('Police', 250000, 223000),
('Recreation', 199000, 195000);

SELECT department, spend_2014, spend_2017,
round( 
	(spend_2017 - spend_2014) /spend_2014 * 100, 1) AS "pct_change"
FROM percent_change;

--Aggregate Functions for Averages and Sums
SELECT sum(p0010001) AS "County Sum",
round(avg(p0010001), 0) AS "County Average"
FROM us_counties_2010;

--Finding the Median Percentile Functions
CREATE TABLE percentile_test (
numbers integer
);
INSERT INTO percentile_test 
(numbers)
VALUES
(1),
(2),
(3),
(4), 
(5),
(6);

SELECT * FROM percentile_test;


SELECT
	percentile_cont(.5)    --Continuous
	WITHIN GROUP (ORDER BY numbers),
	percentile_disc(.5)    --Dicsreet (no decimals, whole number integer)       
	WITHIN GROUP (ORDER BY numbers)
FROM percentile_test;

--Median and Percentiles with Census Data
--To show the difference between the median and the average
SELECT sum(p0010001) AS "County Sum",
	round(avg(p0010001), 0) AS "County Average",
	percentile_cont(.5)
	--Because the accepted method of calculating medians is to average the two middle values in an
	--even-numbered set, use percentile_cont(.5) to find a median. (to find the half between the two numbers)
	WITHIN GROUP (ORDER BY p0010001) AS "County Median"
FROM us_counties_2010;

--Finding Other Quantiles with Percentile Functions
SELECT percentile_cont(array[.25,.5,.75])
WITHIN GROUP (ORDER BY p0010001) AS "quartiles"
FROM us_counties_2010; --to return quartiles as an array

SELECT unnest( 
percentile_cont(array[.25,.5,.75])
WITHIN GROUP (ORDER BY p0010001))    AS "quartiles"
FROM us_counties_2010; --"unnest them from array to rows"

--Creating a median() Function
CREATE OR REPLACE FUNCTION _final_median(anyarray)
RETURNS float8 AS
$$
WITH q AS
(
SELECT val
FROM unnest($1) val
WHERE VAL IS NOT NULL
ORDER BY 1
),
cnt AS
(
SELECT COUNT(*) AS c FROM q
)
SELECT AVG(val)::float8
FROM
(
SELECT val FROM q
LIMIT 2 - MOD((SELECT c FROM cnt), 2)
OFFSET GREATEST(CEIL((SELECT c FROM cnt) / 2.0) - 1,0)
) q2;
$$
LANGUAGE sql IMMUTABLE;


CREATE AGGREGATE median(anyelement) (
SFUNC=array_append,
STYPE=anyarray,
FINALFUNC=_final_median,
INITCOND='{}'
); --could not create it as returned an error but the functions below work when you run them

SELECT sum(p0010001) AS "County Sum",
round(AVG(p0010001), 0) AS "County Average",
median(p0010001) AS "County Median",
percentile_cont(.5)
WITHIN GROUP (ORDER BY p0010001) AS "50th Percentile"
FROM us_counties_2010; --is this different from the inital calculations of median and average?

SELECT mode() WITHIN GROUP (ORDER BY p0010001)
FROM us_counties_2010;

/*
Wrapping up
At this point, you have the basics of sums, averages, and percentiles. You’ve
also learned how a median can be a fairer assessment of a group of values
than an average. That alone can help you avoid inaccurate conclusions.
*/


--Try it yourself
/*
1.	Write a SQL statement for calculating the area of a circle whose radius is 5 inches. 
(If you don’t remember the formula, it’s an easy web search.) Do
you need parentheses in your calculation? Why or why not?
*/
SELECT 3.14 * 5 ^ 2; --no need for brackets "parantheses"

SELECT 3.14 * (5 ^ 2); --but if you put them in for the sake of clarity the results will stil be same

/*
2.	Using the 2010 Census county data, find out which New York state county
has the highest percentage of the population that identified as “AmericanIndian/Alaska Native Alone.”
What can you learn about that county from online research that explains the relatively large proportion 
of American Indian population compared with other New York counties?
*/

SELECT geo_name,
       state_us_abbreviation,
       p0010001 AS total_population,
       p0010005 AS american_indian_alaska_native_alone,
       round((CAST (p0010005 AS numeric(8,1)) / p0010001) * 100)
           AS percent_american_indian_alaska_native_alone
FROM us_counties_2010
WHERE state_us_abbreviation = 'NY'
ORDER BY percent_american_indian_alaska_native_alone DESC;
Answer
--Franklin County, N.Y., with 7.4%. The county contains the St. Regis Mohawk
-- Reservation. https://en.wikipedia.org/wiki/St._Regis_Mohawk_Reservation


--3.	Was the 2010 median county population higher in California or New York?

-- First, you can find the median for each state one at a time:

SELECT percentile_cont(.5)
        WITHIN GROUP (ORDER BY p0010001)
FROM us_counties_2010
WHERE state_us_abbreviation = 'NY';

SELECT percentile_cont(.5)
        WITHIN GROUP (ORDER BY p0010001)
FROM us_counties_2010
WHERE state_us_abbreviation = 'CA';

-- Or both in one query (credit: https://github.com/Kennith-eng)

SELECT state_us_abbreviation,
       percentile_cont(0.5)
          WITHIN GROUP (ORDER BY p0010001) AS median
FROM us_counties_2010
WHERE state_us_abbreviation IN ('NY', 'CA')
GROUP BY state_us_abbreviation;

-- Finally, this query shows the median for each state:

SELECT state_us_abbreviation,
       percentile_cont(0.5)
          WITHIN GROUP (ORDER BY p0010001) AS median
FROM us_counties_2010
GROUP BY state_us_abbreviation;

