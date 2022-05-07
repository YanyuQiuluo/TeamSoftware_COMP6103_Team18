'use strict';
$('#submit').on('click', function () {
    $('.tip1').css('display','none');
    $('.tip2').css('display','none');
    let usn = document.getElementById("username").value
    let psd = document.getElementById("password").value

    if (!usn) {
        $('.tip1').show()
    }
    if (!psd) {
        $('.tip2').show()
    }
    if (usn && psd) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/login',
            dataType : 'json',
            data: {
                userName: usn,
                password: psd
            },
            success: function(res){
                if (res.code === '200') {
                    window.sessionStorage.setItem("userID",res.result.user.user_id)
                    window.sessionStorage.setItem("userName", res.result.user.username);
                    window.location.href='http://localhost:3000/'
                } else {
                    alert('Network error, please try again')
                }
            }
        });
    }

})