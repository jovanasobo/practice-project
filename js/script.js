$(document).ready(function () {


    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".pp-l-header").addClass("pp-l-header--scroll");
        } else {
            $(".pp-l-header").removeClass("pp-l-header--scroll");
        }
    });

    $('.pp-c-careers-dropdown').each(function () {
        var $dropdown = $(this);

        $(".pp-c-careers-dropdown__link", $dropdown).click(function (e) {
            e.preventDefault();
            $div = $(".pp-c-careers-dropdown__container", $dropdown);
            $div.toggle();
            $(".pp-c-careers-dropdown__container").not($div).hide();
            return false;
        });

    });

    $('html').click(function () {
        $(".pp-c-careers-dropdown__container").hide();
    });
});