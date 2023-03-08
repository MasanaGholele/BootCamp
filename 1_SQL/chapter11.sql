--Working with Dates and Times

SELECT
date_part('year', '2019-12-01 18:37:12 EST'::timestamptz) AS "year",
date_part('month', '2019-12-01 18:37:12 EST'::timestamptz) AS "month",
date_part('day', '2019-12-01 18:37:12 EST'::timestamptz) AS "day",
date_part('hour', '2019-12-01 18:37:12 EST'::timestamptz) AS "hour",
date_part('minute', '2019-12-01 18:37:12 EST'::timestamptz) AS "minute",
date_part('seconds', '2019-12-01 18:37:12 EST'::timestamptz) AS "seconds",
date_part('timezone_hour', '2019-12-01 18:37:12 EST'::timestamptz) AS "tz",
date_part('week', '2019-12-01 18:37:12 EST'::timestamptz) AS "week",
date_part('quarter', '2019-12-01 18:37:12 EST'::timestamptz) AS "quarter",
date_part('epoch', '2019-12-01 18:37:12 EST'::timestamptz) AS "epoch"; --seconds elapsed

SELECT make_date(2018, 2, 22);
SELECT make_time(18, 4, 30.3);
SELECT make_timestamptz(2018, 2, 22, 18, 4, 30.3, 'Europe/Lisbon');

--Retrieving the Current Date and Time
--Comparing current_timestamp and clock_timestamp() during row insert
CREATE TABLE current_time_example 
(
	time_id bigserial,
	current_timestamp_col timestamp with time zone,
	clock_timestamp_col timestamp with time zone
);

INSERT INTO current_time_example 
(current_timestamp_col,
 clock_timestamp_col)
(SELECT current_timestamp, clock_timestamp() --"VALUES"
FROM generate_series(1,1000));

SELECT * FROM current_time_example;

--Finding Your Time Zone Setting
SHOW timezone; --"Africa/Johannesburg"

--time zone abbreviations and names
SELECT * FROM pg_timezone_abbrevs;
SELECT * FROM pg_timezone_names;

--you can use a WHERE clause to look up specific location names or time zones:
SELECT * FROM pg_timezone_names
WHERE name LIKE 'Europe%';

--Setting the Time Zone





