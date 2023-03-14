--1. Show unique birth years from patients and order them by ascending.

	SELECT
	  DISTINCT YEAR(birth_date) AS birth_year
	FROM patients
	ORDER BY birth_year;
	
	--Alternative solution
	SELECT 
	year(birth_date)
	FROM patients
	GROUP BY year(birth_date)
	
	
--2. Show unique first names from the patients table which only occurs once in the list.
--   For example, if two or more people are named 'John' in the first_name column 
--   then don't include their name in the output list.
--   If only 1 person is named 'Leo' then include them in the output.
	
	SELECT first_name
	FROM patients
	GROUP BY first_name
	HAVING COUNT(first_name) = 1
	
	--Alternative Solution
	SELECT first_name
	FROM (
		SELECT
		  first_name,
		  count(first_name) AS occurrencies
		FROM patients
		GROUP BY first_name
	  )
	WHERE occurrencies = 1
	

--3. Show patient_id and first_name from patients where their first_name start and ends with 's' 
--   and is at least 6 characters long.

	SELECT
	  patient_id,
	  first_name
	FROM patients
	WHERE first_name LIKE 's____%s';
	
	--Alternative Solution
	SELECT
	  patient_id,
	  first_name
	FROM patients
	WHERE 
	  first_name LIKE 's%'
	  AND first_name LIKE '%s'
	  AND len(first_name) >= 6;
	
	--Alternative Solution
	SELECT
	  patient_id,
	  first_name
	FROM patients
	WHERE
	  first_name LIKE 's%s'
	  AND len(first_name) >= 6;
	  
--4. Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'.
--   Primary diagnosis is stored in the admissions table.

	SELECT
	  patients.patient_id,
	  first_name,
	  last_name
	FROM patients
	  JOIN admissions ON admissions.patient_id = patients.patient_id
	WHERE diagnosis = 'Dementia';
	
	--Alternative Solution
	SELECT
	  patient_id,
	  first_name,
	  last_name
	FROM patients
	WHERE patient_id 
	IN (SELECT patient_id
		FROM admissions
		WHERE diagnosis = 'Dementia');
		
--5. Display every patient's first_name.
--   Order the list by the length of each name and then by alphbetically
	
	SELECT first_name
	FROM patients
	ORDER BY
	  len(first_name),
	  first_name;


--6. Show the total amount of male patients and the total amount of female patients in the patients table.
--   Display the two results in the same row.

	SELECT 
	  (SELECT count(*) FROM patients WHERE gender='M') AS male_count, 
	  (SELECT count(*) FROM patients WHERE gender='F') AS female_count;
  
  --Alternative Solution 
	SELECT 
	  SUM(Gender = 'M') as male_count, 
	  SUM(Gender = 'F') AS female_count
	FROM patients;
	
	--Alternative Solution 
	SELECT
	  SUM(CASE WHEN gender = 'M' THEN 1 END) AS male_count,
	  SUM(CASE WHEN gender = 'F' THEN 1 END) AS female_count 
	FROM patients;
  
 
--7. Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'.
--   Show results ordered ascending by allergies then by first_name then by last_name.

	SELECT
	  first_name,
	  last_name,
	  allergies
	FROM patients
	WHERE
	  allergies IN ('Penicillin', 'Morphine')
	ORDER BY
	  allergies,
	  first_name,
	  last_name;
	  
	  --Alternative Solution
	SELECT
	  first_name,
	  last_name,
	  allergies
	FROM
	  patients
	WHERE
	  allergies = 'Penicillin'
	  OR allergies = 'Morphine'
	ORDER BY
	  allergies ASC,
	  first_name ASC,
	  last_name ASC; 
	  
--8. Show patient_id, diagnosis from admissions. Find patients admitted multiple times for the same diagnosis.

	SELECT
	  patient_id,
	  diagnosis
	FROM admissions
	GROUP BY
	  patient_id,
	  diagnosis
	HAVING COUNT(*) > 1;
	
	
