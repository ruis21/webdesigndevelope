$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    });
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });

    // setInterval(function () {
    //     if (i < 2) {
    //         i++;
    //     } else {
    //         i = 0;
    //     }
    //     $(".slide-wrap").animate({ "margin-left": "-w*i" })
    //     $(".slide-wrap").animate({ "margin-left": "-w*i" })

    // });


    let w = $(window).width() - 430;
    setInterval(function () {
        $(".slide-wrap").animate(
            { "margin-left": -w + "px" },
            function () {
                $(".slide:first").appendTo(".slide-wrap");
                $(".slide-wrap").css("margin-left", "0");
            }
        );
    }, 3000);


});