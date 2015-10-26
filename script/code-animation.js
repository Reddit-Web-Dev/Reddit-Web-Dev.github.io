var CodeAnimation = (function($) {
    'use strict';

    // Variables
    var wordCounter = 1,
        CODE = " /** \n" +
        " * Checks whether the person is motivated to learn web development or not. \n" +
        " */ \n\n" +
        " function checkMotivation() { \n" +
        "   var you = new Person(), \n" +
        "     motivation = you.getMotivation(); \n\n" +
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
        CODE_KEYWORDS = ['var', 'function', 'if', 'else', 'new'],
        $DEFAULT_CONTAINER = $('.code-area');

    // Init
    // Replaces empty words with a space (the empty words occur when there are 2 or more consecutive spaces, so in the indentation)
    for (var i=1; i<CODE_WORDS.length; i++) {
        if (CODE_WORDS[i] === '') {
            CODE_WORDS[i] = ' ';
        }
    }

    /**
    * Animates the code inside the osx window
    */
    function animateCode() {
        // If we find an undefined value, it means we don't have any more words to print
        if (typeof CODE_WORDS[wordCounter] === 'undefined') {
            return;
        }

        var $codeContainer = $DEFAULT_CONTAINER,
            isKeyword = false;

        // If the current word is a keyword
        if (CODE_KEYWORDS.indexOf(CODE_WORDS[wordCounter]) > -1) {
            $codeContainer.append(CODE_HIGHLIGHT);
            $codeContainer = $('.code-area span:last-child');
            isKeyword = true;
        }

        printWord($codeContainer, CODE_WORDS[wordCounter]);
    }

    /**
    * Prints a word in a given container
    */
    function printWord($element, word) {
        var wordLenght = word.length,
            charIndex = 0;

        $element.html($element.html() + ' '); // Put initial space before the word (this is why the indentation is doubled)
        setTimeout(typeCharacter, 50);

        /**
        * Types each character of the current word with a delay
        */
        function typeCharacter() {
            $element.html($element.html() + word[charIndex]);

            if (charIndex >= wordLenght-1) {
                wordCounter++;
                animateCode();
            } else {
                charIndex++;
                setTimeout(typeCharacter, 50);
            }
        }
    }

    // Expose methods
    return {
        animateCode: animateCode
    };
})(jQuery);
