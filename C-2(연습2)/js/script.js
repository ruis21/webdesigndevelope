$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    })
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });

    let i = 0;
    setInterval(function () {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        // let idx = $(this).index();
        $(".slide").fadeOut();
        $(".slide").eq(i).fadeIn();
    }, 3000);


    $(".notice-list li:first").on("click", function () {
        $(".popup-wrap").show();
    })
    $(".close-btn").on("click", function () {
        $(".popup-wrap").hide();
    })
});