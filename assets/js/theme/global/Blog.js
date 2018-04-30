<ul id='instaside'>
</ul>;

$(document).ready(() => {
    const instaside = new Instafeed({
        get: 'user',
        target: 'instaside',
        userId: 381848181,
        limit: 9,
        sortBy: 'random',
        accessToken: '381848181.1677ed0.14b2e5f55b6842a2a898da10ef99cb54',
        after() {
            const owl = $('#instaside');
            owl.slick({
                dots: false,
                infinite: false,
                speed: 800,
                prevArrow: '<div class="slider-nav-prev"></div>',
                nextArrow: '<div class="slider-nav-next"></div>',
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                draggable: true,
                infinite: true,
                autoplaySpeed: 3500,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
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
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ],
            });
        },


        template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></li>',
        resolution: 'standard_resolution',


    });
    instaside.run();
});
