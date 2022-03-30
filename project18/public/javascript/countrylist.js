$(function(){
    var result = []
    // $.ajax({
    //     type: 'POST',
    //     url: 'http://localhost:3000/countrylist',
    //     success: function(res){
    //         if (res.code === '200') {
    //             result = res.result
    //         } else {
    //             alert('error')
    //         }
    //     }
    // });
    var result =  [
        {
            "country_id": 123,
            "country_name": "Tanzania",
            "country_flag": "../img/Tanzania.png",
            "gdp": 62.41,
            "carbon_emissions": 0.21,
            "price_of_solar_panel": 500,
            "savings": 0,
            "introduction": "Tanzania is a country in East Africa within the African Great Lakes region. Only 15 per cent of Tanzanians had access to electric power in 2011, however rising to 35.2 per cent in 2018.In 2013, 49.7 per cent of Tanzania's electricity generation came from natural gas, 28.9 per cent from hydroelectric sources, 20.4 per cent from thermal sources, and 1.0 per cent from outside the country.",
            "CO2Introduction":  "CO2 emissions per capita in the United Republic of Tanzania are equivalent to 0.18 tons per person (based on a population of 53,049,230 in 2016), a decrease by 0.00 over the figure of 0.18 CO2 tons per person registered in 2015; this represents a change of -0.5% in CO2 emissions per capita."
        },
        {
            "country_id": 456,
            "country_name": "Kenya",
            "country_flag": "../img/Kenya.png",
            "gdp": 98.84,
            "carbon_emissions": 0.36,
            "price_of_solar_panel": 600,
            "savings": 100,
            "introduction": "Kenya is a country in Eastern Africa. The largest share of Kenya's electricity supply comes from geothermal energy,followed by hydroelectric stations at dams along the upper Tana River, as well as the Turkwel Gorge Dam in the west. Shortfalls of electricity occur periodically, when drought reduces water flow. To become energy sufficient, Kenya has installed wind power and solar power (over 300 MW each), and aims to build a nuclear power plant by 2027.",
            "CO2Introduction": "CO2 emissions per capita in Kenya are equivalent to 0.308 tons per person (based on a population of 47.6 million in 2019), an increase by 0.238 over the figure of 0.07 CO2 tons per person registered in 2010; this represents a change of 7.4% in CO2 emissions per capita."
        },
        {
            "country_id": 789,
            "country_name": "Ethiopia",
            "country_flag": "../img/Ethiopia.png",
            "gdp": 107.6,
            "carbon_emissions": 0.15,
            "price_of_solar_panel": 550,
            "savings": 320,
            "introduction": "Ethiopia is a landlocked country in the Horn of Africa. Ethiopia has 14 major rivers flowing from its highlands, including the Nile. It has the largest water reserves in Africa. As of 2012, hydroelectric plants represented around 88.2% of the total installed electricity generating capacity. The remaining electrical power was generated from fossil fuels (8.3%) and renewable sources (3.6%). The electrification rate for the total population in 2016 was 42%.",
            "CO2Introduction": "CO2 emissions per capita in Ethiopia are equivalent to 0.123 tons per person (based on a population of 109.5 million in 2018), an increase by 0.043 over the figure of 0.08 CO2 tons per person registered in 2012; this represents a change of 2.5% in CO2 emissions per capita."
        }
    ]
    var html = '';
    for(var i=0;i<result.length;i++){
        html += ' <div class="container container-wide">\n' +
            '            <div class="product-wrapper product-layout layout-list">\n' +
            '                <div class="row mtn-30">\n' +
            '                    <div class="col-sm-6 col-lg-4 col-xl-3">\n' +
            '                        <div class="product-item">\n' +
            '                            <div class="product-item__thumb">\n' +
            '                                <a href="single-product.html">\n' +
            '                                    <img class="thumb-primary" src='+result[i].country_flag+' alt="Product" />\n' +
            '                                </a>\n' +
            '                            </div>\n' +
            '                            <div class="product-item__content">\n' +
            '                                <div class="product-item__info">\n' +
            '                                    <h4 class="title"><a href="single-product.html">'+ result[i].country_name+'</a></h4>\n' +
            '                                    <p class="price"><strong>Carbon Emissions: </strong>'+ result[i].carbon_emissions+ ' million tons'+'</p>\n' +
            '                                    <p class="price"><strong>GDP: </strong>'+ '$'+ result[i].gdp+' billion'+'</p>\n' +
            '                                    <p class="price"><strong>Price of a solor panel: </strong>'+ '$'+ result[i].price_of_solar_panel+'</p>\n' +
            '                                    <p class="price"><strong>Savings for the country: </strong>'+ '£'+ result[i].savings+'</p>\n' +
            '                                </div>\n' +
            '                                <div class="product-item__desc">\n' +
            '                                    <p>'+result[i].introduction+'</p>\n' +
            '                                    <p>'+result[i].CO2Introduction+'</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>'
    }

    $('#product-item').append(html);
    $("#product-item").trigger("create");
})