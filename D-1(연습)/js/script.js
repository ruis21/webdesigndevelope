$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    });
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });

    setInterval(function () {
        $(".slide-wrap").animate({ "margin-top": "-400px" }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-top", "0");
        });
    }, 3000);


    $(".tab-menu li").on("click", function () {
        let idx = $(this).index();

        $(".tab-menu li").removeClass("on")
        $(this).addClass("on");

        $(".tab-conts>div").hide();
        $(".tab-conts>div").eq(idx).show();
    })

    $(".notice-list li:first").on("click", function () {
        $(".popup").show();
    })
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    })
});
