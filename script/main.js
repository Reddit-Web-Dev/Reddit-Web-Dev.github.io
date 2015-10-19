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
}

/**
* Sets the smooth scrolling effect on the fixed header.
*/
function setScrollEffectHeader() {
  var scroll_from_top = $(this).scrollTop(),
    $nav_container = $("header .nav-container");

  console.log(scroll_from_top);

  if (scroll_from_top > 470) {
    $nav_container.css('opacity', '0.7');
  } else if (scroll_from_top > 318) {
    $nav_container.css('border-bottom', '1px solid #505050');
  } else {
    $nav_container.css('opacity', '1');
    $nav_container.css('border-bottom', '0px');
  }
}
