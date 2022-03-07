window.addEventListener('load', function () {
    const header = document.querySelector('header');
    const bodyElement = document.querySelector('.body');
    const iconMenuListDown = document.querySelector(
        '.header-body-foot-category i'
    );

    const menuListDown = document.querySelector('.header-body-foot-category');

    menuListDown.onmouseover = () => {
        iconMenuListDown.className = 'bi bi-chevron-up';
    };

    menuListDown.onmouseleave = () => {
        iconMenuListDown.className = 'bi bi-chevron-down';
    };

    bodyElement.style.marginTop = `${header.offsetHeight}px`;
    console.log('heder', header.offsetHeight);

    $('.lazada__head-slider').slick({
        slidesToShow: 9,
        slidesToScroll: 9,
        autoplay: true,
        autoplaySpeed: 2000,
        arow: true,
        prevArrow:
            "<button type='button' class='slick-prev slick-arow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next slick-arow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
