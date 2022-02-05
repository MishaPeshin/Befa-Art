'use strict';

document.addEventListener('DOMContentLoaded', () =>{

        //Accordion 

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

    arts.forEach(item =>{
        item.addEventListener('mouseenter', (e) =>{
        });
    });

    hideArts();
    
        //Cards events 

    const cardsDescr = document.querySelectorAll('.portfolio__descr');

    function hideCards(card) {
        card.forEach(item => {
            item.classList.add('hide');
        });
    }

    hideCards(cardsDescr);

    arts.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            cardsDescr[i].classList.remove('hide');
            cardsDescr[i].classList.add('hovered');
        });

        item.addEventListener('mouseout', () => {
            cardsDescr[i].classList.add('hide');
            cardsDescr[i].classList.remove('hovered');
        });
    });

        // hamburger

    const hamburger = document.querySelector('.navigation__hamburger'),
          menu = document.querySelector('.navigation__wrapper');

    console.log(hamburger);
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('navigation__hamburger_active');
        menu.classList.toggle('navigation__wrapper_active');
    });
});