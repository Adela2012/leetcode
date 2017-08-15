# Write your MySQL query statement below
SELECT class from courses group by class having count(distinct student) > 4