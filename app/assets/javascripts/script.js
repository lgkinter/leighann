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

  TweenMax.fromTo($('.flower-path'), 5, {
    ease: Power1.easeInOut,
    strokeDashoffset:25000
  },
  {
    ease: Power1.easeInOut,
    strokeDashoffset:0
  });

  TweenMax.fromTo($('.signature-path'), 5, {
    ease: Power1.easeInOut,
    strokeDashoffset:59000
  },
  {
    ease: Power1.easeInOut,
    strokeDashoffset:0
  });

  TweenMax.fromTo($('.logo-background'), 5, {
    ease: Power1.easeInOut,
    strokeDashoffset:60000
  },
  {
    ease: Power1.easeInOut,
    strokeDashoffset:0
  });

  var t1 = new TimelineMax();
  t1.append(TweenMax.to($('.initials'), 0, {
    opacity: 0
  }));
  t1.append(TweenMax.to($('.initials'), 0, {
    ease: Power1.easeInOut,
    strokeDashoffset:25000,
    delay: 4,
    opacity: 1
  }));
  t1.append(TweenMax.to($('.initials'), 2, {
    ease: Power1.easeInOut,
    strokeDashoffset:0
  }));

  $("#left-flower").hover(left_over, left_out);

  function left_over(){
    TweenMax.to($(this), 0.3, {
      transformOrigin: "50% 50%",
      x: '-=150',
      y: '-=5',
      scale:1.2
    });
    TweenMax.to($('.left-flower-img'), 0.3, { opacity:1 });
    TweenMax.to($('.left-flower-fill'), 0.3, { opacity:0 });
    TweenMax.to($('.left-flower-top'), 0.3, {
      stroke: '#4d173c',
      strokeWidth: 20
    });
    TweenMax.to($('.left-flower-bottom'), 0.3, { stroke: '#EF3F56' });
  };

  function left_out(){
    TweenMax.to($(this), 0.3, {
      transformOrigin: "50% 50%",
      x: '',
      y: '',
      scale:1
    });
    TweenMax.to($('.left-flower-top'), 0.3, {
      stroke: '#fff',
      strokeWidth: 15
    });
    TweenMax.to($('.left-flower-bottom'), 0.3, { stroke: '#fff' });
    TweenMax.to($('.left-flower-img'), 0.3, { opacity:0 });
    TweenMax.to($('.left-flower-fill'), 0, { opacity:1 });
  };

  $("#middle-flower").hover(mid_over, mid_out);

  function mid_over(){
    TweenMax.to($(this), 0.3, {
      transformOrigin: "50% 50%",
      x: '+=50',
      scale:1.2
    });
    TweenMax.to($('.middle-flower-img'), 0.3, { opacity:1 });
    TweenMax.to($('.middle-flower-fill'), 0.3, { opacity:0 });
    TweenMax.to($('.middle-flower-top'), 0.3, {
      stroke: '#4d173c',
      strokeWidth: 20
    });
    TweenMax.to($('.middle-flower-bottom'), 0.3, { stroke: '#EF3F56' });
  };

  function mid_out(){
    TweenMax.to($(this), 0.3, {
      transformOrigin: "50% 50%",
      x: '',
      scale:1
    });
    TweenMax.to($('.middle-flower-top'), 0.3, {
      stroke: '#fff',
      strokeWidth: 15
    });
    TweenMax.to($('.middle-flower-bottom'), 0.3, { stroke: '#fff' });
    TweenMax.to($('.middle-flower-img'), 0.3, { opacity:0 });
    TweenMax.to($('.middle-flower-fill'), 0, { opacity:1 });
  };

  $("#right-flower").hover(right_over, right_out);

  function right_over(){
    TweenMax.to($(this), 0.3, {
      transformOrigin: "50% 50%",
      x: '+=80',
      y: '-=50',
      scale:1.2
    });
    TweenMax.to($('.right-flower-img'), 0.3, { opacity:1 });
    TweenMax.to($('.right-flower-fill'), 0.3, { opacity:0 });
    TweenMax.to($('.right-flower-top'), 0.3, {
      stroke: '#4d173c',
      strokeWidth: 20
    });
    TweenMax.to($('.right-flower-bottom'), 0.3, { stroke: '#FA9883' });
  };

  function right_out(){
    TweenMax.to($(this), 0.3, {
      transformOrigin: "50% 50%",
      x: '',
      y: '',
      scale:1
    });
    TweenMax.to($('.right-flower-top'), 0.3, {
      stroke: '#fff',
      strokeWidth: 15
    });
    TweenMax.to($('.right-flower-bottom'), 0.3, { stroke: '#fff' });
    TweenMax.to($('.right-flower-img'), 0.3, { opacity:0 });
    TweenMax.to($('.right-flower-fill'), 0, { opacity:1 });
  };


  $(".submit-button").hover(send_over, send_out);

  function send_over(){
      TweenMax.to($('.button_border'), 0, {
        borderColor: '#4d173c',
        backgroundColor:'rgba(255,255,255,0.25)',
        boxShadow: '0 0 10px #4d173c'
      });
      TweenMax.to($('#plane'), 0, { fill: '#4d173c' });
      TweenMax.to($('#send'), 0, { fill: '#4d173c' });
  }

  function send_out(){
      TweenMax.to($('.button_border'), 0, {
        borderColor: '#fff',
        backgroundColor:'none',
        boxShadow: ''
      });
      TweenMax.to($('#plane'), 0, { fill: '#fff' });
      TweenMax.to($('#send'), 0, { fill: '#fff' });
  }



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
  console.log("getting here");
  if ($("#contactform").valid()) {
    TweenMax.to($('#plane'), 0.4, {
      x: "+=100",
      y: "-=55"
    });
    TweenMax.fromTo($('#send'), 0.4,
      { opacity: 1},
      { opacity: 0}
    );
    /*$('#plane').addClass("fly");
    $('#send').addClass("disappears");*/
  };
};

function check() {
  if ($("#contactform").valid()) {
    TweenMax.fromTo($('#check-mark'), 0.4,
      { opacity: 0},
      { opacity: 1}
    );
    TweenMax.fromTo($('#sent'), 0.4,
      { opacity: 0},
      { opacity: 1}
    );
    /*$('#check-mark').addClass("appears");
    $('#sent').addClass("appears");*/
    $('#send-button').addClass("disabled");
  };
};
