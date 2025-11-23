$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    }).on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });

    let w = $(window).width() - 600;

    setInterval(function () {
        $(function () {
            $(".slide-wrap").animate({ "margin-left": -w }, function () {
                $(".slide:first").appendTo(".slide-wrap");
                $(".slide-wrap").css("margin-left", "0");
            }, 3000);
        });
    });

    setInterval(function (slide) {
        $(".slide-wrap").animate({ "margin-left": -w * 1 }, 3000);
    })

    slide();


});



