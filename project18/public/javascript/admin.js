let result = [];
function upgrade(i){
    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/upgrade_user',
        dataType : 'json',
        data : {
            userid : i
        },
        success : function (res){
            if (res.code === '200'){
                result = res.result
                console.log(result);
                fresh();
            } else {
                alert('error')
            }
        }
    });
}
function relegation(i){
    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/relegation_user',
        dataType : 'json',
        data : {
            userid : i
        },
        success : function (res){
            if (res.code === '200'){
                result = res.result
                console.log(result);
                fresh();
            } else {
                alert('error')
            }
        }
    });
}
function  fresh(){
    let object = window.sessionStorage.getItem("userName");
    let element = document.getElementById("scroll");
    if(element.scrollHeight <= element.clientHeight + 20) { /** There is a scroll bar, then fixed the foot bar*/
    document.getElementById("footer123").style.position = 'fixed'
    }

    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/user_list',
        dataType : 'json',
        data : {
            username : object
        },
        success : function (res){
            if (res.code === '200'){
                result = res.result

                // addData();
                addTable();
            } else {
                alert('error')
            }
        }
    });
}

$(fresh());

// function addData(){
//     document.getElementById("uname").innerHTML = "Username: " + object
//     document.getElementById("emaiL").innerHTML = "Email: " + result[0].email
//     document.getElementById("carbonF").innerHTML = "Carbon footprint: " + result[0].feul_usage_pm
//     document.getElementById("Elect").innerHTML = "Electricity usage monthly: " + result[0].electicity_usage_pm
//
//
// }

function addTable(){

    var html = '';
    for (var i = 0;i < result.length;i++){
        let func='\''+'upgrade('+result[i].user_id+')'+'\'';
        // console.log(func);
        let f2='\''+'relegation('+result[i].user_id+')'+'\'';
        // console.log(f2);
        html += '<tr>\n' +
            '<td>' + result[i].user_full_name + '</td>\n' +
            '<td>' + result[i].username + '</td>\n' +
            '<td>' + result[i].telephone + '</td>\n' +
            '<td>' + result[i].address_first_line + '</td>\n' +
            '<td>' + result[i].street_name + '</td>\n' +
            '<td>' + result[i].city + '</td>\n' +
            '<td>' + result[i].country + '</td>\n' +
            '<td>' + result[i].postcode + '</td>\n' +
            '<td>' + result[i].feul_usage_pm + '</td>\n' +
            '<td>' + result[i].electicity_usage_pm + '</td>\n' +
            '<td>' + result[i].user_type + '</td>\n' ;
            if(result[i].user_type=="household"){
                html+='<td><button  style="width: 100px; height: 73px;"  class="btn btn-info" onClick='+func+'> upgrade</button></td>\n';
            }
            else if(result[i].user_type=="staff"){
                html+='<td><button  style="width: 100px; height: 73px;"  class="btn btn-info" onClick='+f2+'> relegation</button></td>\n';

            }

        html+='</tr>'
    }
    document.getElementById("tablePersonal").innerHTML=html;
    // $('#tablePersonal').append(html);
    // $("#tablePersonal").trigger("create");
}





