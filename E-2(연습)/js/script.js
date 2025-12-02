$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").slideDown();
    })
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").slideUp();
    });

    setInterval(function () {
        $(".slide-wrap").animate({ "margin-top": "-700px" }, function () {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-top", "0");
        })
    }, 3000);

    $(".notice-list li:first").on("click", function () {
        $(".popup-wrap").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup-wrap").hide();
    });
})