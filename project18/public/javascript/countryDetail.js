let result = [] // response data array
let countryId = ''
$(function(){
    countryId = parseInt(getUrlParam('id'));
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
        '                                <div class="product-action">\n' +
        '                                    <div class="product-action-tips">' +
        '                                         <strong>You can reduce carbon emissions by donating solar panels for '+ result.country_name+ ':' +'</strong>\n' +
        '                                    </div>\n' +
        '                                    <input type="button" value="-" id="subtraction" style="width: 40px;height: 35px;font-size: 20px" onClick="decrease()" />\n' +
        '                                    <input type="text" value="0" id="number" onBlur="number()" style="width: 80px;height: 35px" />\n' +
        '                                    <input type="button" value="+" id="add" style="width: 40px;height: 35px;font-size: 20px" onClick="increase()" />\n' +
        '                                    <span>The price of each solar panel for '+ result.country_name+ ' is '+ '<strong>£'+ result.price_of_solar_panel+'</strong></span>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="donate-button">\n' +
        '                           <div class="basket-item"><button id="submit" onClick="add2Basket()">Add to Basket</button></div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
    $('#product-item').append(html);
    $("#product-item").trigger("create");
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //Construct a regular expression object with target parameters
    var r = window.location.search.substr(1).match(reg); //Match target parameters
    if (r != null) return unescape(r[2]);
    return null;
}

// Minus button click event
function decrease(){
    let subtraction = document.getElementById("subtraction");
    let number = document.getElementById("number");
    if (number.value<=0) {
        // If the value of the input is less than 1, set the value to 1
        number.value = 0;
    }else {
        number.value = number.value - 1;
    }
}

// Input box out of focus event
function number(){
    var number = document.getElementById("number");
    var value = number.value;
    // If the value of the input is empty, set the value to 0
    if (value=="") {
        number.value = 0;
    }
    // If the value of the input is not a number
    if (isNaN(value)) {
        number.value = 1;
    }
    // If the value of the input is empty, set the value to 1
    if (parseInt(value)<=1) {
        number.value = 1;
    }
}

// Add button click event
function increase(){
    let add = document.getElementById("add");
    let number = document.getElementById("number");
    number.value = parseInt(number.value) + 1;
}

function add2Basket() {
    if (!window.sessionStorage.getItem("userName")) {
        window.location.href='http://localhost:3000/loginPage'
    } else {
        // 购物车数据发送给后台
        $('.empty-basket').css('display','none');
        $('.not-empty-basket').show();
    }
}

function gotoBasket() {
    if (!window.sessionStorage.getItem("userName")) {
        window.location.href='http://localhost:3000/loginPage'
    } else {
        window.location.href='http://localhost:3000/basketPage'
    }
}



