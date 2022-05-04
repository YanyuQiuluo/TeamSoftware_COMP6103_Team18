

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

addData();
function addData() {
    // console.log("add data")
    // console.log(document.getElementsByClassName("superuser"));
    // document.getElementById('superuser').innerText = "qqq";



    // var html = '';

    // html += '<h1 class="index-header"> Welcome back' + '<h1>' + user2Name + '</h1>' + '</h1>'
    // html += '<section class="centre-content bg-black ">\n' +
    //     '<h1 class="index-header" > Welcome back <h1>' + user2Name + '</h1>\n' +
    //     '</section>'
    //
    //
    //
    // $('.members-home').append(html);
    // $(".members-home").trigger("create");
}

