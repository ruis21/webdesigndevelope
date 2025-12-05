$(function () {
    $(".menu>a").on("mouseenter", function () {
        $(".sub-menu-list").stop().slideDown(500);
    });
    $(".menu>a").on("mouseleave", function () {
        $(".sub-menu-list").stop().slideUp(500);
    });

    $(".tab-menu").on("click", function () {
        let idx = $(this).index();
        $("tab-menu li").removeClass("on");
        $(this).addClass("on");

        $(".tab-conts > ul").hide();
        $(".tab-conts > ul").eq(idx).show();

    })


    setInterval(function () {
        $(".slide-wrap").animate({ "margin-left": "-1200px" }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-left", "0");
        })
    }, 3000);

    $(".tab-menu li").on("click", function () {
        let idx = $(this).index();
        $("tab-menu li").removeClass("on");
        $(this).addClass("on");

        $(".tab-conts > div").hide();
        $(this).eq(idx).show();
    })
});