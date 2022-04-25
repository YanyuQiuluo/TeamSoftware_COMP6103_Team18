let result = [] // response data array
let countryId = ''
$(function(){
    countryId = parseInt(getUrlParam('id'));
    console.log(countryId)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/country_detail',
        dataType : 'json',
        data: {
            countryID: countryId
        },
        success: function(res){
            if (res.code === '200') {
                result = res.result
                addData();
            } else {
                alert('error')
            }
        }
    });
})

function addData() {
    var html = '';
    html += ' <div class="container container-wide">\n' +
        '            <div class="product-wrapper product-layout layout-list">\n' +
        '                <div class="row mtn-30">\n' +
        '                    <div class="col-sm-6 col-lg-4 col-xl-3">\n' +
        '                        <div class="product-item">\n' +
        '                            <div class="product-item__thumb">\n' +
        '                                <img class="thumb-primary" src='+result.country_image+' alt="" id="countryDetail"/>\n' +
        '                            </div>\n' +
        '                            <div class="product-item__content">\n' +
        '                                <div class="product-item__info">\n' +
        '                                    <h4 class="title">'+ result.country_name+'</a></h4>\n' +
        '                                    <p class="price"><strong>Carbon Emissions per capita: </strong>'+ result.carbon_emissions+ ' metric tons'+'</p>\n' +
        '                                    <p class="price"><strong>GDP: </strong>'+ '$'+ result.gdp+' billion'+'</p>\n' +
        '                                    <p class="price"><strong>Price of a solor panel: </strong>'+ '$'+ result.price_of_solar_panel+'</p>\n' +
        '                                    <p class="price"><strong>Savings for the country: </strong>'+ '£'+ result.savings+'</p>\n' +
        '                                </div>\n' +
        '                                <div class="product-item__desc">\n' +
        '                                    <p>'+ result.country_discription+'</p>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="donate-button">\n' +
        '                           <div class="form-item"><button id="submit">Donate for '+result.country_name+ '</button></div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
    $('#product-item').append(html);
    $("#product-item").trigger("create");
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}


