function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');

    sidebar.classList.add('slideout');

    sidebar.addEventListener('animationend', function handleAnimationEnd() {
        sidebar.classList.remove('slideout');
        sidebar.style.display = 'none';
        sidebar.removeEventListener('animationend', handleAnimationEnd);
    });
}

// scroll to top

let scrolltop = document.querySelector('.scrolltop');

window.onscroll = function () {
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        scrolltop.classList.add("show");
    } else {
        scrolltop.classList.remove("show");
    }
};

scrolltop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});