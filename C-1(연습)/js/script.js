$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().slideDown();
    });
    $(".menu").on("mouseleave", function () {
        $(this).find(".sub-menu-list").stop().slideUp();
    });


    let i = 0;

    setInterval(function () {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        $(".slide").fadeOut();
        $(".slide").eq(i).fadeIn();
    }, 3000);


    $(".tab-menu li").on("click", function () {
        let idx = $(this).index();
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");

        $(".tab-conts ul").hide();
        $(".tab-conts ul").eq(idx).show();

        return false;
    });
});




