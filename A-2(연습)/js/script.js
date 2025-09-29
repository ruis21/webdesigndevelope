
$(function () {
    $(".menu>a").on("mouseenter", function () {
        $(".sub-menu-list").stop().slideDown(500);
    })
    $(".menu-list").on("mouseleave", function () {
        $(".sub-menu-list").stop().slideUp(500);
    });

    setInterval(function () {
        $(".slide-wrap").animate({ "margin-left": "-1200px" }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-left", "0");
        });
    }, 3000);

    $(".popup-on").on("click", function () {
        $(".popup").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    })

});

