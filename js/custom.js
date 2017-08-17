$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() < 80 ) {
      $('.navbar').css({'margin-top':'-100px','opacity':'0'});
      $('.navbar-default').css({'background':'rgba(59, 59 , 59, 0)'});
    }
    else {
      $('.navbar').css({'margin-top':'0','opacity':'1'})
      $('.navbar-default').css({'background': 'rgba(59, 59 , 59, 0.7)','border-color': '#444'});
      $('.navbar-brand img').css({
        'height': '35px',
         'padding-top': '0px'
         
     });
     
     $('.navbar-nav > li > a ').css({
         'padding-top': '15px'
         
         
     });
    }
  })

  // Select all links with hashes
$('.nav-item, #scroll-to-top')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
//active
 $('.navbar-nav li a').click(function(){
   $('.navbar-nav li a').parent().removeClass('active');
   $(this).parent().addClass('active');
 })
// scroll active
$(window).scroll(function(){
  $('section').each(function(){
    var bb = $(this).attr("id");
    var height = $(this).outerHeight();;
    var instance = $(this).offset().top - 70;

    if ($(window).scrollTop() < (height + instance) && $(window).scrollTop() > instance ) {
        $('.navbar-nav li a[href="#' + bb +'"]').parent().addClass('active');
      }
      else {
        $('.navbar-nav li a[href="#' + bb +'"]').parent().removeClass('active');
      }
    });
})


});

$(document).ready(function() {
  
  'use strict';
  
  setInterval( function() {
      
      'use strict';
      
      var windowHeight = $(window).height();
      
      var containerHeight = $(".header-container").height();
      
      var padTop = windowHeight - containerHeight;
     
      var paddingTop = Number((padTop / 2).toFixed(2));
      $(".header-container").css({
          
          'padding-top':( padTop / 2) + 'px',
      });
      
      
  }, 10)
  
  
});


// Add bx slider to screens
$(document).ready(function() {
  
  $('.bxslider').bxSlider({
      
      slideWidth: 292.5,
      auto: true,
      minSlides: 1, 
      maxSlides: 3, 
      slideMargin: 80
  });
  
});


// counter

$(document).ready(function(){
  $('.counter-number').counterUp({
    delay: 10,
    time: 1000
});
})


//wow.js

$(document).ready(function(){
new WOW().init();
});