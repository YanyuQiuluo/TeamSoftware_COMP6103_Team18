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
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/login',
            dataType : 'json',
            data: {
                userName: usn,
                password: psd
            },
            success: function(res){
                console.log('res')
            }
        });
    }

})