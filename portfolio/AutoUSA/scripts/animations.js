document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('.promo__title').classList.add("backInLeft");
    document.querySelector('#promo .violet_btn').classList.add("fadeInUp");
    document.querySelector('.promo__car_bg').classList.add("bounceInRight");
    document.querySelector('.header__phone').classList.add("animate__heartBeat");

    let titlesSections = document.getElementsByClassName("title_section"),
        triggerHeight = 500;

    window.addEventListener("scroll", ()=>{
        if(titlesSections[0].getBoundingClientRect().top <= triggerHeight){
            titlesSections[0].classList.add("backInLeft");
        }
        if(titlesSections[1].getBoundingClientRect().top <= triggerHeight){
            titlesSections[1].classList.add("backInLeft");
        }
        if(titlesSections[2].getBoundingClientRect().top <= triggerHeight){
            titlesSections[2].classList.add("backInLeft");
        }
        if(titlesSections[3].getBoundingClientRect().top <= triggerHeight){
            titlesSections[3].classList.add("backInLeft");
        }
        if(titlesSections[4].getBoundingClientRect().top <= triggerHeight){
            titlesSections[4].classList.add("backInLeft");
        }
    });
});