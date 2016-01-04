(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(function(){
        $(".tagline").typed({
            strings: ["INNOVATION", "INSPIRATION","TECHNOLOGY","EDUCATION","EXCELLENCE"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 100,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 80,
            // time before backspacing
            backDelay: 1200,
            // loop
            loop: false,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });


var appear = {
    reset: false,
    delay    : 0,
  distance : '10vw',
  easing   : 'ease-in-out',
  scale    : 0.1
};


var slide = {
  reset: false,
  origin: 'bottom',
  delay    : 0,
  distance : '10vw',
  easing   : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  scale    : 0.1
};

var slideLeft = {
  reset: false,
  origin: 'left',
  delay    : 0,
  distance : '10vw',
  easing   : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  scale    : 1
};

var slideRight = {
  reset: false,
  origin: 'right',
  delay    : 0,
  distance : '10vw',
  easing   : 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  scale    : 1
};

var divider = {
  reset: false,
  delay    : 0,
  distance : '10vw',
  easing   : 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  scale    : 0.05
};

// JavaScript
window.sr = ScrollReveal();
sr.reveal('.appear', appear);
sr.reveal('.slide', slide);
sr.reveal('.slide-left', slideLeft);
sr.reveal('.slide-right', slideRight);
sr.reveal('.dividero',  divider );
