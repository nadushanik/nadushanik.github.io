const btn = document.querySelector('.technic__b');
const cards = document.querySelector('.technic__list');
const text = document.querySelector('.technic__b--text');
const img = document.querySelector('.technic__b--img');

btn.addEventListener('click', function() {
    if (cards.classList.contains('collapsed')) {
        cards.classList.remove('collapsed');
        cards.classList.add('expanded');
        text.textContent = "Скрыть";
        img.classList.add('rotates');
    } else {
        cards.classList.remove('expanded');
        cards.classList.add('collapsed');
        text.textContent = "Показать все";
        img.classList.remove('rotates');
    }
});