$(function (){
    $(".menu").on("mouseenter", function(){
        $(this).find(".sub-menu-list").stop().slideDown(500);
    });
    $(".menu").on("mouseleave", function(){
        $(this).find(".sub-menu-list").stop().slideUp(500);
    });

    let i = 0;
    setInterval(function(){
        if (i < 2) {
            i++;
        } else {
            i = 0;
        };
        $(".slide").fadeOut();
        $(".slide").eq(i).fadeIn();
    },3000);

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

    $(".notice-list:first-child").on("click", function () {
        $(".popup").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    });

});

