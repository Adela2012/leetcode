# Write your MySQL query statement below
select Name as Customers from Customers where not exists  (select 1 from Orders where Orders.CustomerId = Customers.Id)