update user
set user_full_name  = user_full_name,
	telephone = telephone, 
    address_first_line= address_first_line,
    street_name = street_name,
    city = city,
    country = country,
    postcode = postcode
where
    user_id = user_id