# Write your MySQL query statement below
 Select b.Name as Department, a.name as Employee, a.Salary 
 from Employee a, Department b 
 where (select count(distinct (c.salary)) 
        from employee c where a.departmentid = c.departmentid and c.salary > a.salary) < 3 
and b.id = a.Departmentid 
order by a.Departmentid,  a.salary desc
