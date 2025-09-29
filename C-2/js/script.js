$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown(500);
    })

    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp(500);
    })



    // $(".slide").fadeOut();
    // $(".slide").eq(1).fadeIn();

    // $(".slide").fadeOut();
    // $(".slide").eq(2).fadeIn();

    // $(".slide").fadeOut();
    // $(".slide").eq(0).fadeIn();


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

    $(".notice-list li").on("click", function () {
        $(".popup-wrap").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup-wrap").hide();

    });

});