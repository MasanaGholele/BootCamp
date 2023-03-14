--1. Show first name, last name, and gender of patients who's gender is 'M'

	SELECT (first_name, last_name, gender)
	FROM patients
	WHERE gender = 'M';
	

--2. Show first name and last name of patients who does not have allergies. (null)

	SELECT first_name, last_name
	FROM patients
	WHERE allergies IS NULL;


--3. Show first name of patients that start with the letter 'C'

	SELECT first_name
	FROM patients
	WHERE first_name 
	LIKE'C%';
	

--4. Show first name and last name of patients that weight within the range of 100 to 120 (inclusive)
	
	--My solution
	SELECT first_name, last_name
	FROM patients
	WHERE weight >=100 
	AND weight <=120;
	
	--Their solution
	SELECT
	  first_name,
	  last_name
	FROM patients
	WHERE weight BETWEEN 100 AND 120;
	

--5. Update the patients table for the allergies column. 
--   If the patient's allergies is null then replace it with 'NKA'

	UPDATE patients
	SET allergies = 'NKA'
	WHERE allergies IS NULL;


--6. Show first name and last name concatinated into one column to show their full name.
	
	SELECT
	  CONCAT(first_name, ' ', last_name) AS full_name
	FROM patients;
	
	--alternative solution
	SELECT first_name || ' ' || last_name
	FROM patients;

--7. Show first name, last name, and the full province name of each patient.
--   Example: 'Ontario' instead of 'ON'
	SELECT first_name, last_name, province_name
	FROM patients
	JOIN province_names
	ON patients.province_id = province_names.province_id;
	
	
--8. Show how many patients have a birth_date with 2010 as the birth year.

	SELECT 
	COUNT(*) AS total_patients
	FROM patients
	WHERE YEAR(birth_date) = 2010;

--9. Show the first_name, last_name, and height of the patient with the greatest height.

	--My Solution
	SELECT first_name, last_name, height
	FROM patients
	ORDER BY height DESC
	LIMIT 1;

	--Their Solution
	SELECT first_name, last_name,
	MAX(height) AS height
	FROM patients;
	
	SELECT first_name, last_name, height
	FROM patients
	WHERE height = SELECT max(height)
    FROM patients;
	
	--Their alternative solution
	SELECT first_name, last_name, height
	FROM patients
	WHERE height = (SELECT max(height) FROM patients);
	
	
--10. Show all columns for patients who have one of the following patient_ids: 1,45,534,879,1000
--NOTE: do not use the LIKE % syntax because you are looking for rows not specific values in the row "I think"
	SELECT *
	FROM patients
	WHERE patient_id 
	IN (1, 45, 534, 879, 1000);
	  
	  
--11. Show the total number of admissions

	SELECT 
	COUNT (*) 
	FROM admissions;
	

--12. Show all the columns from admissions where the patient was admitted and discharged on the same day.

	SELECT * 
	FROM admissions
	WHERE admission_date = discharge_date;

--13. Show the patient id and the total number of admissions for patient_id 579.

	SELECT patient_id,
	  COUNT(*) AS total_admissions
	FROM admissions
	WHERE patient_id = 579;
	
	
--14. Based on the cities that our patients live in, show unique cities that are in province_id 'NS'?

	SELECT DISTINCT(city) AS unique_cities
	FROM patients
	WHERE province_id = 'NS';


--15. Write a query to find the first_name, last name and birth date of patients 
--	  who has height greater than 160 and weight greater than 70

	SELECT first_name, last_name, birth_date
	FROM patients
	WHERE height > 160
	AND weight > 70;


--16. Write a query to find list of patients first_name, last_name, and allergies
--   from Hamilton where allergies are not null

	SELECT first_name, last_name, allergies
	FROM patients
	WHERE city = 'Hamilton'
	AND allergies is NOT NULL;
	

--17. Based on cities where our patient lives in, write a query to display the list of 
--    unique city starting with a vowel (a, e, i, o, u).
--    Show the result order in ascending by city. 

	SELECT DISTINCT city
	FROM patients
	WHERE 
		city LIKE 'A%'
		OR city LIKE 'E%'
		OR city LIKE 'I%'
		OR city LIKE 'O%'
		OR city LIKE 'U%'
	ORDER BY city ASC;