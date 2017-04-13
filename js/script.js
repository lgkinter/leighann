$(document).ready(function(){
    var scroll_start = 0;
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > 60) {
        $(".right-nav").css("background-color", "rgba(77,23,60, 0.3)");
      } else {
        $(".right-nav").css("background-color", "transparent");
      };
    });
});

function fly() {
  $('#plane').addClass("fly");
  $('#send').addClass("disappears");
};

function check() {
  $('#check-mark').addClass("appears");
  $('#sent').addClass("appears");
  $('#send-button').addClass("disabled");

};
