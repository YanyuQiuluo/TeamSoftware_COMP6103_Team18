select count(user_id)
from transactions
where country_id="456" and status = "success";