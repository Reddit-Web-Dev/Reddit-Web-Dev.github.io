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
var code_counter = 1;

function animateCode(){
    var code =
" /** \n\
 * Sets the smooth scrolling effect on the fixed header.\n\
 */\n\n\
 function setScrollEffectHeader() {\n\
    var scroll_from_top = $(this).scrollTop(),\n\
        $nav_container = $(\"header .nav-container\");\n\n\
    console.log(scroll_from_top);\n\n\
    if (scroll_from_top > 470) {\n\
        $nav_container.css('opacity', '0.7');\n\
    }  else if (scroll_from_top > 318) {\n\
        $nav_container.css('border-bottom', '1px solid #505050');\n\
    }  else {\n\
        $nav_container.css('opacity', '1');\n\
        $nav_container.css('border-bottom', '0px');\n\
    }\n\
}",
    $code_container = $(".animated-text"),
    code_words = code.split(" "),
    code_highlight = "<span style='color: red;'></span>",
    code_keyWords = ["var", "function", "if", "else"],
    isColor = false
    
    if (code_keyWords.indexOf(code_words[code_counter]) >= 0) {
      $code_container.append(code_highlight);
      $code_container = $('.animated-text span:last-child');
      isColor = true;
    };

  setTimeout(function() { typeCharacter($code_container, (" " + code_words[code_counter]), 0, isColor, (code_words.length - 1) ); }, 40);
}


/**
* Simulates the text being typed
*/
function typeCharacter($code_container, word, index, isColor, length) {
  if (typeof word[index] === 'undefined') {
    if (code_counter !== length) { //catch for special chars that could cause the animation to stop
      code_counter+= 1;
      animateCode();
    } else {  
      clearInterval(); //stop animation
    };
  } else if (isColor === true){
    $code_container.append(word[index]);
    setTimeout(function() { typeCharacter($code_container, word, ++index, isColor, length);}, 70);
  } else {
    $code_container.append(word[index]);
    setTimeout(function() { typeCharacter($code_container, word, ++index, isColor, length);}, 70);
  };
};
