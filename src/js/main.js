'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    const arts = document.querySelectorAll('.portfolio__item'),
          button = document.querySelector('.portfolio__button');

    function hideArts() {
        arts.forEach((item, i) => {
            if (i > 3) {
                item.classList.add('hide');
                button.textContent = 'Load more';
            }
        });
    }

    function showArts() {
        arts.forEach(item =>{
            if (item.classList.contains('hide')) {
                item.classList.remove('hide');
                button.textContent = 'Hide works';
            }
        });
    }

    button.addEventListener('click', (e) => {
        if (e.target.innerText == 'Load more'){
            showArts();
        } else {
            hideArts();
        }
    });

    hideArts();
    
});