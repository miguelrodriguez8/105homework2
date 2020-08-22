$(function(){
    'use strict';

    /*$('img#logo').on('click',function(){
        $(this).animate({'width':'500px'});
    })

    /* challenge: mouse enter then increase the width, mouse leaves decrease the width
});*/

    $('img#logo').on('mouseenter', increaseImage);
    $('img#logo').on('mouseleave', decreaseImage);
        $(this).animate({'width':'50%'});

    

    function increaseImage(){
        $(this).animate({'width':'30%'});
    }
    function decreaseImage(){
        $(this).animate({'width':'200px'});
    }
    


    });
