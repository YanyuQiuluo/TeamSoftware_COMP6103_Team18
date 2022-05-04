$(function(){
    let element = document.getElementById("result-container");
    if(element.scrollHeight <= element.clientHeight + 20) { /** There is a scroll bar, then fixed the foot bar*/
        document.getElementById("footer-nav-container").style.position = 'fixed'
    }
})