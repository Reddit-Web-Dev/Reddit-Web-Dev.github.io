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
    /*var scrollFromTop = $(this).scrollTop(),
        $navContainer = $('header .nav-container'),
        navContainerHeight = $navContainer.height(),
        osxWindow = $(".osx-window"),
        limitOpacity = osxWindow.position().top - navContainerHeight - 40,
        devProfileTopPos = $(".developer-profile").position().top;

    if (scrollFromTop > limitOpacity) {
        $navContainer.addClass('transparent');
    } else {
        $navContainer.removeClass('transparent');
    }

    if (scrollFromTop > devProfileTopPos) {
        $navContainer.slideUp(250);
    } else {
        $navContainer.slideDown(100);
    }

    scrollFromTop > 900 ? $navContainer.addClass('shrink') : $navContainer.removeClass('shrink');*/

    var scrollFromTop = $(this).scrollTop(),
        $navContainer = $('.nav-container.fixed'),
        headerHeight = $('body > header').height();

        scrollFromTop > headerHeight ? $navContainer.addClass('show') : $navContainer.removeClass('show');


}

/**
* Animates the code inside the SVG window
*/
var codeCounter = 1;

function animateCode(){
var code = " /** \n" +
    " * Sets the smooth scrolling effect on the fixed header.\n" +
    " */\n\n" +
    "function setScrollEffectHeader() {\n" +
    "  var scrollFromTop = $(this).scrollTop(),\n" +
    "  $navContainer = $('header .nav-container');\n\n" +
    "  console.log(scrollFromTop);\n\n" +
    "  if (scrollFromTop > 470) {\n" +
    "    $navContainer.css('opacity', '0.7');\n" +
    "  } else if (scrollFromTop > 318) {\n" +
    "    $navContainer.css('border-bottom', '1px solid #505050');\n" +
    "  } else {\n" +
    "    $navContainer.css('opacity', '1');\n" +
    "    $navContainer.css('border-bottom', '0px');\n" +
    "  }\n" +
    "}",
    $codeContainer = $('.code-area'),
    codeWords = code.split(' '),
    codeHighlight = '<span class="code-color"></span>',
    codeKeywords = ['var', 'function', 'if', 'else'],
    isColor = false;

    if (codeKeywords.indexOf(codeWords[codeCounter]) >= 0) {
        $codeContainer.append(codeHighlight);
        $codeContainer = $('.code-area span:last-child');
        isColor = true;
    }

    setTimeout(function() {
        typeCharacter($codeContainer, (' ' + codeWords[codeCounter]), 0, isColor, (codeWords.length - 1));
    }, 50);
}

/**
* Simulates the text being typed
*/
function typeCharacter($element, word, index, isColor, length) {
    if (typeof word[index] === 'undefined') {
        if (codeCounter !== length) {
            codeCounter++;
            animateCode();
        } else {
            clearTimeout(); // Stop animation
        }
    } else {
        $element.html($element.html() + word[index]);
        setTimeout(function() {
            typeCharacter($element, word, ++index, isColor, length);
        }, 50);
    }
}
