/**
* Main JS file for the /r/webdev collaborative site
*/

/**
* Entry function
*/
(function($, CodeAnimation, RedditFeed) {
    'use strict';
    $(document).ready(initPage);
})(jQuery, CodeAnimation, RedditFeed);

/**
* Main function. Every thing relating to page initialization should go here.
* Just attach initializing functions to the events you wish here
*/
function initPage() {
    // Cache DOM
    var $reddit = $('.reddit-feed'),
        $redditFeed = $reddit.find('.feed'),
        $redditButtons = $reddit.find('.subreddits'),
        $firstRedditButton = $redditButtons.find('button').first();

    // Init functions
    CodeAnimation.animateCode();
    $firstRedditButton.addClass('active');
    RedditFeed.fetchNewPosts($redditFeed, $firstRedditButton.text(), 5);

    // Event binding
    $(document).scroll(setScrollEffectHeader);

    $redditButtons.on('click', '.subreddit-button', function() {
        var $this = $(this);

        $redditButtons.children().each(function() {
            $(this).removeClass('active');
        });
        $this.addClass('active');

        RedditFeed.fetchNewPosts($redditFeed, $this.text(), 5);
    });
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

    if (scrollFromTop > headerHeight) {
        $navContainer.addClass('show');
    } else {
        $navContainer.removeClass('show');
    }
}
