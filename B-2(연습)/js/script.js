$(".menu").on("mouseenter", function () {
    $(this).find(".sub-menu-list").stop().slideDown();
});
$(".menu").on("mouseleave", function () {
    $(this).find(".sub-menu-list").stop().slideUp();
});