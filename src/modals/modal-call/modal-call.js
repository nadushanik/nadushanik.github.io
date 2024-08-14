const buttoncloyse = document.querySelector('.modal-call__cloyse');
const buttonopen = document.querySelector('.header-menu__call');
const modalCallbox = document.querySelector('.modal-call__box');
const modalCall = document.querySelector('.modal-call');
const buttonOPEN = document.querySelector('.menu-footer__call');

buttonopen.addEventListener('click', function() {
    modalCallbox.classList.remove('hidenn');
    modalCallbox.classList.add('call-open');
    modalCall.classList.add('call-clos');
});
buttonOPEN.addEventListener('click', function() {
    modalCallbox.classList.remove('hidenn');
    modalCallbox.classList.add('call-open');
    modalCall.classList.add('call-clos');
});
buttoncloyse.addEventListener('click', function() {
    modalCallbox.classList.add('hidenn');
    modalCallbox.classList.remove('call-open');
    modalCall.classList.remove('call-clos');
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalCallbox.classList.add('hidenn');
        modalCallbox.classList.remove('call-open');
        modalCall.classList.remove('call-clos');
    }
});
