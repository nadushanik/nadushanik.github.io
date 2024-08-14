
const buttoncl = document.querySelector('.menu-header__cloyse');
const buttonop = document.querySelector('.header-menu__burger');
const menubox = document.querySelector('.menu__box');
const menu = document.querySelector('.menu');


buttonop.addEventListener('click', function() {
    menubox.classList.remove('hide');
    menubox.classList.add('open');
    menu.classList.add('clos');
});
buttoncl.addEventListener('click', function() {
    menubox.classList.add('hide');
    menubox.classList.remove('open');
    menu.classList.remove('clos');
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menubox.classList.add('hide');
        menubox.classList.remove('open');
        menu.classList.remove('clos');
    }
});
