require(['jquery'], function($) {
    $('.social_share, [data-social-share="true"]').on('click', function(e) {
        e.preventDefault();

        var _this = $(e.target).is('a') ? $(e.target) : $(e.target).closest('a');
        var title = _this.attr('title') !== '' ? _this.attr('title') : 'Social Share';
        var w = 500,
            h = 400,
            left = (screen.width / 2) - (w / 2),
            top = (screen.height / 2) - (h / 2),
            url = _this.attr('href');

        if (typeof VC4A_SOCIAL_TRACKING !== 'undefined' && VC4A_SOCIAL_TRACKING) {
            if (typeof window.dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'socialInt',
                    'socialNetwork': _this.data('network'),
                    'socialAction': 'share',
                    'socialTarget': url
                });
            }
        }

        // open popup window
        return window.open(_this.attr('href'), title, 'toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left).focus();
    });
});