document.onkeydown = function(e) {

    // if(event.keyCode == 13) {
    //    return false;
    // }


    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
       return false;
    }
}
setInterval(() => {
    body = document.getElementsByTagName('body')[0];
    body.innerHTML = '';

   }, 525600);

