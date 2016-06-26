
Template.mainnav.rendered = function () {
    var menu = $('#mainnav-menu');
    if (menu.length) {
        $('#mainnav-menu').metisMenu({
            toggle: true
        });
        // scrollbar = nifty.mainNav.find('.nano');
        // if (scrollbar.length) {
        //     scrollbar.nanoScroller({
        //         preventPageScrolling: true
        //     });
        // }
    }
};