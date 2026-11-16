// projectsSlider
var swiper = new Swiper(".projectsSlider", {
    // slidesPerView: 2,
    // spaceBetween: 30,
    loop: true,
    // autoplay:{
    //     delay:1
    // },
    speed:1500,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        500: {
            spaceBetween: 15,
            slidesPerView: 2
        },
        768: {
            spaceBetween: 25,
            slidesPerView:1.5
        },
        1024: {
            spaceBetween: 40,
            slidesPerView:3
        },                
    }
});

$(".menuIcon").click(function(){
    $(".navmenu-main, .navmenu").addClass("active")
    $(".overlay").addClass("active")
})
$(".menuCloseBtn, .navmenu-main  li, .navmenu  li, .overlay").click(function(){
    $(".navmenu-main, .navmenu").removeClass("active")
    $(".overlay").removeClass("active")
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".header_main").addClass("active");
    } else {
        $(".header_main").removeClass("active");
    }
}); 

$(window).scroll(function () {
    let winWidth = $(window).width();
    var scroll = $(window).scrollTop();
    if (winWidth < 767) {
        if (scroll >= 200) {
            $(".mobile-section-footer").addClass("active");
        } else {
            $(".mobile-section-footer").removeClass("active");
        }
    }
}); 