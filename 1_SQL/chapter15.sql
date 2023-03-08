CREATE OR REPLACE VIEW nevada_counties_pop_2010 AS
SELECT geo_name,
state_fips,
county_fips,
p0010001 AS pop_2010
FROM us_counties_2010
WHERE state_us_abbreviation = 'NV'
ORDER BY county_fips;

SELECT *
FROM nevada_counties_pop_2010
LIMIT 5;

--continue from page 270