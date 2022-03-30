'use strict';
$('#submit').on('click', function () {
    $('.tip0').css('display','none');
    $('.tip00').css('display','none');
    $('.tip1').css('display','none');
    $('.tip2').css('display','none');
    let email = document.getElementById("email").value
    let emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    let usn = document.getElementById("username").value
    let psd = document.getElementById("password").value

    if (!emailReg.test(email)) {
        $('.tip0').show();
    }
    if (!usn) {
        $('.tip1').show()
    }
    if (!psd) {
        $('.tip2').show()
    }
    if (emailReg.test(email) && usn && psd) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/register',
            dataType : 'json',
            data: {
                email: email
            },
            success: function(res){
                document.getElementById("emailInput").innerHTML = getEmailInput();
                $('#information').css('display','none');
                $('#emailVerify').show();
                // if (res === 'Register success') {
                //     window.location.href='http://localhost:3000/loginPage'
                // } else {
                //     alert('error')
                // }
            }
        });
    }

})

$('#next').on('click', function () {
    $('.tip0').css('display','none');
    $('.tip1').css('display','none');
    let emailCode = document.getElementById("emailCode").value

    if (!emailCode) {
        $('.tip0').show();
    } else {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/register',
            dataType : 'json',
            data: {
                userName: emailCode
            },
            success: function(res){
                document.getElementById("emailInput").innerHTML = getEmailInput();
                $('#information').css('display','none');
                $('#emailVerify').show();
                // if (res === 'Register success') {
                //     window.location.href='http://localhost:3000/loginPage'
                // } else {
                //     alert('error')
                // }
            }
        });
    }
})

$('#resend').on('click', function () {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/register',
        dataType : 'json',
        data: {
            email: email,
            userName: usn,
            password: psd
        },
        success: function(res){
            // if (res === 'Register success') {
            //     window.location.href='http://localhost:3000/loginPage'
            // } else {
            //     alert('error')
            // }
        }
    });
})

$('#back').on('click', function () {
    $('#emailVerify').css('display','none');
    $('#information').show();
})

function getEmailInput(){
    let email = document.getElementById("email").value + '. '
    return email
}