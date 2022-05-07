let result = [];
function get_country(i){
    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/edit_country',
        dataType : 'json',
        data : {
            get_country : i
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

    let html = '';
    for (let i = 0;i < result.length;i++){
        let func='\''+'upgrade('+result[i].user_id+')'+'\'';
        console.log(func);
        html += '<tr>\n' +
            '<td>' + result[i].country + '</td>\n' +
            '<td>' + result[i].transfer_Amount + '</td>\n' +
            '<td>' + result[i].panels_has_received + '</td>\n' +
            '<td>' + result[i].carbon_emission + '</td>\n' ;
        // if(result[i].user_type=="household"){
        //     html+='<td><button  style="width: 200px; height: 30px;"  onClick='+func+'> upgrade</button></td>\n';
        // }
        html+='</tr>'
    }
    document.getElementById("tablePersonal").innerHTML=html;
    // $('#tablePersonal').append(html);
    // $("#tablePersonal").trigger("create");
}





