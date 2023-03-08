--Statistical Functions in SQL

/* 	Brief Description
	The chapter is about exploring statistical functions in SQL.
	These include ways to find relationships among variables using statistics functions,
	creating rankings from ordered data, and properly comparing raw numbers by turning them into rates
*/

--Creating a Census Stats Table
DROP TABLE acs_2011_2015_stats;

CREATE TABLE acs_2011_2015_stats
(
	geoid varchar(14) CONSTRAINT geoid_key PRIMARY KEY,
	county varchar(50) NOT NULL,
	st varchar(20) NOT NULL,
	pct_travel_60_min numeric(5,3) NOT NULL,
	pct_bachelors_higher numeric(5,3) NOT NULL,
	pct_masters_higher numeric(5,3) NOT NULL,
	median_hh_income integer,
	CHECK (pct_masters_higher <= pct_bachelors_higher)
);

COPY acs_2011_2015_stats
FROM 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\practical-sql-main\Chapter_10\acs_2011_2015_stats.csv'
WITH (FORMAT CSV, HEADER, DELIMITER ',');

SELECT * FROM acs_2011_2015_stats;

/*
	Measuring Correlation with corr(Y, X)

	Correlation 
	coefficient (+/−) 	What it could mean
	
		 0      		No relationship
	.01 to .29   		Weak relationship
	.3 to .59    		Moderate relationship
	.6 to .99    		Strong to nearly perfect relationship
		 1       		Perfect relationship
*/


--using the corr(Y, X) function to discover the relationship between education level and income
SELECT corr(median_hh_income, pct_bachelors_higher)
AS bachelors_income_r
FROM acs_2011_2015_stats;

SELECT
	round(
	corr(median_hh_income, pct_bachelors_higher)::numeric, 2
	) AS bachelors_income_r,
	round(
	corr(pct_travel_60_min, median_hh_income)::numeric, 2
	) AS income_travel_r, --correlation between income and the percentage of those who commute more than an hour to work
	round(
	corr(pct_travel_60_min, pct_bachelors_higher)::numeric, 2
	) AS bachelors_travel_r --correlation of bachelor’s degrees and commuting
	FROM acs_2011_2015_stats; 
	--the : : is there to CAST "convert" the data to an integer with 2 decimal places


--Predicting Values with Regression Analysis (linear equation)
SELECT
	round(
	regr_slope(median_hh_income, pct_bachelors_higher)::numeric, 2
	) AS slope,
	round(
	regr_intercept(median_hh_income, pct_bachelors_higher)::numeric, 2
	) AS y_intercept
	FROM acs_2011_2015_stats;

/*
if x=30 (if 30% of population had B degrees what would be the country's median income)

	Y = 926.95(30) + 27901.15
	Y = 55709.65
*/



--Finding the Effect of an Independent Variable with r-squared "regr_r2"

SELECT round(
regr_r2(median_hh_income, pct_bachelors_higher)::numeric, 3
) AS r_squared
FROM acs_2011_2015_stats;
/*
	about 47 percent of the differences in median household income in a county can be explained by 
	the percentage of people with a bachelor’s degree or higher in that county
*/


--Creating Rankings with SQL
--Ranking with rank() and dense_rank()

CREATE TABLE widget_companies 
(
	id bigserial,
	company varchar(30) NOT NULL,
	widget_output integer NOT NULL
);

INSERT INTO widget_companies 
(
	company, 
	widget_output)
VALUES
	('Morse Widgets', 125000),
	('Springfield Widget Masters', 143000),
	('Best Widgets', 196000),
	('Acme Inc.', 133000),
	('District Widget Inc.', 201000),
	('Clarke Amalgamated', 620000),
	('Stavesacre Industries', 244000),
	('Bowers Widget Emporium', 201000);
	
--ranking "OVER" 	
SELECT company, widget_output,
rank() OVER (ORDER BY widget_output DESC),
dense_rank() OVER (ORDER BY widget_output DESC)
FROM widget_companies;
/*
	because there was a "tie" rank will skip the next number that the tie should have been
	but dense_rank will contiue with the numbering right after the tie as if only 3 companies were above the 4th one
	rank is recommended in practice
*/


