$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    })
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });


    setInterval(function () {
        $(".slide-wrap").animate({
            "margin-left": "-800px"
        }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-left", "0");
        });
    }, 3000);

    $(".notice-list li:first").on("click", function () {
        $(".popup").show();
    })
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    })
});