'use strict';
let email = ''
let usn = ''
let psd = ''
let emailCode = ''
$('#submit').on('click', function () {
    $('.tip0').css('display','none');
    $('.tip00').css('display','none');
    $('.tip1').css('display','none');
    $('.tip2').css('display','none');
    email = document.getElementById("email").value
    let emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    usn = document.getElementById("username").value
    psd = document.getElementById("password").value

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
            url: 'http://localhost:3000/register1',
            dataType : 'json',
            data: {
                email: email
            },
            success: function(res){
                if ( 'email existed') {
                    $('.tip00').show();
                } else if (res === 'code sent') {
                    document.getElementById("emailInput").innerHTML = getEmailInput();
                    $('#information').css('display','none');
                    $('#emailVerify').show();
                }
            }
        });
    }

})

$('#next').on('click', function () {
    $('.tip0').css('display','none');
    $('.tip1').css('display','none');
    emailCode = document.getElementById("emailCode").value

    if (!emailCode) {
        $('.tip0').show();
    } else {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/verify',
            dataType : 'json',
            data: {
                userName: usn,
                password: psd,
                verify_return: emailCode,
                email: email
            },
            success: function(res){
                document.getElementById("emailInput").innerHTML = getEmailInput();
                $('#information').css('display','none');
                $('#emailVerify').show();
                if (res === 'wrong code') {
                    $('.tip1').show();
                } else {
                    // need a tip
                    window.location.href='http://localhost:3000/loginPage'
                }
            }
        });
    }
})

$('#resend').on('click', function () {
    // need a tip
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/verify',
        dataType : 'json',
        data: {
            userName: usn,
            password: psd,
            verify_return: emailCode,
            email: email
        },
        success: function(res){
            document.getElementById("emailInput").innerHTML = getEmailInput();
            $('#information').css('display','none');
            $('#emailVerify').show();
            if (res === 'wrong code') {
                $('.tip1').show();
            } else {
                window.location.href='http://localhost:3000/loginPage'
            }
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