# Write your MySQL query statement below
select Id from Weather a where a.Temperature > (select b.Temperature from Weather b where TO_DAYS(a.Date) - TO_DAYS(b.Date) = 1)