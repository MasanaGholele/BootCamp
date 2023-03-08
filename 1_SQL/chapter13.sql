--Mining Text to Find Meaningful Data

--Formatting Text Using String Functions - Case formatting

--The upper(string) function capitalizes all alphabetical characters of a string passed to it.
SELECT upper('hello');

--The lower(string) function lowercases all alphabetical characters while keeping nonalphabet characters unchanged.
SELECT lower('HELLO');

--The initcap(string) function capitalizes the first letter of each word.
SELECT initcap('at the end of the day');


--Character Information
SELECT char_length(' Pat '); --ANSI
SELECT length(' Pat '); --non_ANSI

SELECT position(',' in 'Tan,Bella');
SELECT position('a' in 'Masana');

SELECT trim('s' from 'socks');

SELECT trim(trailing 's' from 'socks'); --removes only the "last s"

SELECT trim(leading 's' from 'socks'); --removes only the "first s"

SELECT trim(' Pat '); --removes spaces by default even if you didn't "specify" 

SELECT char_length(trim(' Pat '));  --to confirm the length of the trimmed string (new)

SELECT rtrim('socks', 's'); --removes only the s on the right end of the string (PostgreSQL variation)

SELECT ltrim('socks', 's'); --removes only the s on the left end of the string (PostgreSQL variation)



--Extracting Characters
SELECT left('703-555-1212', 3); --to specify that you want the first three characters of the string starting from the left i.e. the area code

SELECT right('703-555-1212', 3); --to specify that you want the last three characters of the string from the right

SELECT right('703-555-1212', 8); --to specify that you want the last eight characters of the string from the right i.e. the rest of the phone number

--Replacing Characters
SELECT replace ('bat','b', 'c');


CREATE TABLE crime_reports (
	crime_id bigserial PRIMARY KEY,
	date_1 timestamp with time zone,
	date_2 timestamp with time zone,
	street varchar(250),
	city varchar(100),
	crime_type varchar(100),
	description text,
	case_number varchar(50),
	original_text text NOT NULL
	);

COPY crime_reports (original_text)
FROM 'C:\Users\masan\OneDrive\Documents\Boot_Camp\1_SQL\practical-sql-main\Chapter_13\crime_reports.csv'
WITH (FORMAT CSV, HEADER OFF, QUOTE '"');

SELECT original_text FROM crime_reports;

SELECT * FROM crime_reports;

--Using regexp_match() to find the first date
SELECT crime_id,
regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}')
FROM crime_reports;

--Matching the Second Date When Present
SELECT crime_id,
regexp_matches(original_text, '\d{1,2}\/\d{1,2}\/\d{2}', 'g') 
FROM crime_reports;
--the "g" flag, returns each match the expression finds as a row in the results
--rather than returning just the first match.

--upon observation the first block of text showed the two dates separated by a hyphen sp we can just look for all
--the dates that have a hyphen to determine which listings have a second date
SELECT crime_id,
regexp_match(original_text, '-\d{1,2}\/\d{1,2}\/\d{2}')
FROM crime_reports;

-- we don’t want to include the hyphen (invalid format for the timestamp), so we need to exclude it 

SELECT crime_id,
regexp_match(original_text, '-(\d{1,2}\/\d{1,2}\/\d{1,2})')
FROM crime_reports;
--now that the hyphen is outside of the () it'll return only the date

--Matching Additional Crime Report Elements


