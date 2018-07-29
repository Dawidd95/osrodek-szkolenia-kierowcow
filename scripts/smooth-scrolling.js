$(function() { // DOMContentLoaded
  $("a[href='#container__about-us']").on("click", function() {  //event listener
    $("html, body").animate({
      scrollTop: $(".container__about-us").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    }, 2000);
  });
  $("a[href='#container__questions']").on("click", function() {  //event listener
    $("html, body").animate({
      scrollTop: $(".container__questions").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    }, 2000);
  });
  $("a[href='#container__opinions']").on("click", function() {  //event listener
    $("html, body").animate({
      scrollTop: $(".container__opinions").offset().top //dopisujac -300 bedzie do klasy odjac 300px
    }, 2000);
  });
  $("a[href='#footer']").on("click", function() {  //event listener
    $("html, body").animate({
      scrollTop: $("footer").offset().top+640 //dopisujac -300 bedzie do klasy odjac 300px
    }, 2000);
  });
 
}); 