--9. Show the city and the total number of patients in the city.
--   Order from most to least patients and then by city name ascending.

	SELECT
	  city,
	  COUNT(*) AS num_patients
	FROM patients
	GROUP BY city
	ORDER BY num_patients DESC, city ASC;
	
--10. Show first name, last name and role of every person that is either patient or doctor.
--    The roles are either "Patient" or "Doctor"

	SELECT first_name, last_name, 'Patient' AS ROLE FROM patients
		union all
	SELECT first_name, last_name, 'Doctor' FROM doctors;
	
--11. Show all allergies ordered by popularity. Remove NULL values from query.

	SELECT
	  allergies,
	  COUNT(*) AS total_diagnosis
	FROM patients
	WHERE
	  allergies IS NOT NULL
	GROUP BY allergies
	ORDER BY total_diagnosis DESC
	
	--Alternative Solution
	SELECT
	  allergies,
	  COUNT(*)
	FROM patients
	WHERE allergies NOT NULL
	GROUP BY allergies
	ORDER BY count(*) DESC
	
	--Alternative Solution
	SELECT
	  allergies,
	  COUNT(allergies) AS total_diagnosis
	FROM patients
	GROUP BY allergies
	HAVING
	  allergies IS NOT NULL
	ORDER BY total_diagnosis DESC


--12. Show all patient's first_name, last_name, and birth_date who were born in the 1970s decade. 
--    Sort the list starting from the earliest birth_date.
	SELECT
	  first_name,
	  last_name,
	  birth_date
	FROM patients
	WHERE
	  YEAR(birth_date) BETWEEN 1970 AND 1979
	ORDER BY birth_date ASC;

	--Alternative Solution
	SELECT
	  first_name,
	  last_name,
	  birth_date
	FROM patients
	WHERE
	  birth_date >= '1970-01-01'
	  AND birth_date < '1980-01-01'
	ORDER BY birth_date ASC
	
	--Alternative Solution
	SELECT
	  first_name,
	  last_name,
	  birth_date
	FROM patients
	WHERE year(birth_date) LIKE '197%'
	ORDER BY birth_date ASC
	
	
--13. We want to display each patient's full name in a single column. 
--    Their last_name in all upper letters must appear first, then first_name in all lower case letters.
--    Separate the last_name and first_name with a comma. Order the list by the first_name in decending order
--    EX: SMITH,jane

	SELECT
	  CONCAT(UPPER(last_name), ',', LOWER(first_name)) AS new_name_format
	FROM patients
	ORDER BY first_name DESC;
	
	--Alternative Solution
	SELECT
	  UPPER(last_name) || ',' || LOWER(first_name) AS new_name_format
	FROM patients
	ORDER BY first_name DESC;
	
	
--14. Show the province_id(s), sum of height;
--    where the total sum of its patient's height is greater than or equal to 7,000.

	SELECT
	  province_id,
	  SUM(height) AS sum_height
	FROM patients
	GROUP BY province_id
	HAVING sum_height >= 7000;
	
	
--15. Show the difference between the largest weight and smallest weight 
--    for patients with the last name 'Maroni'

	SELECT
	  (MAX(weight) - MIN(weight)) AS weight_delta
	FROM patients
	WHERE last_name = 'Maroni';
	
	
--16. Show all of the days of the month (1-31) and how many admission_dates occurred on that day.
--    Sort by the day with most admissions to least admissions.
	SELECT
	  DAY(admission_date) AS day_number,
	  COUNT(*) AS number_of_admissions
	FROM admissions
	GROUP BY day_number
	ORDER BY number_of_admissions DESC;
	
