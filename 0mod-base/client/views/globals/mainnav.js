Template.MainNav.rendered = function () {

    window.nifty = {
        'container'         : $('#container'),
        'contentContainer'  : $('#content-container'),
        'navbar'            : $('#navbar'),
        'mainNav'           : $('#mainnav-container'),
        'aside'             : $('#aside-container'),
        'footer'            : $('#footer'),
        'scrollTop'         : $('#scroll-top'),

        'window'            : $(window),
        'body'              : $('body'),
        'bodyHtml'          : $('body, html'),
        'document'          : $(document),
        'screenSize'        : '', // return value xs, sm, md, lg
        'isMobile'          : function(){
            return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
        }(),
        'randomInt'         : function(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        },
        'transition'          : function(){
            var thisBody = document.body || document.documentElement,
                thisStyle = thisBody.style,
                support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined;
            return support
        }()
    };

    /*************/
    var tooltip = $('.add-tooltip');
    if (tooltip.length)tooltip.tooltip();

    var popover = $('.add-popover');
    if (popover.length)popover.popover();

    var nano = $('.nano');
    if (nano.length) nano.nanoScroller({
        preventPageScrolling: true
    });

    $('#navbar-container .navbar-top-links').on('shown.bs.dropdown', '.dropdown', function () {
        $(this).find('.nano').nanoScroller({preventPageScrolling: true});
    });

    nifty.body.addClass('nifty-ready');

    /***********/
    var toggleBtn = $('.mainnav-toggle');

    if (toggleBtn.length) {
        toggleBtn.on('click', function (e) {
                e.preventDefault();

                if (toggleBtn.hasClass('push')) {
                    $.niftyNav('pushToggle');
                } else if (toggleBtn.hasClass('slide')) {
                    $.niftyNav('slideToggle');
                } else if (toggleBtn.hasClass('reveal')) {
                    $.niftyNav('revealToggle');
                } else {
                    $.niftyNav('colExpToggle');
                }
            }
        )
    }

    /*********************/
    var menu = $('#mainnav-menu');
    if (menu.length) {
        $('#mainnav-menu').metisMenu({
            toggle: true
        });
        scrollbar = nifty.mainNav.find('.nano');
        if (scrollbar.length) {
            scrollbar.nanoScroller({
                preventPageScrolling: true
            });
        }
    }
    /*************/
    if (nifty.scrollTop.length && !nifty.isMobile) {
        var isVisible = true;
        var offsetTop = 250;

        nifty.window.scroll(function(){
            if (nifty.window.scrollTop() > offsetTop && !isVisible) {
                nifty.navbar.addClass('shadow');
                nifty.scrollTop.addClass('in');
                isVisible = true;
            }else if (nifty.window.scrollTop() < offsetTop && isVisible) {
                nifty.navbar.removeClass('shadow');
                nifty.scrollTop.removeClass('in');
                isVisible = false;
            }
        });

        nifty.scrollTop.on('click', function(e){
            e.preventDefault();

            nifty.bodyHtml.animate({
                scrollTop : 0
            }, 500);
        });

    }

};