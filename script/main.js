/**
 * Main JS file for the /r/webdev collaborative site
 */

/**
* Entry function
*/
(function($) {
  'use strict';
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
      $nav_container = $('header .nav-container'),
      nav_containerHeight = $nav_container.height(),
      osxWindow = $(".image-lockup"),
      limitOpacity = osxWindow.position().top - $nav_container.height() - 40;

  if (scroll_from_top > limitOpacity) {
    $nav_container.css('opacity', '0.7');
  }

  if (scroll_from_top > 315) {
    $nav_container.css('border-bottom', '1px solid #505050');
  }

  if (scroll_from_top <= limitOpacity) {
    $nav_container.css('opacity', '1');
    $nav_container.css('border-bottom', '0px');
  }
}

/**
* Animates the code inside the SVG window
*/
var code_counter = 1;

function animateCode(){
    var code =
" /** \n\
 * Sets the smooth scrolling effect on the fixed header.\n\
 */\n\n\
 function setScrollEffectHeader() {\n\
    var scroll_from_top = $(this).scrollTop(),\n\
        $nav_container = $('header .nav-container');\n\n\
    console.log(scroll_from_top);\n\n\
    if (scroll_from_top > 470) {\n\
        $nav_container.css('opacity', '0.7');\n\
    } else if (scroll_from_top > 318) {\n\
        $nav_container.css('border-bottom', '1px solid #505050');\n\
    } else {\n\
        $nav_container.css('opacity', '1');\n\
        $nav_container.css('border-bottom', '0px');\n\
    }\n\
}",
    $code_container = $('.animated-text'),
    code_words = code.split(' '),
    code_highlight = '<span class="code-color"></span>',
    code_keyWords = ['var', 'function', 'if', 'else'],
    isColor = false;

    if (code_keyWords.indexOf(code_words[code_counter]) >= 0) {
      $code_container.append(code_highlight);
      $code_container = $('.animated-text span:last-child');
      isColor = true;
    };

  setTimeout(function() { typeCharacter($code_container, (' ' + code_words[code_counter]), 0, isColor, (code_words.length - 1) ); }, 60);
}

/**
* Simulates the text being typed
*/
function typeCharacter($element, word, index, isColor, length) {
  if (typeof word[index] === 'undefined') {
    if (code_counter !== length) {
      code_counter++;
      animateCode();
    } else {
      clearInterval(); // Stop animation
    }
  } else {
    $element.html($element.html() + word[index]);
    setTimeout(function() { typeCharacter($element, word, ++index, isColor, length);}, 60);
  }
};
