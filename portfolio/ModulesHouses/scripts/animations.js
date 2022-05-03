document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.promo__heading_view_btn').classList.add("vanishIn");
    document.querySelector('.promo__heading_learning_btn').classList.add("vanishIn08");
    document.querySelector('.promo__title').classList.add("puffIn");

    let triggerHeight = 600; // расстояние от верхней границ, на котором срабатывают анимации

    let titleSection = document.getElementsByClassName('title_section'),
        modulesImg = document.querySelector('.modules__img');

    if(document.documentElement.clientWidth <= 576){
        triggerHeight = 500;
    }

    window.addEventListener("scroll", () => {
        // ==================================================================
        // Анимация заголовков секций
        if (titleSection[0].getBoundingClientRect().top <= triggerHeight) {
            titleSection[0].classList.add("backInDown");
        }
        if (titleSection[1].getBoundingClientRect().top <= triggerHeight) {
            titleSection[1].classList.add("backInDown");
        }
        if (titleSection[2].getBoundingClientRect().top <= triggerHeight) {
            titleSection[2].classList.add("backInDown");
        }
        if (titleSection[3].getBoundingClientRect().top <= triggerHeight) {
            titleSection[3].classList.add("backInDown");
        }
        if (titleSection[4].getBoundingClientRect().top <= triggerHeight) {
            titleSection[4].classList.add("backInDown");
        }
        if (titleSection[5].getBoundingClientRect().top <= triggerHeight) {
            titleSection[5].classList.add("backInDown");
        }
        // ==================================================================
        // Modules img
        if (modulesImg.getBoundingClientRect().top <= triggerHeight) {
            modulesImg.classList.add("backInRight");
        }
    });

});