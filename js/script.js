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

    var teamMemebers = [];

    $.getJSON("..//..//data.json", function (json) {
        teamMemebers = json.team_members;


        var $memberSection = $('#member_section');
        var $tmpl = $('#members__template');

        for (var i = 0; i < teamMemebers.length; i++) {
            var member = teamMemebers[i];
            var $localTemplate = $tmpl.clone();
            $localTemplate.id = 'member' + i;
            $localTemplate.removeClass('pp-c-team-members--hidden');
            var $img = $localTemplate.find('.pp-c-team-member__img');
            $img.attr('src', member.picture_data[0].src);
            $img.attr('alt', member.picture_data[0].alt);

            var $name = $localTemplate.find('.pp-c-team-member__name');
            $name.text(member.name);
            $memberSection.append($localTemplate)
            var $job = $localTemplate.find('.pp-c-team-member__job');
            $job.text(member.role);
        }

    });

});