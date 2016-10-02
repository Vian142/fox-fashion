/* menu */
(function () {
    var menuBtn = $('.menu-trigger'),
        mainMenu = $('.main-menu'),
        linkMenu = $(mainMenu).find('a'),
        windowWidth = 0;
    $(window).resize(function () {
        windowWidth = $(window).width();
        if (windowWidth > 768) {
            $(mainMenu).removeClass('main-menu--active');
        }
    });
    $(menuBtn).click(function (event) {
        event.preventDefault();
        $(mainMenu).toggleClass('main-menu--active');
    });
    $(linkMenu).click(function () {
        $(mainMenu).removeClass('main-menu--active');
    });
})();


$(document).ready(function(){
    $('#quoteSlider').slick({
        dots: true
    });
});
