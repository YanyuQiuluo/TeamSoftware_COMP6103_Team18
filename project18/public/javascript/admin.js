let result = [];

$(function(){
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
            html += '<tr>\n' +
                '<td>' + result[i].user_full_name + '</td>\n' +
                '<td>' + result[i].username + '</td>\n' +
                '<td>' + result[i].telephone + '</td>\n' +
                '<td>' + result[i].address_first_line + '</td>\n' +
                '<td>' + result[i].street_name + '</td>\n' +
                '<td>' + result[i].city + '</td>\n' +
                '<td>' + result[i].country + '</td>\n' +
                '<td>' + result[i].postcode + '</td>\n' +
                '<td>' + result[i].user_type + '</td>\n' +
                '<td>' + result[i].feul_usage_pm + '</td>\n' +
                '<td>' + result[i].electicity_usage_pm + '</td>\n' +
                '</tr>'
        }
        $('#tablePersonal').append(html);
        $("#tablePersonal").trigger("create");
    }

})





