import 'instafeed';
import 'magnific-popup';
import $ from 'jquery';
import instafeedBlog from '../../../../templates/components/aima/instafeedBlog.html';

$(document).ready(() => {
    const userFeed = new Instafeed({
        get: 'user',
        userId: '1365016737',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '1365016737.17babc8.2fb840ae0ede4b44933f5547e7c3f31d',
        sortBy: 'most-recent',
        template: instafeedBlog,
        // '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank">' +
        // '<img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();

    /*= === Creating a single gallery from all elements that have class "gallery-item ======== */
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true,
        },
    });
});
