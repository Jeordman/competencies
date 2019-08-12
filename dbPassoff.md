//alter table---------------------------------

alter table orders
drop column random

//join table----------------------------------

select orders. *
from orders
    join usersPractice_orders on (orders.order_id = usersPractice_orders.order_id)
where user_id = 1

//sub queries (nested select)-------------------

SELECT order_id
FROM usersPractice_orders 
WHERE user_id in (SELECT user_id 
                FROM orders
                WHERE user_id = 2)
    
    

//one many--------------------------------------
done
//one one---------------------------------------
done
//many many-------------------------------------
done


//raw

-- create table usersPractice (
-- user_id serial primary key,
-- username varchar
-- )

-- create table orders (
-- order_id serial primary key,
-- custOrder varchar, 
-- random varchar
-- );

-- alter table orders 
-- drop column random;

-- create table usersPractice_orders (
-- join_table_id serial primary key,
-- user_id integer,
-- order_id integer
-- );

-- insert into usersPractice (username)
-- values ('practice')

-- insert into orders (custOrder)
-- values ('somthing')

-- select * from usersPractice
-- select * from orders

-- insert into usersPractice_orders (user_id, order_id)
-- values (2, 4)

-- select orders. *
-- from orders
--     join usersPractice_orders on (orders.order_id = usersPractice_orders.order_id)
-- where user_id = 1
    
-- SELECT order_id
-- FROM usersPractice_orders 
-- WHERE user_id in (SELECT user_id 
--                 FROM orders
--                 WHERE user_id = 2)
    
    
    
    