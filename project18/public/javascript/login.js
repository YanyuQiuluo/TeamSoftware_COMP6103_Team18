'use strict';
$('#submit').on('click', function () {

    $('.tip1').css('display','none');
    $('.tip2').css('display','none');
    let usn = document.getElementById("username").value
    let psd = document.getElementById("password").value

    if (!usn && !psd){
        $('.tip1').show();
        $('.tip2').show();
    }
    if (!usn) {
        $('.tip1').show()
    } else if (!psd) {
        $('.tip2').show()
    } else {
        let pageName = document.getElementById("login") ? 'login' : 'register'
        $.ajax({
            type: 'POST',
            url: pageName === 'login' ? 'http://localhost:3000/login' : 'http://localhost:3000/register',
            dataType : 'json',
            data: {
                userName: usn,
                password: psd
            },
            success: function(res){
                if (res === 'login success') {
                    window.location.href='http://localhost:3000/'
                } else if (res === 'Register success') {
                    window.location.href='http://localhost:3000/loginPage'
                } else {
                    alert('error')
                }
            }
        });
    }

})