        (function ($) {
            $(window).on('load', function () {
                $.instagramFeed({
                    'username': 'theodior',
                    'container': "#instagram-feed1",
                    'display_profile': true,
                    'display_biography': true,
                    'display_gallery': true,
                    'callback': null,
                    'styling': true,
                    'items': 8,
                    'items_per_row': 4,
                    'margin': 1
                });


                // Show back to top button if distance from top > 0
                $(window).scroll(function () {
                    var viewportTop = $(window).scrollTop() + $(window).height();

                    if ($(window).scrollTop() > 10) {
                        $('#btn-top').addClass('d-block');
                        $('#btn-top').removeClass('d-none');
                    } else {
                        $('#btn-top').addClass('d-none');
                        $('#btn-top').removeClass('d-block');
                    }
                });

            });
        })(jQuery);
