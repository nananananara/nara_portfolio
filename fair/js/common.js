$(document).ready(function(){
   

    var cursorOuter = $('.cursor--large');
    var cursorInner = $('.cursor--small');

    function updateCursor(e) {

        TweenMax.set([cursorInner, cursorOuter], {x: e.clientX,y: e.clientY });
    }

    window.addEventListener("mousemove", function (e) {
        return updateCursor(e);
    });


});


