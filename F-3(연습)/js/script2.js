$(function() {
    $(".menu").on("mouseenter", function(){
        // $(".sub-menu-list").stop().slideDown();
        // $(".menu-bg").stop().slideDown();
        $(".sub-menu-list, .menu-bg").stop().slideDown();
    });
    $(".menu").on("mouseleave", function(){
        // $(".sub-menu-list").stop().slideUp();
        // $(".menu-bg").stop().slideUp();
        $(".sub-menu-list, .menu-bg").stop().slideUp();
    });


    setInterval(function(){
        $(".slide-wrap").animate({"margin-left": "-100%"}, function() {
            $(".slide:first").appendTo(".slide-wrap");
            $(".slide-wrap").css("margin-left", "0");
        });
    }, 3000);


    // tab 
    $(".tab-menu li").on("click", function(){
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");

        let idx = $(this).index();
        $(".tab-contents > div").hide();
        $(".tab-contents > div").eq(idx).show();
        
        return false;
    });


    // popup 
    $(".notice-list li:first-child").on("click", function(){
        $(".popup").show();
    });
    $(".close-btn").on("click", function(){
        $(".popup").hide();
    });
});






