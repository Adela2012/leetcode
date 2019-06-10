# Write your MySQL query statement below
select a.Request_at as Day, round((sum(a.status like 'cancelled_by_%')/count(*)), 2) 'Cancellation Rate' 
from trips a 
inner join users b 
on a.Client_id = b.Users_id and b.Banned = 'No' 
where  a.Request_at between '2013-10-01' and '2013-10-03' 
group by a.Request_at