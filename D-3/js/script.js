$(function () {
    // alert("확인");
    $(".menu").on("mouseenter", function () {
        $(".sub-menu-list").stop().fadeIn();
        $(".sub-menu-list").css("display", "flex");
        $(".menu-bg").stop().fadeIn();
    });
    $(".menu").on("mouseleave", function () {
        $(".sub-menu-list").stop().fadeOut();
        $(".menu-bg").stop().fadeOut();
    });


    // slide 
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

        $(".tab-contents > div").hide();
        $(".tab-contents > div").eq(idx).show();
    });


    // popup 
    $(".notice-list li:first-child").on("click", function () {
        $(".popup").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup").hide();
    })
});