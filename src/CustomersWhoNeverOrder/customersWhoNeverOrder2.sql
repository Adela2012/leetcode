# Write your MySQL query statement below
select a.Name as Customers from Customers a left join Orders b on b.CustomerId = a.id where b.id is null