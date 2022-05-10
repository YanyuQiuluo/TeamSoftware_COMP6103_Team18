let result ;
let electricity = [];
let factor ; /** Array of price of solar panels */

$(function(){



    if (!window.sessionStorage.getItem("userName")){
        window.location.replace("http://localhost:3000/loginPage");
    }

    let id=window.sessionStorage.getItem("userID");
    let element = document.getElementById("scroll");
    if(element.scrollHeight <= element.clientHeight + 20) { /** There is a scroll bar, then fixed the foot bar*/
    document.getElementById("footer123").style.position = 'fixed'
    }


    // get the carbon_saving_factor
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
                factor = res.result;
               if(result) getSavingFootprint();
                console.log("123");
            } else {
                alert(res.msg)
            }
        }
    });


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
                if(factor) getSavingFootprint();

            } else {
                alert(res.msg)
            }
        }
    });

// carbon_saving_factor * panel_amout
//
function getSavingFootprint(){
    //get the countryid
    let toSaveF = 0;
    let savingF = 0;
    let cid;
    console.log('getSavingFootprint')
    console.log(result);
    console.log(factor);
    ff={}
    factor.forEach(f=>{
        ff[f.country_id]=f.carbon_saving_factor;
    })
   let total=0;
    result[1].forEach(r=>{
       let id= r.country_id;
       let carbon_saving_factor=ff[id];
       let amout = r.panel_amount;
       let savingF = carbon_saving_factor*amout;
       r.savingF=savingF;
       // var html = '';
       // html += '<td >' + savingF + '</td>'
       //  $('#sss').after(html);
       //  $("#sss").trigger("create");


       if (savingF)total+=savingF;
    })


    addTable();

    // for (let i = 0; i < result[1].length; i++) {
    //     cid = result[1][i].country_id;
    //     for (let j = 0; j < factor.length; j++) {
    //         if (factor[i].country_id == cid) {
    //             savingF = result[1].panel_amount * factor[i].carbon_saving_factor;
    //         }
    //     }
    //     toSaveF += savingF;
    // }
    console.log("test")
    document.getElementById("carbonS").innerHTML = "Carbon footprint savings (kg) : " + total ;
}



function addData(){
    document.getElementById("uname").innerHTML = "Username: " + result[0].username;
    document.getElementById("emaiL").innerHTML = "Email: " + result[0].email;
    // document.getElementById("carbonF").innerHTML = "Carbon footprint: " + result[0].feul_usage_pm
    document.getElementById("carbonS").innerHTML = "Carbon footprint savings (kg) : 0"
    document.getElementById("carbonF").innerHTML = "Carbon footprint (Kg per Month) : "+ result[0].feul_usage_pm
    document.getElementById("Electricity").innerHTML= result[0].electicity_usage_pm
    // document.getElementById("Elect").innerHTML = "Electricity usage monthly: " + result[0].electicity_usage_pm


}

function changeData(ele){
    document.getElementById("carbonF").innerHTML =  "Carbon footprint (Kg per Month) : " + electricity.toFixed(3);
    document.getElementById("Electricity").innerHTML= ele

}

function addTable(){
    var html = '';
    for (var i = 0;i < result[1].length;i++){
        html += '<tr>\n' +
            // '<td>' + result[1][i].user_name + '</td>\n' +
            '<td>' + result[1][i].country.country_name + '</td>\n' +
            '<td id="sss">￡' + result[1][i].transfer_amount + '</td>\n' +
            '<td>' + result[1][i].savingF.toFixed(3) + 'kg</td>\n' +
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
            user_id : id,
            electricity_consumption : ele,
        },
        success : function (res){
            if (res.code === '200'){

                console.log(res.result);
                electricity = res.result;
                changeData(ele);
            }else{
                alert(res.msg)
            }
        }

    })




})






})





