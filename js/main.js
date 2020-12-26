$(function () {

    $('.isnavMenuBtn').on('click', function(){
        $('body').toggleClass('menu-open');
    });
    
});

var detectios = '';
if( /iPhone|iPad|iPod/i.test(navigator.userAgent) )    
    detectios = 'touchend click';
else if( /Android/i.test(navigator.userAgent) ) 
    detectios = 'touchend';
else
    detectios = 'click';

$(document).on(detectios, function(e){
    if($(window).width() < 1200){
        if(!$(e.target).closest('.gpMenu').length) {
            if($('.gpMenu').is(":visible")) {
                
            }
        }
    }
});


// *****  Window on Scroll  ******

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".social-bar").addClass("social-none");

    } else {
      $(".social-bar").removeClass("social-none");
    }
  });




$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
