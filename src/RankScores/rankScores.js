select 
Score, 
(select count(distinct score) from Scores where score >= s.score) Rank
from Scores s
order by score desc