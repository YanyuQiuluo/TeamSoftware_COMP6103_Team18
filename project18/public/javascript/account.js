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
    let object = window.sessionStorage.getItem("userName");
    let element = document.getElementById("scroll");
    if(element.scrollHeight <= element.clientHeight + 20) { /** There is a scroll bar, then fixed the foot bar*/
    document.getElementById("footer123").style.position = 'fixed'
    }

    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/userPage',
        dataType : 'json',
        data : {
            username : object
        },
        success : function (res){
            if (res.code === '200'){
                result = res.result
                addData();
                addTable();
            } else {
                alert('error')
            }
        }
    });

function addData(){
    document.getElementById("uname").innerHTML = "Username: " + object
    document.getElementById("emaiL").innerHTML = "Email: " + result[0].email
    document.getElementById("carbonF").innerHTML = "Carbon footprint: " + result[0].feul_usage_pm
    document.getElementById("Elect").innerHTML = "Electricity usage monthly: " + result[0].electicity_usage_pm


}

function addTable(){
    var html = '';
    for (var i = 0;i < result[1].length;i++){
        html += '<tr>\n' +
            '<td>' + result[1][i].user_name + '</td>\n' +
            '<td>' + result[1][i].country_name + '</td>\n' +
            '<td>' + result[1][i].transfer_amount + '</td>\n' +
            '<td>' + result[1][i].dataTime + '</td>\n' +
            '</tr>'
    }
    $('#tablePersonal').append(html);
    $("#tablePersonal").trigger("create");
}

})





