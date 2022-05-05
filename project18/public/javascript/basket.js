let result = {} /** Basket data array */
let priceArr = [] /** Array of price of solar panels */
let uuid = "" /** An unique ID to represent a transaction */
$(function(){
    let element = document.getElementById("basket-container");
    if(element.scrollHeight <= element.clientHeight + 20) { /** There is a scroll bar, then fixed the foot bar*/
        document.getElementById("footer-nav-container").style.position = 'fixed'
    }
    if (JSON.parse(window.localStorage.getItem("userBasket")).userId == window.sessionStorage.getItem("userName")) {
        result = JSON.parse(window.localStorage.getItem("userBasket"))
    }
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
                priceArr = res.result;
                addData();
                addTotalAmount();
            } else {
                alert('error')
            }
        }
    });
})

function addData() {
    var html = '';
    if (Object.values(result).length > 0) {
        for(let i=0; i<result.basket.length; i++) {
            html += '<div class="table-item">\n' +
                '         <table>\n' +
                '            <tr>\n' +
                '               <td style="width: 30%;">'+result.basket[i].countryName+'</td>\n' +
                '               <td style="width: 25%;">£'+getPrice(result.basket[i].countryName)+'</td>\n' +
                '               <td style="width: 15%;">\n' +
                '                   <input type="text" value="'+getQty(result.basket[i].countryName)+'" id="number'+result.basket[i].countryName+'" onBlur="numberInput('+result.basket[i].countryName+')" style="width: 80px;height: 35px" />\n' +
                '               </td>\n' +
                '               <td style="width: 30%;">\n' +
                '                   <input class="inputOp" type="button" value="-" id="sub'+result.basket[i].countryName+'" onClick="decrease(\''+result.basket[i].countryName+'\')" />\n' +
                '                   <input class="inputOp" type="button" value="+" id="add'+result.basket[i].countryName+'" onClick="increase(\''+result.basket[i].countryName+'\')" />\n' +
                '               </td>\n' +
                '            </tr>\n' +
                '          </table>\n' +
                '    </div>'
        }
        $('#basket-row').append(html);
        $("#basket-row").trigger("create");
    }
}

function addTotalAmount() {
    let totalAmount = 'Total Amount: <strong style="font-size: 26px;">£'+getTotalAmount()+'</strong>'
    $('#basket-total').empty();
    $('#basket-total').append(totalAmount);
    $("#basket-total").trigger("create");
}

/** Minus button click event */
function decrease(countryName){
    let number = document.getElementById("number"+countryName);
    if (number.value<=0) {
        /** If the value of the input is less than 1, set the value to 1 */
        number.value = 0;
    }else {
        number.value = number.value - 1;
    }
    refreshData(countryName, number.value);
}

/** Input box out of focus event */
function numberInput(countryName){
    let number = document.getElementById("number"+countryName);
    let value = number.value;
    /**  If the value of the input is empty, set the value to 0*/
    if (value=="") {
        number.value = 0;
    }
     /**  If the value of the input is not a number*/
    if (isNaN(value)) {
        number.value = 1;
    }
     /**  If the value of the input is empty, set the value to 1*/
    if (parseInt(value)<=1) {
        number.value = 1;
    }
    refreshData(countryName, number.value);
}

 /** Add button click event */
function increase(countryName){
     let number = document.getElementById("number"+countryName);
     number.value = parseInt(number.value) + 1;
     refreshData(countryName, number.value);
}

/** Refresh the data in basket*/
function refreshData(countryName, qty){
    for(let j=0; j<result.basket.length; j++) {
        if(result.basket[j].countryName == countryName) {
            result.basket[j].qty = parseInt(qty);
        }
    }
    window.localStorage.setItem("userBasket", JSON.stringify(result));
    addTotalAmount();
}

/** Search the quantity of a country in basket*/
function getQty(countryName){
    for(let i=0; i<result.basket.length; i++) {
        if(result.basket[i].countryName == countryName) {
            return result.basket[i].qty;
        }
    }
}

/** Get the price of solar panels, keys-countryName, value-price*/
function getPrice(countryName){
    for(let i=0; i<priceArr.length; i++) {
        if(priceArr[i].country_name == countryName) {
            return parseInt(priceArr[i].price_of_solar_panel);
        }
    }
}

/** Compute the total amount */
function getTotalAmount(){
    let amount = 0
    if (Object.values(result).length > 0) {
        for (let i = 0; i < result.basket.length; i++) {
            amount += getPrice(result.basket[i].countryName) * result.basket[i].qty;
        }
    }
    return amount;
}

/** Generate an unique ID to represent a transaction */
function uniqueId(){
    let num=['0','1','2','3','4','5','6','7','8','9'];
    let [max,min]=[Math.floor(Math.random()*(10-7+1)+1),Math.floor(Math.random()*(17-10+1)+17)];
    num = num.sort(()=>0.4-Math.random()).slice(max,min).slice(0,8).join("");
    let a=new Date().getTime() + num; /** Using timestamp */
    return a
}

/** Send the donation amount */
function confirmDonate(){
    if (getTotalAmount() > 0) {
        uuid = uniqueId()
        let basketSend = []
        for(let i=0;i<result.basket.length;i++) {
            let objItem = {
                "donate_country": String(result.basket[i].countryName),
                "panel_amount": String(result.basket[i].qty),
                "transfer_amount": String(getPrice(result.basket[i].countryName) * result.basket[i].qty)
            }
            basketSend[i] = JSON.stringify(objItem)
        }
        let parmsSend = {
                basket: basketSend,
                uuid: String(uuid),
                username: String(window.sessionStorage.getItem("userName")),
                transfer_amount_total: String(getTotalAmount())
            }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/paypal_start',
            dataType : 'json',
            traditional: true,
            data: parmsSend,
            success: function(res){
                if (res.code == "200") {
                    window.open(res.result)
                } else {
                    alert('error')
                }
            }
        });
    }
}

function gotoResult() {
    // 还需判断交易是否成功
    window.location.href='http://localhost:3000/paymentResultPage'
}


