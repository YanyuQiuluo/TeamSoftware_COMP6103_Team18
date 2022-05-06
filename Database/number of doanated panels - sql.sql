select sum(panel_amount)
from transactions
where country_id="456" and status = "success";