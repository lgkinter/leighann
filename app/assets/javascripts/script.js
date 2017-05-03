$(document).ready(function () {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (window.location.hash && isChrome) {
        setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
            window.location.hash = hash;
        }, 300);
    }
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).on("turbolinks:load", function(){
  $('#letterings').imagesLoaded( function (){
    $('#letterings').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      isFitWidth: true
    });
  });
});


$(document).ready(function(){
    var scroll_start = 0;
    var $sections = $('section');
    var $currentSection;

    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > 60) {
        if ($('#collapse').hasClass('in')) {
          $(".right-nav").css("background-color", "rgba(239, 63, 86, 0.7)");
        } else if ($(window).width() > 768) {
          $(".right-nav").css("background-color", "rgba(77,23,60, 0.3)");
        };
        $(".logo").css("background-color", "rgba(77,23,60, .75)");
        $(".logo-background").css("stroke", "#FA9883");
      } else {
        $(".right-nav").css("background-color", "transparent");
        $(".logo").css("background-color", "transparent");
        $(".logo-background").css("stroke", "#4d173c");
      };
      $sections.each(function(){
        var sectPosition = $(this).offset().top;
        if( sectPosition - 1 < scroll_start ){
          $currentSection = $(this);
        }
        var id = $currentSection.attr('id');
   	    $('a').removeClass('active');
   	    $("li a[href='#" +id+"']").addClass('active');
      });
    });

  $('.portfolio-filter > .nav').on('click', function(event){
      $('button').removeClass('portfolio-active');
      $(this).addClass('portfolio-active');
  });

  $(".navbar-toggle").click(function(event) {
    var right_nav = $('.right-nav')
    if ($('#collapse').hasClass('in')) {
      right_nav.css("background-color", "transparent");
    } else {
      //right_nav.css("background-color", "rgba(77,23,60, 0.7)");
      right_nav.css("background-color", "rgba(239, 63, 86, 0.7)");
    };
  });

  $(document).on('click', '.section-link', function(event){
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      $('a').removeClass('active');
      var id = $( $.attr(this, 'href') ).attr('id');
      $("li a[href='#" +id+"']").addClass('active');
      $('.down-arrow span').removeClass("run-animation");
      $('.up-arrow span').removeClass("run-animation");
      void $('.down-arrow span').offset();
      void $('.up-arrow span').offset();
      $('.down-arrow span').addClass("run-animation");
      $('.up-arrow span').addClass("run-animation");

  });

  var projects = $('#projects');
  var filterValue = '*';

  $(function(){

    projects.imagesLoaded( function (){

      projects.isotope({
        itemSelector: '.grid-item',
        filter: filterValue,
        layoutMode: 'masonry',
        isFitWidth: true
      });

    });
  });

  $(window).resize(function () {
    projects.isotope();
    $('#letterings').isotope();
  });

  $('.portfolio-filter button').on("click", function() {
    filterValue = $(this).attr('data-filter');
    projects.isotope({ filter: filterValue });
  });

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
