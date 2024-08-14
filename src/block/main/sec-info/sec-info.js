
    const button = document.querySelector('.description-company__further');
    const textContainer = document.querySelector('.description-company__texti');
    
    button.addEventListener('click', function() {
        if (textContainer.classList.contains('expend')) {
            textContainer.classList.remove('expend');
            button.textContent = 'Читать далее';
        } else {
            textContainer.classList.add('expend');
            button.textContent = 'Скрыть';
        }
    });