$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown(500);
    });

    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp(500);
    });

    // $(".menu").on("mouseenter", function () {
    //     $(this).find(".sub-menu-list").stop().slideDown(500);
    // }); on("mouseleave", function () {
    //     $(this).find(".sub-menu-list").stop().slideUp(500);
    // });

    // 세로슬라이드 버전
    setInterval(function () {
        $(".slide-wrap").animate({ "margin-top": "-300px" }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-top", "0");
        });
    }, 3000);


    // 가로 슬라이드 시
    // setInterval(function () {
    //     $(".slide-wrap").animate({ "margin-left": "-1200px" }, function () {
    //         $(".slide:first").appendTo(".slide-wrap");
    //         $(".slide-wrap").css("margin-left", "0");
    //     });
    // }, 3000);


    $(".popup-on").on("click", function () {
        $(".popup").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    });


});