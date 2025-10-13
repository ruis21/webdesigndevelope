$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    });
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });


    // let w = $(window).width() - 430;
    // setInterval(function () {
    //     $(".slide-wrap").animate(
    //         { "margin-left": -w + "px" },
    //         function () {
    //             $(".slide:first").appendTo(".slide-wrap");
    //             $(".slide-wrap").css("margin-left", "0");
    //         }
    //     );
    // }, 3000);

    // slide
    let w = $(window).width() - 430;
    let i = 0;
    setInterval(function () {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        $(".slide-wrap").animate({ "margin-left": -w * i });
    }, 3000);

    $(".notice-list:first").on("click", function () {
        $(".popup").show();
    })

    $(".close-btn").on("click", function () {
        $(".popup").hide();
    })



});