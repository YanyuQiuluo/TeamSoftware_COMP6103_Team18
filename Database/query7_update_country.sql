update country
set country_name  = country_name,
	gdp = gdp, 
    carbon_emission= carbon_emission,
    price_of_solar_panel = price_of_solar_panel
where
    country_id = Country_Id