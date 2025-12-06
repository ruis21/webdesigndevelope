$(function () {
    $(".menu").on("mouseenter", function () {
        $(".sub-menu-list").stop().slideDown();
        $(".menu-bg").stop().slideDown();
    });
    $(".menu").on("mouseleave", function () {
        $(".sub-menu-list").stop().slideUp();
        $(".menu-bg").stop().slideUp();
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
});