let uuid= '' /** An unique ID to represent a transaction */
let result = [] /** response data array */
$(function(){
    let element = document.getElementById("result-container");
    if(element.scrollHeight <= element.clientHeight + 20) { /** There is not a scroll bar, then fixed the foot bar*/
        document.getElementById("footer-nav-container").style.position = 'fixed'
    }
    uuid = getUrlParam('id');
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
                alert('Network error, please try again')
            }
        }
    });
})

function addData() {
    var html = '';
    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            html += '<div class="table-item">\n' +
                '         <table>\n' +
                '            <tr>\n' +
                '               <td style="width: 20%;">' + result[i].dataTime + '</td>\n' +
                '               <td style="width: 25%;">' + result[i].country_name + '</td>\n' +
                '               <td style="width: 25%;">' + result[i].panel_amount + '</td>\n' +
                '               <td style="width: 30%;"></td>\n' +
                '            </tr>\n' +
                '          </table>\n' +
                '    </div>'
        }
        $('#result-row').append(html);
        $("#result-row").trigger("create");
    }
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //Construct a regular expression object with target parameters
    var r = window.location.search.substr(1).match(reg); //Match target parameters
    if (r != null) return unescape(r[2]);
    return null;
}
