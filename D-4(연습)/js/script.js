$(function () {
    $(".menu").on("mouseenter", function () {
        $(".sub-menu-list").stop().fadeIn();
        $(".sub-menu-list").css("display", "flex");
        $(".menu-bg").stop().fadeIn();
    });
    $(".menu").on("mouseleave", function () {
        $(".sub-menu-list").stop().fadeOut();
        $(".menu-bg").stop().fadeOut();
    });


    let i = 0;
    setInterval(function () {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }

        $(".slide").fadeOut();
        $(".slide").eq(i).fadeIn();
    }, 3000);

    $(".notice-list li:first").on("click", function () {
        $(".popup").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    });
})