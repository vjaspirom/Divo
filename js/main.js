// Divo Scripts


$(document).ready(function(){


    //menu toggle

    $('.menu_toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main_menu').toggleClass('active');
        $('body').toggleClass('noscroll');
    })
})