update todo
set item = $3
where todo_id = $2;

select *
from todo
where user_id = $1
order by todo_id;