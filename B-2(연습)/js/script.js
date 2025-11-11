$(".menu").on("mouseenter", function () {
    $(this).find(".sub-menu-list").stop().slideDown();
    $(".menu-bg").stop().slideDown();
});
$(".menu").on("mouseleave", function () {
    $(this).find(".sub-menu-list").stop().slideUp();
    $(".menu-bg").stop().slideUp();
});

setInterval(function () {
    $(".slide-wrap").animate({ "margin-top": "-300px" }, function () {
        $(".slide:first").appentTo(".slide-wrap")
        $(".slide-wrap").css("margin-top", "0");
    });
}, 3000);

$(".notice-list:first").on("click", function () {
    $(".popup").show();
});
$(".close-btn").on("click", function () {
    $(".popup").hide();
});