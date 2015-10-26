var CodeAnimation = (function($) {
    'use strict';

    var codeCounter = 1,
        CODE = " /** \n" +
        " * Checks whether the person is motivated to learn web development or not. \n" +
        " */ \n\n" +
        " function checkMotivation() { \n" +
        "   var you = new Human(), \n" +
        "       motivation = you.getMotivation(), \n\n" +
        "   if (motivation > 9000) { \n" +
        "     console.log('OMG your motivation is over 9000! Better start now!!'); \n" +
        "   } \n" +
        "   else if (motivation > 0) { \n" +
        "     console.log('We suggest you check out some of the resources below!'); \n" +
        "   } \n" +
        "   else { \n" +
        "     console.log('Sorry, this place is only for motivated people.'); \n" +
        "   } \n" +
        " }",
        CODE_WORDS = CODE.split(' '),
        CODE_HIGHLIGHT = '<span class="code-color"></span>',
        CODE_KEYWORDS = ['var', 'function', 'if', 'else', 'new'];

    /**
    * Animates the code inside the osx window
    */
    function animateCode() {
        var $codeContainer = $('.code-area'),
            isKeyword = false;

        if (CODE_KEYWORDS.indexOf(CODE_WORDS[codeCounter]) > -1) {
            $codeContainer.append(CODE_HIGHLIGHT);
            $codeContainer = $('.code-area span:last-child');
            isKeyword = true;
        }

        setTimeout(function() {
            typeCharacter($codeContainer, (' ' + CODE_WORDS[codeCounter]), 0, isKeyword, (CODE_WORDS.length - 1));
        }, 50);
    }

    /**
    * Simulates the text being typed
    */
    function typeCharacter($element, word, index, isKeyword, length) {
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
                typeCharacter($element, word, ++index, isKeyword, length);
            }, 50);
        }
    }


    // Expose methods
    return {
        animateCode: animateCode
    };
})(jQuery);
