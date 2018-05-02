export default function stickyMenu() {
    const nav = document.querySelector('.navPages-container');
    const topOfNav = nav.offsetTop;

    function fixNav() {
        // console.log(topOfNav, window.screenY);
        if (window.scrollY >= topOfNav) {
            document.body.style.paddingTop = `${nav.offsetHeight}px`;
            document.body.classList.add('fixed-nav');
        } else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-nav');
        }
    }

    window.addEventListener('scroll', fixNav);
}

