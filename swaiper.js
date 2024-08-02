const btn = document.querySelector('.brends__btn');
const cards = document.querySelector('.brends__items');
const text = document.querySelector('.brends__btn--text');
const img = document.querySelector('.brends__btn--img');


btn.addEventListener('click', function() {
    if (cards.classList.contains('expanded')) {
        cards.classList.remove('expanded');
        text.textContent = "Показать все";
        img.classList.remove('rotate');
    } else {
        cards.classList.add('expanded');
        text.textContent = "Скрыть";
        img.classList.add('rotate');
    }
})