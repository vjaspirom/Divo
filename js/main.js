// Divo Scripts


$(document).ready(function(){

    AOS.init({
        duration: 700
    });

    //menu toggle

    $('.menu_toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main_menu').toggleClass('active');
        $('body').toggleClass('noscroll');
    })
})