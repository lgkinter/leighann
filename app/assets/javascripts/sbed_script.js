$(document).ready(function(){
     $(".lamp").mouseenter(function(){
       $(".light").css("opacity", ".3");
       $(".bulb").css("fill", "#ffffb3");
     });
     $(".lamp").mouseleave(function(){
       $(".light").css("opacity", "0");
       $(".bulb").css("fill", "#fff");
     });

     $(".computer, .screen-off, #web-nav").mouseenter(function(){
        $(".screen-off").css("opacity", "0");
        $("#web-nav").css('border-bottom', '3px solid #fb6a59');
        $("#web-nav a").css('color', '#fb6a59');
     });
     $(".computer, screen-off, #web-nav").mouseleave(function(){
       $(".screen-off").css("opacity", "1");
       $("#web-nav").css('border-bottom', '');
       $("#web-nav a").css('color', '#555');
     });

     $("#phone-nav, .phone").mouseenter(function(){
       $('.receiver').css("animation", "80ms ring 6");
       $("#phone-nav").css('border-bottom', '3px solid #80b1d3');
       $("#phone-nav a").css('color', '#80b1d3');
     });

     $("#phone-nav, .phone").mouseleave(function(){
       $('.receiver').css("animation", "");
       $("#phone-nav").css('border-bottom', '');
       $("#phone-nav a").css('color', '#555');
     });

     $('#team-nav, .bulletin').mouseenter(function(){
       $('.bulletin').css('-ms-transform', 'rotate(-20deg)');
       $('.bulletin').css('-webkit-transform', 'rotate(-20deg)');
       $('.bulletin').css('transform', 'rotate(-20deg)');
       $("#team-nav").css('border-bottom', '3px solid #faa342');
       $("#team-nav a").css('color', '#faa342');
     });

     $('#team-nav, .bulletin').mouseleave(function(){
       $('.bulletin').css('-ms-transform', 'rotate(0deg)');
       $('.bulletin').css('-webkit-transform', 'rotate(0deg)');
       $('.bulletin').css('transform', 'rotate(0deg)');
       $("#team-nav").css('border-bottom', '');
       $("#team-nav a").css('color', '#555');
     });

     $('#marketing-nav, .rolodex').mouseenter(function(){
       $('.paper').css('-ms-transform', 'rotate(10deg) rotateX(30deg) translate(-3px, -2px)');
       $('.paper').css('-webkit-transform', 'rotate(10deg) rotateX(30deg) translate(-3px, -2px)');
       $('.paper').css('transform', 'rotate(10deg) rotateX(30deg) translate(-3px, -2px)');
       $("#marketing-nav").css('border-bottom', '3px solid #4cc18e');
       $("#marketing-nav a").css('color', '#4cc18e');
     });

     $('#marketing-nav, .rolodex').mouseleave(function(){
       $('.paper').css('-ms-transform', '');
       $('.paper').css('-webkit-transform', '');
       $('.paper').css('transform', '');
       $("#marketing-nav").css('border-bottom', '');
       $("#marketing-nav a").css('color', '#555');
     });

});
