# Write your MySQL query statement below
select distinct a.Email from Person a, Person b where a.id <> b.id and a.email = b.email;