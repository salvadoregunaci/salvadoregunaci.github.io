document.addEventListener("DOMContentLoaded", () => {

    // Mobile menu
    let burger = document.querySelector('.promo__burger_menu'),
        mobileMenu = document.querySelector('#mobile_menu'),
        closeBtnBurger = document.querySelector('.mobile_menu__close_btn'),
        openBurger = false;

    burger.addEventListener("click", () => {
        mobileMenu.style.transform = "translateY(0%)";
        openBurger = true;
    });

    closeBtnBurger.addEventListener("click", CloseBurgerMenu);

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 600 && openBurger){
            CloseBurgerMenu();
        }
    });

    function CloseBurgerMenu(){
        mobileMenu.style.transform = "translateY(-100%)";
        openBurger = false;
    }

    new Swiper(".general_swiper", {
        slidesPerView: 1,
        initialSlide: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    new Swiper(".main_slider_1", {
        slidesPerView: 1,
        arrows: false,
        loop: true,
        thumbs: {
            swiper: {
                el: ".mini_slider_1",
                slidesPerView: 5,
                spaceBetween: 10
            }
        }
    });
    new Swiper(".main_slider_2", {
        slidesPerView: 1,
        arrows: false,
        loop: true,
        thumbs: {
            swiper: {
                el: ".mini_slider_2",
                slidesPerView: 5,
                spaceBetween: 10
            }
        }
    });
    new Swiper(".main_slider_3", {
        slidesPerView: 1,
        arrows: false,
        loop: true,
        thumbs: {
            swiper: {
                el: ".mini_slider_3",
                slidesPerView: 5,
                spaceBetween: 10
            }
        }
    });

    new Swiper(".benefits__slider", {
        slidesPerView: 1,
        navigation: {
            prevEl: "#benefits .swiper-button-prev",
            nextEl: "#benefits .swiper-button-next",
            arrows: true
        },
        pagination: {
            el: "#benefits .swiper-pagination",
            clickable: true,
            type: "bullets"
        },
        breakpoints: {
            320: {
                loop: true
            },
            992: {
                loop: false
            }
        }
    });

    new Swiper(".reviews_slider", {
        slidesToShow: 1,
        loop: true,
        navigation: {
            prevEl: ".reviews-btn-prev",
            nextEl: ".reviews-btn-next",
            arrows: true
        },
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
            type: "bullets"
        }
    });

    // Мобильный слайдер для benefits
    if (document.documentElement.clientWidth <= 576) {
        new Swiper(".triggers__mobile", {
            slidesPerView: 1,
            loop: true,
            pagination: {
                type: "bullets",
                el: ".triggers__mobile_pagination",
                dynamicBullets: true
            }
        });
        new Swiper(".complete__mobile", {
            slidesPerView: 1,
            loop: true,
            pagination: {
                type: "bullets",
                el: ".complete__mobile_pagination"
            }
        });
    }

    // Benefits tabs =======================================================
    let tabPanel = document.querySelector('.benefits__tab_panel'),
        tabCarcas = document.querySelector('.benefits__tab_carcas'),
        benefitsContent_1 = document.querySelector('.benefits__content_1'),
        benefitsContent_2 = document.querySelector('.benefits__content_2');

    tabPanel.addEventListener("click", OpenPanel);
    tabCarcas.addEventListener("click", OpenCarcas);

    function OpenPanel() {
        tabPanel.classList.add("benefits__tab_active");
        tabCarcas.classList.remove("benefits__tab_active");
        benefitsContent_1.style.display = "block";
        benefitsContent_2.style.display = "none";
    }

    function OpenCarcas() {
        tabPanel.classList.remove("benefits__tab_active");
        tabCarcas.classList.add("benefits__tab_active");
        benefitsContent_1.style.display = "none";
        benefitsContent_2.style.display = "flex";
    }

});