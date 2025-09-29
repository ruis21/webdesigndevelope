$(function () {
    $(".menu > a").on("mouseenter", function () {
        $(".sub-menu-list").stop().slideDown(500);
    });
    $(".menu-list").on("mouseleave", function () {
        $(".sub-menu-list").stop().slideUp(500);
    });

    setInterval(function () {
        $(".slide-wrap").animate({ "margin-top": "-300px" }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-top", "0");
        });
    }, 3000);

    $(".tab-menu li").on("click", function () {
        // alert($(this).index());
        let idx = $(this).index();

        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");

        $(".tab-contents > div").hide();
        $("")

        $(".tab-contents > div").hide();
        $(".tab-contents > div").eq(idx).show();

    });

    // popup

    $(".popup-btn").on("click", function () {
        $(".popup").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    });

});

