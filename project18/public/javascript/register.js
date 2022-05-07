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
            url: 'http://localhost:3000/register/register1',
            dataType : 'json',
            data: {
                email: email
            },
            success: function(res){
                if (res.msg == 'email existed') {
                    $('.tip00').show();
                } else if (res.result === 'code sent') {
                    document.getElementById("emailInput").innerHTML = getEmailInput();
                    $('#information').css('display','none');
                    $('#emailVerify').show();
                } else {
                    alert(res.msg)
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
            url: 'http://localhost:3000/register/verify',
            dataType : 'json',
            data: {
                username: usn,
                password: psd,
                verify_return: emailCode,
                email: email
            },
            success: function(res){
                document.getElementById("emailInput").innerHTML = getEmailInput();
                $('#information').css('display','none');
                $('#emailVerify').show();
                if (res.code == '200') {
                    alert('Signed up successfully! Please sign in')
                    window.location.href='http://localhost:3000/loginPage'
                } else if (res.msg == 'verify error') {
                    $('.tip1').show();
                } else {
                    alert(res.msg)
                }
            }
        });
    }
})

$('#resend').on('click', function () {
    showToast("Code sent", 1500)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/register/register1',
        dataType : 'json',
        data: {
            username: usn,
            password: psd,
            verify_return: emailCode,
            email: email
        },
        success: function(res){
            document.getElementById("emailInput").innerHTML = getEmailInput();
            $('#information').css('display','none');
            $('#emailVerify').show();
            if (res.code == '200') {
                alert('Signed up successfully! Please sign in')
                window.location.href='http://localhost:3000/loginPage'
            } else if (res.msg == 'verify error') {
                $('.tip1').show();
            } else {
                alert(res.msg)
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
