/**
 * Main JS file for the /r/webdev collaborative site
 */

/**
* Entry function
*/
(function($) {
   $(document).ready(initPage);
})(jQuery);

/**
* Main function. Every thing relating to page initialization should go here.
* Just attach initializing functions to the events you wish here
*/
function initPage() {
  $(document).scroll(setScrollEffectHeader);
  animateCode();
}

/**
* Sets the smooth scrolling effect on the fixed header.
*/
function setScrollEffectHeader() {
  var scroll_from_top = $(this).scrollTop(),
    $nav_container = $("header .nav-container");

  if (scroll_from_top > 470) {
    $nav_container.css('opacity', '0.7');
  } else if (scroll_from_top > 318) {
    $nav_container.css('border-bottom', '1px solid #505050');
  } else {
    $nav_container.css('opacity', '1');
    $nav_container.css('border-bottom', '0px');
  }
}

/**
* Animates the code inside the SVG window
*/
function animateCode(){
    var $code_container = $(".animated-text"),
      code =
"/**\n\
* Sets the smooth scrolling effect on the fixed header.\n\
*/\n\n\
function setScrollEffectHeader() {\n\
    var scroll_from_top = $(this).scrollTop(),\n\
        $nav_container = $(\"header .nav-container\");\n\n\
    console.log(scroll_from_top);\n\n\
    if (scroll_from_top > 470) {\n\
        $nav_container.css('opacity', '0.7');\n\
    } else if (scroll_from_top > 318) {\n\
        $nav_container.css('border-bottom', '1px solid #505050');\n\
    } else {\n\
        $nav_container.css('opacity', '1');\n\
        $nav_container.css('border-bottom', '0px');\n\
    }\n\
}";

  setTimeout(function() { typeCharacter($code_container, code, 0); }, 40);
}

/**
* Simulates the text being typed
*/
function typeCharacter($element, str, index) {
  if (typeof str[index] === 'undefined') {
    clearInterval();
  } else {
    $element.html($element.html() + str[index]);
    setTimeout(function() { typeCharacter($element, str, ++index); }, 40);
  }
}
