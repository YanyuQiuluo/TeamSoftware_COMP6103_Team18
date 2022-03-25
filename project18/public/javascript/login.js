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
                if (res === 'login success') {
                    window.location.href='http://localhost:3000/'
                } else {
                    alert('error')
                }
            }
        });
    }

})