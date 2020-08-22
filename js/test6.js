$(function(){
    'use strict';
    $('main').on({
        click: function(){
            $(this).addClass('red-bg');
        },
        mouseenter: function(){
            $(this).addClass('active');

        },
        mouseleave: function(){
            $(this).removeClass('active red-bg');
        
        }

    });


    var text=$('main h2').text();
    console.log(text);
    $('main h2').text("<h1>Hello World</h1>");
    $('main h2').html("<h1>Hello World</h1>");

    //click in any part of the html and change the h2
    //1.sense the click
    $('footer').on('click',function(){
        $('main h2').html("<h1>Done!</h>");
    });
    // attribute click on logo, change the image
        // execute the action. change the attribute by new img $(this)
    $('header img').on('click', function(){
        $('this').attr('src', 'https://i.ebayimg.com/images/g/mfYAAOSwYpVcXx6s/s-l400.png');
    })
});    