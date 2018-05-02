import Cookies from 'js-cookie';
import 'jquery-colorbox';
import $ from 'jquery';

export default function newsletterModal() {
    let lastFocus;
    $('.button').on('click', () => {
        $.colorbox.close();
    });

    function onPopupOpen() {
        $('#modalNewsletter').show();
        $('#emailo').focus();
    }

    function onPopupClose() {
        $('#modalNewsletter').hide();
        Cookies.set('colorboxShown', 'yes', {
            expires: 1,
        });
        lastFocus.focus();
    }

    function displayPopup() {
        $.colorbox({
            inline: true,
            href: '#modalNewsletter',
            className: 'cta',
            width: 600,
            height: 350,
            onOpen: onPopupOpen,
            onClosed: onPopupClose,
        });
    }
    const popupShown = Cookies.get('colorboxShown');
    if (popupShown) {
        console.log('Cookie found. no action necessary');
    } else {
        console.log('No cookie found. Opening popup in 3 seconds');
        setTimeout(() => {
            lastFocus = document.activeElement;
            displayPopup();
        }, 3000);
    }
}
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     const expires = `expires=${d.UTCString()}`;
//     document.cookie = `${cname}=${cvalue};${expires};path=/`;
// }
//
// function getCookie(cname) {
//     const name = `${cname}=`;
//     const decodeCookie = decodeURIComponent(document.cookie);
//     const ca = decodeCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === ' ') {
//             c = c.substring(name.length, c.length);
//         }
//     }
//     return '';
// }
// function checkCookie() {
//     const newsletter = getCookie('newsletter');
//     if (newsletter === '') {
//         setTimeout(() => {
//             $('.popup_wrapper').css({ opacity: '1', visibility: 'visible' });
//         }, 2000);
//     }
// }
// $(document).ready(() => {
//     $('header').sticky({
//         topSpacing: 0,
//         zIndex: 999,
//     });
//     checkCookie();
//     $('.popup_off').click(() => {
//         setCookie('newsletter', 'newsletter', 1);
//         $('.popup_wrapper').hide();
//     });
// });

