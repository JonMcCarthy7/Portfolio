$(document).ready(function(){
    $('.parallax').parallax();
  });



  //Smooth scroll to each sections
  $("#button1").click(function(){
      $('html, body').animate({
          scrollTop: $("#contact").offset().top - 63
      }, 1200);
  });
  $("#button2").click(function(){
      $('html, body').animate({
          scrollTop: $("#about").offset().top - 63
      }, 1200);
  });
  $("#button3").click(function(){
      $('html, body').animate({
          scrollTop: $("#work").offset().top - 63
      }, 1000);
  });
