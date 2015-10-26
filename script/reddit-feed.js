var RedditFeed = (function($) {
    'use strict';

    var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    /**
    * Gets the data from reddit with an AJAX request
    */
    function getRedditFeed($element, subreddit, limit) {
        // Error if no jQuery element is passed as container
        if(!($element instanceof jQuery)) {
            throw Error('You must specify a jQuery object to use as container for the posts. Current value: ' + $element);
        }

        // Default values if none are passed
        subreddit = subreddit || 'webdev';
        limit = limit || 5;

        /**
        * beforeSend: The function that sets the request headers
        *
        * data:       Limit to N threads depending on the limit variable
        *             (i keep getting more threads than specified, maybe because some of them are sticked? not sure...)
        *
        * dataType:   Is 'jsonp' for making cross domain requests, more info on wikipedia: https://en.wikipedia.org/wiki/JSONP
        *
        * success:    The function that will render the informations on the reddit feed
        *
        * url:        Where we find the info, the final ?jsonp=? is apparently needed, even with dataType set
        */
        $.ajax({
            beforeSend: setHeader,
            data: {
                limit: limit
            },
            dataType: 'jsonp',
            success: handleSuccess,
            url: 'https://www.reddit.com/r/' + subreddit + '/.json?jsonp=?'
        });

        /**
        * For every request that we make to the reddit's API we need to give some info about who we are and what we are doing
        * More info: https://github.com/reddit/reddit/wiki/API
        */
        function setHeader(request) {
            request.setRequestHeader('User-Agent', 'Using reddit API for a /r/webdev project: https://github.com/Reddit-Web-Dev/Reddit-Web-Dev.github.io');
        }

        function handleSuccess(data, text, xhr) {
            render($element, data);
        }
    }

    /**
    * Renders the data coming from reddit to a jQuery element
    */
    function render($element, data) {
        var threads = data.data.children,
            output = '',
            i;

        for(i=0; i<threads.length; i++) {
            var td = threads[i].data,
                sub         = td.subreddit,
                author      = td.author,
                authorUrl   = 'https://www.reddit.com/u/' + author,
                numComments = td.num_comments,
                thumbnail   = td.thumbnail,
                threadUrl   = 'https://www.reddit.com' + td.permalink,
                externalUrl = td.url,
                title       = td.title,
                createdAt   = new Date(td.created_utc * 1000),
                dateValues  = [
                    createdAt.getUTCFullYear(),
                    MONTHS[createdAt.getUTCMonth()],
                    createdAt.getUTCDate(),
                    createdAt.getUTCHours(),
                    createdAt.getUTCMinutes(),
                ];

            createdAt = dateValues[1] + ' ' + pad(dateValues[2]) + ', ' + dateValues[0] + ' at ' + pad(dateValues[3]) + ':' + pad(dateValues[4]);

            // If the thumbnail is not available we replace it with a placeholder
            if(!thumbnail || thumbnail === 'self' || thumbnail === 'default') {
                thumbnail = '/images/reddit-placeholder.jpg';
            }

            output +=   '<li class="tread">' +
                            '<div class="tread-thumbnail">' +
                                '<a href="' + externalUrl + '">' +
                                    '<img src="' + thumbnail + '" alt="thumbnail" />' +
                                '</a>' +
                            '</div>' +
                            '<div class="tread-content">' +
                                '<a href="' + externalUrl + '"><h3 class="tread-title">' + title + '</h3></a>' +
                                '<span class="tread-info">Submitted ' + createdAt + ' by <a href="' + authorUrl + '">' + author + '</a></span>' +
                                '<a href="' + threadUrl + '" class="tread-comments">' + numComments + ' comment' + (numComments === 1 ? '' : 's') + '</a>' +
                            '</div>' +
                        '</li>';

            if(i === threads.length-1){
                output += '<li class="external-link"><a class="button" href="https://www.reddit.com/r/' + sub + '">See more at /r/' + sub + '</a></li>';
            }
        }

        $element.html(output);

        function pad(num) {
            return num < 10 ? '0' + num : num;
        }
    }

    // Expose methods
    return {
        fetchNewPosts: getRedditFeed
    };
})(jQuery);
