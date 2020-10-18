// Divo Scripts

jQuery(window).on('load', (function() {
    
    $('.fill').width("100%");
    
}));


$(document).ready(function(){
   

    setInterval(function(){ 
        $('.loader').hide(300);
     }, 3000);


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


    // contact form switch

    $('.choosebtn a').click(function(e){
        e.preventDefault();
        $('.choosebtn a').removeClass('active');

        if($(this).hasClass('producer')){
            $('.artist_form').removeClass('active');
            $('.producer_form').addClass('active');
            $(this).addClass('active');
        }
        else if($(this).hasClass('artist')){
            $('.producer_form').removeClass('active');
            $('.artist_form').addClass('active');
            $(this).addClass('active');

        }
    })

    $('select').selectpicker();
    
})