--17. Show all columns for patient_id 542's most recent admission_date.

	SELECT *
	FROM admissions
	WHERE patient_id = 542
	GROUP BY patient_id
	HAVING admission_date = MAX(admission_date);
  
  	--Alternative Solution
	SELECT *
	FROM admissions
	WHERE patient_id = '542'
	AND admission_date = (SELECT MAX(admission_date)FROM admissions WHERE patient_id = '542');
	
	--Alternative Solution
	SELECT *
	FROM admissions
	WHERE patient_id = 542
	ORDER BY admission_date DESC
	LIMIT 1

	--Alternative Solution
	SELECT *
	FROM admissions
	GROUP BY patient_id
	HAVING patient_id = 542
	AND MAX(admission_date)


--18. Show patient_id, attending_doctor_id, and diagnosis for admissions that match one of the two criteria:

--    Criteria 1. patient_id is an odd number and attending_doctor_id is either 1, 5, or 19.
--    Criteria 2. attending_doctor_id contains a 2 and the length of patient_id is 3 characters.

	SELECT
	  patient_id,
	  attending_doctor_id,
	  diagnosis
	FROM admissions
	WHERE (attending_doctor_id IN (1, 5, 19) AND patient_id % 2 != 0)
	OR (attending_doctor_id LIKE '%2%' AND len(patient_id) = 3);
	


--19. Show first_name, last_name, and the total number of admissions attended for each doctor.
--    Every admission has been attended by a doctor.

	SELECT
	  first_name,
	  last_name,
	  COUNT(*) AS admissions_total
	FROM admissions AS ad
	JOIN doctors AS docs 
	ON docs.doctor_id = ad.attending_doctor_id
	GROUP BY attending_doctor_id;
	
	--Alternative Solution
	SELECT
	  first_name,
	  last_name,
	  COUNT(*)
	FROM
	  doctors AS docs,
	  admissions AS ad
	WHERE
	  docs.attending_doctor_id = docs.doctor_id
	GROUP BY docs.doctor_id;

--19. For each doctor, display their id, full name, and the first and last admission date they attended.
	SELECT doctor_id, first_name || ' ' || last_name AS full_name,
	MIN(admission_date) AS first_admission_date,
	MAX(admission_date) AS last_admission_date
	FROM admissions AS ad
	JOIN doctors AS docs 
	ON ad.attending_doctor_id = docs.doctor_id
	GROUP BY doctor_id;


--20. Display the total amount of patients for each province. Order by descending.

	SELECT province_name,
	COUNT(*) AS patient_count
	FROM patients AS pa
	JOIN province_names AS pr 
	ON pr.province_id = pa.province_id
	GROUP BY pr.province_id
	ORDER BY patient_count DESC;
	
	
--21. For every admission, display the patient's full name, their admission diagnosis,
--    and their doctor's full name who diagnosed their problem.

	SELECT
	  CONCAT(patients.first_name, ' ', patients.last_name) AS patient_name,
	  diagnosis,
	  CONCAT(doctors.first_name,' ',doctors.last_name) AS doctor_name
	FROM patients
	  JOIN admissions ON admissions.patient_id = patients.patient_id
	  JOIN doctors ON doctors.doctor_id = admissions.attending_doctor_id;

--22. Display the number of duplicate patients based on their first_name and last_name.

	SELECT
	  first_name,
	  last_name,
	  COUNT(*) AS num_of_duplicates
	FROM patients
	GROUP BY
	  first_name,
	  last_name
	HAVING COUNT(*) > 1;
	
--23. Display patient's full name, height in the units feet rounded to 1 decimal,
--    weight in the unit pounds rounded to 0 decimals, birth_date, gender non abbreviated.
--    Convert CM to feet by dividing by 30.48.
--    Convert KG to pounds by multiplying by 2.205.

	SELECT
		concat(first_name, ' ', last_name) AS 'patient_name', 
		ROUND(height / 30.48, 1) as 'height "Feet"', 
		ROUND(weight * 2.205, 0) AS 'weight "Pounds"', birth_date,
	CASE
	WHEN 
		gender = 'M' THEN 'MALE' 
		ELSE 'FEMALE' 
		END AS 'gender_type'
	FROM patients;