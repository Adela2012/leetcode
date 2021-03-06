# Write your MySQL query statement below
select distinct a.* from stadium a, stadium b, stadium c 
where a.people >= 100 
and b.people >= 100 
and c.people >= 100    
and (
    (a.id = b.id -1  and a.id = c.id -2)
    or (a.id = b.id +1  and a.id = c.id -1)
    or (a.id = b.id +2  and a.id = c.id +1)
    )
order by a.date