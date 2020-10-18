// Divo Scripts


$(document).ready(function(){

    AOS.init({
        duration: 700
    });

    $('select').selectpicker();

    // $('select').select2({
    //     minimumResultsForSearch: -1
    // });

    // $('.form-col select').select2({
    //     placeholder: "Language",
    //     minimumResultsForSearch: -1

    // });

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
})