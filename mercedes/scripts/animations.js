$(function () {
    //  Анимации
    window.addEventListener("load", ()=>{
        if (document.documentElement.clientWidth > 576) {
            document.querySelector('.header__logo').classList.add("vanishInLogo");
            document.querySelector('.promo__title').classList.add("vanishIn");
            document.querySelector('.promo__subtitle').classList.add("vanishIn");
        }
        if (document.documentElement.clientWidth <= 576){
            document.querySelector('.header__logo').classList.add("vanishIn");
            document.querySelector('.promo__title').classList.add("vanishIn");
            document.querySelector('.promo__subtitle').classList.add("vanishIn");
        }
    });

    window.addEventListener("scroll", ()=>{
            let conceptBlock = document.querySelector('#concept .concept__content_wrap_1'),
                conceptBlockTwo = document.querySelector('.concept__content_wrap_2'),
                videoWrapper = document.querySelector('.video__wrapper'),
                interiorTitle = document.querySelector('.interior__title'),
                sliderText = document.querySelector('.slider__text');

            if(conceptBlock.getBoundingClientRect().top < 500){
                conceptBlock.classList.add("slideLeftReturn");
            }
            if(document.documentElement.clientWidth > 576){
                if(conceptBlockTwo.getBoundingClientRect().top < 500){
                    conceptBlockTwo.classList.add("vanishIn");
                }
            }
            else if(document.documentElement.clientWidth <= 576){
                if(conceptBlockTwo.getBoundingClientRect().top < 350){
                    conceptBlockTwo.classList.add("vanishIn");
                }
            }
            if(videoWrapper.getBoundingClientRect().top < 500){
                videoWrapper.classList.add("opacityAnim");
            }
            if(interiorTitle.getBoundingClientRect().top < 400){
                interiorTitle.classList.add("opacityAnim");
            }
            if (document.documentElement.clientWidth > 576){
                if(sliderText.getBoundingClientRect().top < 400){
                    sliderText.classList.add("vanishIn");
                }
            }
            else{
                if(sliderText.getBoundingClientRect().top < 200){
                    sliderText.classList.add("vanishIn");
                }
            }

    });
});