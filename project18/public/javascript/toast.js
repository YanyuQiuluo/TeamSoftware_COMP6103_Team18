function showToast(msg, duration){
    duration=isNaN(duration)?3000:duration;
    let m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="width:20%; min-width:200px; background:#000; opacity:0.9; height:auto;min-height: 60px; line-height: 60px; color:#fff; text-align:center; border-radius:4px; position:fixed; top:60%; left:45%; z-index:999999;";
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
}