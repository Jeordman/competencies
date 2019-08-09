insert into todo
    (user_id, item)
values($1, $2);

select *
from todo
where user_id = $1
order by todo_id;