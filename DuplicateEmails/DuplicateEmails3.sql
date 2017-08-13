# Write your MySQL query statement below
select distinct a.email from person a where exists (select 1 from person b where a.email = b.email limit 1, 1)