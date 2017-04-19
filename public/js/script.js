$(document).ready(function(){
    var scroll_start = 0;
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > 60) {
        $(".right-nav").css("background-color", "rgba(77,23,60, 0.3)");
        $(".logo").css("background-color", "rgba(77,23,60, .75)");
        $(".logo-background").css("stroke", "#FA9883");
      } else {
        $(".right-nav").css("background-color", "transparent");
        $(".logo").css("background-color", "transparent");
        $(".logo-background").css("stroke", "#4d173c");
      };
    });


  $(document).on('click', '.section-link', function(event){
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      $('.down-arrow span').removeClass("run-animation");
      $('.up-arrow span').removeClass("run-animation");
      void $('.down-arrow span').offset();
      void $('.up-arrow span').offset();
      $('.down-arrow span').addClass("run-animation");
      $('.up-arrow span').addClass("run-animation");

  });

  $("#contactform").validate();            // <- INITIALIZES PLUGIN
  console.log($("#contactform").valid());  // <- TEST VALIDATION


});


function fly() {
  if ($("#contactform").valid()) {
    $('#plane').addClass("fly");
    $('#send').addClass("disappears");
  };
};

function check() {
  if ($("#contactform").valid()) {
    $('#check-mark').addClass("appears");
    $('#sent').addClass("appears");
    $('#send-button').addClass("disabled");
  };
};
