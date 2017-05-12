$(document).ready(function(){

    $(".tray").hover(tray_over, tray_out);

    function tray_over(){
      TweenMax.to($(".tray"), 0.3, {
        transformOrigin: "50% 50%",
        x: '-=15',
        y: '+=10',
        scale:1.1
      });
    };

    function tray_out(){
      TweenMax.to($(".tray"), 0.3, {
        x: '+=15',
        y: '-=10',
        scale:1
      });
    };

    $(".books-group").hover(book_over, book_out);

    function book_over(){
      TweenMax.to($(".single-book"), 0.3, {
        transformOrigin: "0% 100%",
        rotation: -30
      });
    };

    function book_out(){
      TweenMax.to($(".single-book"), 0.3, {
        rotation: 0
      });
    };

    $(".lamp").hover(lamp_over, lamp_out);

    function lamp_over(){
      TweenMax.to($(".light"), 0.3, { opacity:.3 });
      TweenMax.to($(".bulb"), 0.3, { fill: "#ffffb3" });
    };

    function lamp_out(){
      TweenMax.to($(".light"), 0.3, { opacity: 0 });
      TweenMax.to($(".bulb"), 0.3, { fill: "#fff" });
    };

    $(".computer, .screen-off, #web-nav").hover(computer_over, computer_out);

    function computer_over(){
      TweenMax.to($(".screen-off"), 0.3, { opacity: 0 });
      TweenMax.to($("#web-nav"), 0.3, { borderBottom: '3px solid #fb6a59' });
      TweenMax.to($("#web-nav a"), 0.3, { color: "#fb6a59" });
    };

    function computer_out(){
      TweenMax.to($(".screen-off"), 0.3, { opacity: 1 });
      TweenMax.to($("#web-nav"), 0.3, { borderBottom: '' });
      TweenMax.to($("#web-nav a"), 0.3, { color: "#555" });
    };

    $("#phone-nav, .phone").hover(phone_over, phone_out);

    function phone_over(){
      var tl = new TimelineMax();
      tl.add(TweenMax.from($(".receiver"), 0.08, {
        transformOrigin: "50% 50%",
        rotation: -10,
        repeat: 6,
        yoyo: true,
        ease:Linear.easeNone
      }));
      tl.add(TweenMax.to($(".receiver"), 0.08, {
        rotation: 10,
        repeat: 6,
        yoyo: true,
        ease:Linear.easeNone
      }));
      tl.add(TweenMax.to($(".receiver"), 0.08, {
        rotation: 0,
      }));
      TweenMax.to($("#phone-nav"), 0.3, { borderBottom: '3px solid #80b1d3' });
      TweenMax.to($("#phone-nav a"), 0.3, { color: "#80b1d3" });
    };

    function phone_out(){
      TweenMax.to($("#phone-nav"), 0.3, { borderBottom: '' });
      TweenMax.to($("#phone-nav a"), 0.3, { color: "#555" });
    };

    $("#team-nav, .bulletin").hover(bulletin_over, bulletin_out);

    function bulletin_over(){
      TweenMax.to($(".bulletin"), 0.3, {
        transformOrigin: '50% 0%',
        rotation: -30
      });
      TweenMax.to($("#team-nav"), 0.3, { borderBottom: '3px solid #faa342' });
      TweenMax.to($("#team-nav a"), 0.3, { color: "#faa342" });
    };

    function bulletin_out(){
      TweenMax.to($(".bulletin"), 0.3, { rotation: 0 });
      TweenMax.to($("#team-nav"), 0.3, { borderBottom: '' });
      TweenMax.to($("#team-nav a"), 0.3, { color: "#555" });
    };

    $("#marketing-nav, .rolodex").hover(rolodex_over, rolodex_out);

    function rolodex_over(){
      TweenMax.to($(".paper"), 0.3, {
        transformOrigin: '50% 50%',
        rotation: 10,
        rotationX: 30,
        x: '-=3',
        y: '-=3'
      });
      TweenMax.to($("#marketing-nav"), 0.3, { borderBottom: '3px solid #4cc18e' });
      TweenMax.to($("#marketing-nav a"), 0.3, { color: "#4cc18e" });
    };

    function rolodex_out(){
      TweenMax.to($(".paper"), 0.3, {
        transformOrigin: '50% 50%',
        rotation: 0,
        rotationX: 0,
        x: '0',
        y: '0'
      });
      TweenMax.to($("#marketing-nav"), 0.3, { borderBottom: '' });
      TweenMax.to($("#marketing-nav a"), 0.3, { color: "#555" });
    };

});
