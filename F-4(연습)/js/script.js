$(function () {
    $(".menu").on("mouseenter", function () {
        $(".menu-bg").stop().slideDown();
        $(this).find(".sub-menu-list").stop().slideDown();
    });
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
        $(".menu-bg").stop().slideUp();
    });

    setInterval(function () {
        $(".slide-wrap").animate({
            "margin-top": "-350px"
        }, function () {
            $(".slide:first").appendTo(".slide-wrap")
            $(".slide-wrap").css("margin-top", "0")
        });
    }, 3000);

    $(".notice-list li:first").on("click", function () {
        $(".popup-wrap").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup-wrap").hide();
    });
});
