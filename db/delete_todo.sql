delete from todo 
where todo_id = $1;

select *
from todo
where user_id = $1
order by todo_id;