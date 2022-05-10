function qcy(){
    $(this).scroll(function(){
        if($(this).scrollTop() > 1) {
            document.getElementById('image').classList.toggle('rotacion');
        }        
    });
};

// document.scroll = function(){
//     document.getElementById('image').classList.toggle('rotacion');
// }