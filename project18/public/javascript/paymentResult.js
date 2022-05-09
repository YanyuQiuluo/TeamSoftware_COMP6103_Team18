let uuid= '' /** An unique ID to represent a transaction */
let result = [] /** response data array */
let carbonArr = [] /** response data array to get carbon_saving_factor */
let totalFootprint = 0 /** Total reduced footprint of this donation */
$(function(){
    // let element = document.getElementById("result-container");
    // if(element.scrollHeight <= element.clientHeight + 20) { /** There is not a scroll bar, then fixed the foot bar*/
    //     document.getElementById("footer-nav-container").style.position = 'fixed'
    // }
    uuid = getUrlParam('id');
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
                carbonArr = res.result
            } else {
                alert(res.msg)
            }
        }
    });
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/pay_history_uuid',
        dataType : 'json',
        data: {
            uuid: String(uuid)
        },
        success: function(res){
            if (res.code === '200') {
                result = res.result
                addData()
            } else {
                alert(res.msg)
            }
        }
    });
})

function addData() {
    let html = '';
    let html1 = ''
    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            html += '<div class="table-item">\n' +
                '         <table>\n' +
                '            <tr>\n' +
                '               <td style="width: 20%;">' + result[i].dataTime + '</td>\n' +
                '               <td style="width: 25%;">' + result[i].country_name + '</td>\n' +
                '               <td style="width: 25%;">' + result[i].panel_amount + '</td>\n' +
                '               <td style="width: 30%;">' + computeFootprint(result[i].country_id,  result[i].panel_amount)+ ' kg</td>\n' +
                '            </tr>\n' +
                '          </table>\n' +
                '    </div>'
        }
        html1 += ' <h4>You will reduce <strong>'+ totalFootprint +' kg </strong> carbon footprint per month through this donation.</h4>'
        $('#result-row').append(html);
        $('#footprint-amount').append(html1);
        $("#result-row").trigger("create");
        $("#footprint-amount").trigger("create");
    }
}

function computeFootprint (countryId, qty) {
    let footprint = 0
    for (let i = 0; i < carbonArr.length; i++) {
        if (carbonArr[i].country_id == countryId) {
            footprint = carbonArr[i].carbon_saving_factor * qty
            totalFootprint = (parseFloat(totalFootprint)+ footprint).toFixed(2)
        }
    }
    return footprint.toFixed(2)
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //Construct a regular expression object with target parameters
    var r = window.location.search.substr(1).match(reg); //Match target parameters
    if (r != null) return unescape(r[2]);
    return null;
}

function gotoAccount() {
    window.location.href="http://localhost:3000/myaccountPage"
}
