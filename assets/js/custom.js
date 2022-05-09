$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    navText: [
        "<img src='assets/img/left-icon.png' class='img-responsive' />", "<img src='assets/img/right-icon.png' class='img-responsive' />"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
