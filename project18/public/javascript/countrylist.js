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
            "gdp": 62.41,
            "carbon_emissions": 0.21,
            "price_of_solar_panel": 500,
            "savings": 0
        },
        {
            "country_id": 456,
            "country_name": "Kenya",
            "gdp": 98.84,
            "carbon_emissions": 0.36,
            "price_of_solar_panel": 600,
            "savings": 100
        },
        {
            "country_id": 789,
            "country_name": "Ethiopia",
            "gdp": 107.6,
            "carbon_emissions": 0.15,
            "price_of_solar_panel": 550,
            "savings": 320
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
            '                                    <img class="thumb-primary" src="../img/France.png" alt="Product" />\n' +
            '                                </a>\n' +
            '                            </div>\n' +
            '                            <div class="product-item__content">\n' +
            '                                <div class="product-item__info">\n' +
            '                                    <h4 class="title"><a href="single-product.html">'+result[i].country_name+'</a></h4>\n' +
            '                                    <span class="price"><strong>Price:</strong> $165.00</span>\n' +
            '                                </div>\n' +
            '                                <div class="product-item__desc">\n' +
            '                                    <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor\n' +
            '                                        again is there anyone who loves or pursues or desires to obtain pain of itself,\n' +
            '                                        because it is pain, but because occasionally circles</p>\n' +
            '                                    <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor\n' +
            '                                        again is there anyone who loves or pursues or desires to obtain pain of itself,\n' +
            '                                        because it is pain, but because occasionally circes occur in and pain can\n' +
            '                                        procure him some great ple cum soluta nobis est eligendi optio</p>\n' +
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