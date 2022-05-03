document.addEventListener("DOMContentLoaded", ()=>{
    new Swiper(".main_slider",{
        slidesPerView: 1,
        loop: true,
        pagination : {
            type: "bullets",
            el: ".slider__pagination"
        }
    });
    new Swiper(".mobile_slider", {
        slidesPerView: 1,
        loop: true,
        pagination : {
            type: "bullets",
            el: ".mobile_slider_pagination",
            dynamicBullets: true
        }
    });
});