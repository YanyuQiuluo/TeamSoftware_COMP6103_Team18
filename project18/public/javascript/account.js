let result = [];


// let result = [] // response data array

// $(function(){
//     let user2Name = window.sessionStorage.getItem("userName");
//     $.ajax({
//
//         type: 'POST',
//         url: 'http://localhost:3000/login',
//         dataType: 'json',
//         data: {
//             userName: user2Name
//         },
//         success: function (res){
//             if(res.code === '200'){
//                 result = res.result;
//                 addData();
//             } else {
//                 alert('error')
//
//             }
//         }
//
//     });
// })
//
// function addData(){
//     var html = '';
//     html += 'userName' + 'user2Name' +'123'
//
//     $('#user01').append(html).trigger( "create" );
// }




        // if (window.sessionStorage.getItem("userName")) {
        //     document.getElementById("user01").innerHTML = window.sessionStorage.getItem("userName");
        //
        //
        // } else {
        //     window.location.href='http://localhost:3000/loginPage'
        // }



$(function(){

    if (!window.sessionStorage.getItem("userName")){
        window.location.replace("http://localhost:3000/loginPage");
    }

    let id=window.sessionStorage.getItem("userID");
    let element = document.getElementById("scroll");
    if(element.scrollHeight <= element.clientHeight + 20) { /** There is a scroll bar, then fixed the foot bar*/
    document.getElementById("footer123").style.position = 'fixed'
    }



    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/userPage',
        dataType : 'json',
        data : {
            user_id : id,
        },
        success : function (res){
            if (res.code === '200'){
                result = res.result
                addData();
                addTable();
            } else {
                alert(res.msg)
            }
        }
    });

function addData(){
    document.getElementById("uname").innerHTML = "Username: " + result[0].username;
    document.getElementById("emaiL").innerHTML = "Email: " + result[0].email;
    // document.getElementById("carbonF").innerHTML = "Carbon footprint: " + result[0].feul_usage_pm
    document.getElementById("carbonF").innerHTML = "Carbon footprint (Kg per Month) : 0"
    // document.getElementById("Elect").innerHTML = "Electricity usage monthly: " + result[0].electicity_usage_pm


}

function changeData(){
    document.getElementById("carbonF").innerHTML =  "Carbon footprint (Kg per Month) : " + result;
}

function addTable(){
    var html = '';
    for (var i = 0;i < result[1].length;i++){
        html += '<tr>\n' +
            // '<td>' + result[1][i].user_name + '</td>\n' +
            '<td>' + result[1][i].country.country_name + '</td>\n' +
            '<td>$' + result[1][i].transfer_amount + '</td>\n' +
            '<td>' + result[1][i].dataTime + '</td>\n' +
            '</tr>'
    }
    $('#tablePersonal').append(html);
    $("#tablePersonal").trigger("create");
}



$('#submitEle').on('click',function (){

    let id = window.sessionStorage.getItem("userID");
    let ele = document.getElementById("Elect").value;

    if (!isNumber(ele)){
        alert("Electricity consumption is a number, please enter a number!")
    }

    function isNumber(value) {         //验证是否为数字
        var patrn = /^(-)?\d+(\.\d+)?$/;
        if (patrn.exec(value) == null || value == "") {
            return false
        } else {
            return true
        }
    }
    // if (typeof(ele) !== 'number'){
    //     alert("Electricity consumption is a number, please enter a number!")
    //     // document.getElementById("carbonF").innerHTML = "Carbon footprint (Kg per Month) : wrong"
    // }

    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/getFootPrint',
        dataType : 'json',
        data : {
            // user_id : id,
            electricity_consumption : ele,
        },
        success : function (res){
            if (res.code === '200'){

                console.log(res.result);
                result = res.result;
                changeData();
            }else{
                alert(res.msg)
            }
        }

    })


})


})





