let result = [] // response data array
let option = '' // sort selection: Carbon/GDP/Price/Saving
let rankType = 0 // 0-default 1-increase -1-decrease
$(function(){
    option = document.getElementById("sort").value
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/countrylist',
        dataType : 'json',
        data: {
            feature_index: 1,
            ranking_index: 0
        },
        success: function(res){
            if (res.code === '200') {
                result = res.result
                addData();
            } else {
                alert('Network error, please try again')
            }
        }
    });
})

function addData() {
    var html = '';
    for(var i=0;i<result.length;i++){
        html += ' <div class="container container-wide">\n' +
            '            <div class="product-wrapper product-layout layout-list">\n' +
            '                <div class="row mtn-30">\n' +
            '                    <div class="col-sm-6 col-lg-4 col-xl-3">\n' +
            '                        <div class="product-item">\n' +
            '                            <div class="product-item__thumb">\n' +
            '                                <a href="http://localhost:3000/countryDetailPage?name='+result[i].country_name+'">\n' +
            '                                    <img class="thumb-primary" src='+result[i].country_image+' alt=""/>\n' +
            '                                </a>\n' +
            '                            </div>\n' +
            '                            <div class="product-item__content">\n' +
            '                                <div class="product-item__info">\n' +
            '                                    <h4 class="title"><a href="http://localhost:3000/countryDetailPage?name='+result[i].country_name+'">'+ result[i].country_name+'</a></h4>\n' +
            '                                    <p class="price"><strong>Carbon Emissions per capita: </strong>'+ result[i].carbon_emissions+ ' metric tons'+'</p>\n' +
            '                                    <p class="price"><strong>GDP: </strong>'+ '$'+ result[i].gdp+' billion'+'</p>\n' +
            '                                    <p class="price"><strong>Price of a solor panel: </strong>'+ '$'+ result[i].price_of_solar_panel+'</p>\n' +
            '                                    <p class="price"><strong>Savings for the country: </strong>'+ '£'+ result[i].savings+'</p>\n' +
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
}

$('#up-arrow-pic').on('click', function () {
    if (option) {
        rankType = 1;
        getRankedList(getFeatureIndex(), rankType);
        $('.up-arrow').css('display','none');
        $('.up-arrow-select').show();
        $('.down-arrow-select').css('display','none');
        $('.down-arrow').show();
    }
})

$('#up-arrow-pic-select').on('click', function () {
    if (option) {
        rankType = 0;
        getRankedList(getFeatureIndex(), rankType);
        $('.up-arrow-select').css('display','none');
        $('.up-arrow').show();
    }
})

$('#down-arrow-pic').on('click', function () {
    if (option) {
        rankType = -1;
        getRankedList(getFeatureIndex(), rankType);
        $('.down-arrow').css('display','none');
        $('.down-arrow-select').show();
        $('.up-arrow-select').css('display','none');
        $('.up-arrow').show();
    }
})

$('#down-arrow-pic-select').on('click', function () {
    if (option) {
        rankType = 0;
        getRankedList(getFeatureIndex(), rankType);
        $('.down-arrow-select').css('display','none');
        $('.down-arrow').show();
    }
})

function getFeatureIndex(){
    let featureIndex = ''
    option = document.getElementById("sort").value
    switch(option) {
        case 'GDP':
            featureIndex = 0
            break;
        case 'Carbon':
            featureIndex = 1
            break;
        case 'Price':
            featureIndex = 2
            break;
        case 'Saving':
            featureIndex = 3
            break;
    }
    return featureIndex
}

function getRankedList(feature_index, ranking_index) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/countrylist',
        dataType : 'json',
        data: {
            feature_index: feature_index,
            ranking_index: ranking_index
        },
        success: function(res){
            if (res.code === '200') {
                $("#product-item").html("");
                result = res.result
                addData();
            } else {
                alert('Network error, please try again')
            }
        }
    });
}

$("#sort").change(function(){
    getRankedList(getFeatureIndex(), rankType)
});


