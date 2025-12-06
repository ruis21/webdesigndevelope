$(function () {
    $(".menu").on("mouseenter", function () {
        $(".sub-menu-list").stop().slideDown(500);
    });
    $(".menu").on("mouseleave", function () {
        $(".sub-menu-list").stop().slideUp(500);
    });


    setInterval(function () {
        $(".slide-wrap").animate({ "margin-left": "-1200px" }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-left", "0");
        })
    }, 3000);

    $(".tab-menu li").on("click", function () {
        // e.preventDefault();
        let idx = $(this).index();
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");

        $(".tab-conts > div").hide();
        $(".tab-conts > div").eq(idx).show();
    })
});