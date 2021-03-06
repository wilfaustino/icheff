$(document).ready(function () {
    $('#lightSlider').lightSlider({
        slideMargin: 10,
        slideWidth: 250,
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease',
        item: 4,
        auto: true,
        loop: true,
        pauseOnHover: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        enableTouch: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('#lightSlider2').lightSlider({
        slideMargin: 10,
        slideWidth: 250,
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease',
        item: 4,
        auto: true,
        loop: true,
        pauseOnHover: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        enableTouch: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('#lightSlider3').lightSlider({
        slideMargin: 10,
        slideWidth: 545,
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease',
        item: 2,
        auto: true,
        loop: true,
        pauseOnHover: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        enableTouch: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});