$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    })
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });


    // let w = $(window).width() - 600;
    // setInterval(function () {

    //     $(".slide-wrap").animate({ "margin-left": -w }, function () {
    //         $(".slide").appendTo(".slide-wrap");
    //         $(".slide-wrap").css("margin-left", "0");
    //     });
    // }, 3000);

    // let w = $(".slide-sec").width();
    let w = $(this).width() - 600;
    let i = 0;
    setInterval(function () {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        $(".slide-wrap").animate({ "margin-left": -w * i });
    }, 3000);


    $(".notice-list li:first").on("click", function () {
        $(".popup-wrap").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup-wrap").hide();
    })

});



