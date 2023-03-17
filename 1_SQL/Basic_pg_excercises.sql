--   Retrieve everything from a table
--1. How can you retrieve all the information from the cd.facilities table?
  	 SELECT * 
	 FROM cd.facilities;
	
--   Retrieve specific columns from a table
--2. You want to print out a list of all of the facilities and their cost to members.
--   How would you retrieve a list of only facility names and costs?
	 SELECT name, membercost
	 FROM cd.facilities;

--   Control which rows are retrieved 
--3. How can you produce a list of facilities that charge a fee to members?
	 SELECT * 
	 FROM cd.facilities WHERE membercost > 0;         

--   Control which rows are retrieved - part 2
--4. How can you produce a list of facilities that charge a fee to members,
--   and that fee is less than 1/50th of the monthly maintenance cost? 
--   Return the facid, facility name, member cost, and monthly maintenance of the facilities in question.
	 SELECT facid, name, membercost, monthlymaintenance 
	 FROM cd.facilities 
	 WHERE membercost > 0 
	 AND (membercost < monthlymaintenance/50.0);  
	 
--   Basic string searches	 
--5. How can you produce a list of all facilities with the word 'Tennis' in their name?
	 SELECT *
	 FROM cd.facilities 
	 WHERE name LIKE '%Tennis%';
	 
--   Matching against multiple possible values	 
--6. How can you retrieve the details of facilities with ID 1 and 5? 
--   Try to do it without using the OR operator.
	 SELECT *
	 FROM cd.facilities 
	 WHERE facid IN (1,5);
	 
--   Classify results into buckets	 
--7. How can you produce a list of facilities, with each labelled as 'cheap' or 'expensive'
--   depending on if their monthly maintenance cost is more than $100? 
--   Return the name and monthly maintenance of the facilities in question.
	 SELECT name, 
	 CASE WHEN (monthlymaintenance > 100) 
	 THEN
		'expensive'
	 ELSE
		'cheap'
	 END AS COST
	 FROM cd.facilities;  

--	 Working with dates
--8. How can you produce a list of members who joined after the start of September 2012? 
--   Return the memid, surname, firstname, and joindate of the members in question.
	 SELECT memid, surname, firstname, joindate 
	 FROM cd.members
	 WHERE joindate >= '2012-09-01';  

--	 Removing duplicates, and ordering results
--9. How can you produce an ordered list of the first 10 surnames in the members table?
--   The list must not contain duplicates.
	 SELECT DISTINCT surname 
	 FROM cd.members
	 ORDER BY surname
	 LIMIT 10; 
	 
	 
--	  Combining results from multiple queries
--10. You, for some reason, want a combined list of all surnames and all facility names.
--	  Yes, this is a contrived example :-). Produce that list!
	  SELECT surname 
	  FROM cd.members
	  UNION
	  SELECT name
	  FROM cd.facilities; 
--    Discussion
--    The UNION operator does what you might expect: combines the results of two SQL queries into a single table.
--    The caveat is that both results from the two queries must have the same number of columns and 
--    compatible data types.
--    UNION removes duplicate rows, while UNION ALL does not. Use UNION ALL by default, 
--    unless you care about duplicate results.




--	  Simple aggregation
--11. You'd like to get the signup date of your last member. How can you retrieve this information?
	  SELECT MAX(joindate) 
	  AS latest
	  FROM cd.members;          

--    More aggregation
--12. You'd like to get the first and last name of the last member(s) who signed up - not just the date. 
--    How can you do that? 
	  SELECT firstname, surname, joindate
	  FROM cd.members
	  WHERE joindate = (SELECT MAX(joindate) 
  	  FROM cd.members);
