/**
 * Main JS file for the /r/webdev collaborative site
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Reddit-Web-Dev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
}

/**
* Sets the smooth scrolling effect on the fixed header.
*/
function setScrollEffectHeader() {
  var scroll_from_top = $(this).scrollTop();
  console.log(scroll_from_top);
  if (scroll_from_top > 470) {
    $("header .nav-container").css('opacity', '0.7');
  } else if (scroll_from_top > 318) {
    $("header .nav-container").css('border-bottom', '1px solid #505050 ');
  } else {
    $("header .nav-container").css('opacity', '1');
    $("header .nav-container").css('border-bottom', '0px');
  }
}