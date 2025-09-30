$(function () {
    $(".menu").on("mouseenter", function () {
        $(this).find(".sub-menu-list").stop().fadeIn();
    });
    $(".menu").on("mouseleave", function () {
        $(".sub-menu-list").stop().fadeOut();
    });


    // slide 

    // appendTo 방식 
    // let w = $(window).width() - 600;
    // setInterval(function(){
    //     $(".slide-wrap").animate({"margin-left": }, function(){
    //         $(".slide:first").appendTo(".slide-wrap");
    //         $(".slide-wrap").css("margin-left", "0");
    //     });
    // }, 3000);


    // 이미지가 다시 돌아오는 
    let w = $(window).width() - 600;
    let i = 0;
    setInterval(function () {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        $(".slide-wrap").animate({ "margin-left": -w * i });
    }, 3000);


    // popup 
    $(".notice-list li:first-child").on("click", function () {
        $(".popup-wrap").show();
    });
    $(".close-btn").on("click", function () {
        $(".popup-wrap").hide();
    });
});