--Ranking Within Subgroups with PARTITION BY

CREATE TABLE store_sales 
(
	store varchar(30),
	category varchar(30) NOT NULL,
	unit_sales bigint NOT NULL,
	CONSTRAINT store_category_key PRIMARY KEY (store, category)
);

INSERT INTO store_sales 
(store,
 category,
 unit_sales)
VALUES
	('Broders', 'Cereal', 1104),
	('Wallace', 'Ice Cream', 1863),
	('Broders', 'Ice Cream', 2517),
	('Cramers', 'Ice Cream', 2112),
	('Broders', 'Beer', 641),
	('Cramers', 'Cereal', 1003),
	('Cramers', 'Beer', 640),
	('Wallace', 'Cereal', 980),
	('Wallace', 'Beer', 988);

SELECT category, store, unit_sales,
rank() OVER (PARTITION BY category ORDER BY unit_sales DESC) --rank within a specific category not total sales
FROM store_sales;

--Calculating Rates for Meaningful Comparisons
--A more accurate way to compare these rankings is to turn them into rates which would consider "capacity, etc"

CREATE TABLE fbi_crime_data_2015 
(
	st varchar(20),
	city varchar(50),
	population integer,
	violent_crime integer,
	property_crime integer,
	burglary integer,
	larceny_theft integer,
	motor_vehicle_theft integer,
	CONSTRAINT st_city_key PRIMARY KEY (st, city)
);

COPY fbi_crime_data_2015
FROM 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\practical-sql-main\Chapter_10\fbi_crime_data_2015.csv'
WITH (FORMAT CSV, HEADER, DELIMITER ',');

SELECT * FROM fbi_crime_data_2015
ORDER BY population DESC;

SELECT city, st, population, property_crime,
round(
	(property_crime::numeric / population) * 1000, 1 --to calculate the rate
	) 
AS pc_per_1000

FROM fbi_crime_data_2015
WHERE population >= 500000
ORDER BY (property_crime::numeric / population) DESC; --order by the rate

--TRY IT YOURSELF

--1.  show the correlation between pct_masters_higher and median_hh_income

SELECT
round(
corr(median_hh_income, pct_masters_higher)::numeric, 2
	)
AS masters_income_relationship
FROM acs_2011_2015_stats;
--the rate is lower because in my opinion a masters isn't always accompanied by a pay raise


/*	2.
 	In the FBI crime data, which cities with a population of 500,000 or more have
	the highest rates of motor vehicle thefts
*/

SELECT city, st, population, motor_vehicle_theft,
round(
	(motor_vehicle_theft::numeric / population) * 100000, 1 --to calculate the rate
	) 
AS motor_vehicle_theft_rate   --per 1000000 (it was not specified, changed the 1000 after seeing the solution

FROM fbi_crime_data_2015
WHERE population >= 500000
ORDER BY (motor_vehicle_theft_rate) DESC; --order by the rate

--Which have the highest violent crime rates (column violent_crime)?

SELECT city, st, population, violent_crime,
round(
	(violent_crime::numeric / population) * 100000, 1 --to calculate the rate
	) 
AS violent_crime_rate_per_100000 --it was not specified, changed the 1000 after seeing the solution

FROM fbi_crime_data_2015
WHERE population >= 500000
ORDER BY (violent_crime_rate_per_100000) DESC; --order by the rate

/*	3. As a bonus challenge
	Revisit the libraries data in the table pls_fy2014_pupld14a in Chapter 8
	Rank library agencies based on the rate of visits per 1,000 population (column popu_lsa),
	and limit the query to agencies serving 250,000 people or more.
*/

SELECT stabr, libname, popu_lsa, visits,
round(
	(visits::numeric / popu_lsa) * 1000, 1 --to calculate the rate
	) 
AS pc_per_1000

FROM pls_fy2014_pupld14a
WHERE popu_lsa >= 250000
ORDER BY (visits::numeric / popu_lsa) DESC;
	
	