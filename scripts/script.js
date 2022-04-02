$(function () {
    let btnGoTopPage = document.querySelector('.btn_go_top_page');
    let flagShowGoTopBtn = false;
    btnGoTopPage.addEventListener("click", () => {
        document.querySelector('header').scrollIntoView(true);
    });
    window.addEventListener("scroll", () => {
        if(window.scrollY == 0){
            flagShowGoTopBtn = false;
            btnGoTopPage.style.display = "none";
        }
        if (!flagShowGoTopBtn) {
            if (window.scrollY > 800) {
                btnGoTopPage.style.animation = "subtitleShow 1s ease-in-out forwards, floating 1.5s infinite";
                btnGoTopPage.style.display = "flex";
                flagShowGoTopBtn = true;
            }
        }
    });

    btnGoTopPage.addEventListener("mouseenter", ()=>{
        btnGoTopPage.style.animationPlayState = "paused";
    });
    btnGoTopPage.addEventListener("mouseleave", ()=>{
        btnGoTopPage.style.animationPlayState = "running";
    });

    if (document.documentElement.offsetWidth <= 576) {
        //  Мобильное меню  ===============================

        let mobileMenu = document.querySelector('.mobile_menu'),
            hamburger = document.querySelector('.header__hamburger'),
            closeMobileMenuBtn = document.querySelector('.mobile_menu__close_btn'),
            btnCloseImage = document.querySelector('.mobile_menu__close_btn img');

        hamburger.addEventListener("click", () => {
            $(mobileMenu).slideDown(1000);
            document.body.style.overflowY = "hidden";
            btnCloseImage.classList.add("btn_show");
            btnCloseImage.classList.remove("btn_close");
        });

        closeMobileMenuBtn.addEventListener("click", () => {
            $(mobileMenu).slideUp(1000);
            document.body.style.overflowY = "scroll";
            btnCloseImage.classList.add("btn_close");
            btnCloseImage.classList.remove("btn_show");
        });
    }
    // Анимации (пк)=====================================
    if (document.documentElement.offsetWidth > 576) {
        window.addEventListener("load", () => {
            if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
                document.querySelector('.promo__slider_item_1 .promo__title').classList.add("subtitle_show");
            }
        });
        window.addEventListener("load", () => {
            if (window.location.pathname == "/pages/about.html") {
                document.querySelector('#about .promo__title').classList.add("slideExpandUp");
            }
        });

        window.addEventListener("load", () => {
            if (window.location.pathname == "/pages/blog.html") {
                document.querySelector('.blog__image').classList.add("subtitle_show");
            }
        });

        window.addEventListener("scroll", () => {
            if (window.location.pathname == "/pages/about.html") {
                if (document.querySelector('#about .article__title').getBoundingClientRect().top <= ((document.documentElement.clientHeight / 2) + 200)) {
                    document.querySelector('#about .article__title').classList.add("stretchRight");
                }
                if (document.querySelector('#about .article__text').getBoundingClientRect().top <= ((document.documentElement.clientHeight / 2) + 200)) {
                    document.querySelector('#about .article__text').classList.add("pullDown");
                }

            }

            if (window.location.pathname == "/pages/blog.html") {
                if (document.querySelector('.blog__citation').getBoundingClientRect().top <= ((document.documentElement.clientHeight / 2) + 200)) {
                    document.querySelector('.blog__citation').classList.add("vanishIn");
                }
                if (document.querySelector('.page_2 .blog__citation').getBoundingClientRect().top <= ((document.documentElement.clientHeight / 2) + 200)) {
                    document.querySelector('.page_2 .blog__citation').classList.add("vanishIn");
                    document.querySelector('.page_2 .blog__citation').style.animationDelay = "2.6s";
                }
                let blogTitles = document.querySelectorAll('.blog__title');
                if (blogTitles[1].getBoundingClientRect().top <= ((document.documentElement.clientHeight / 2) + 200)) {
                    blogTitles[1].classList.add("subtitle_show");
                }
            }

            if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
                if (document.querySelector('.collection__title').getBoundingClientRect().top <= (document.documentElement.clientHeight / 2) + 100) {
                    document.querySelector('.collection__title').classList.add("subtitle_show");
                }
                if (document.querySelector('.aesthetic__title').getBoundingClientRect().top <= ((document.documentElement.clientHeight / 2) + 500)) {
                    document.querySelector('.aesthetic__title').classList.add("foolishIn");
                }

                let iconsSchemeWork = document.querySelectorAll('.scheme__step_icon img');

                if (iconsSchemeWork[0].getBoundingClientRect().top <= (document.documentElement.clientHeight / 2)) {
                    iconsSchemeWork[0].classList.add("bigEntrance");

                    iconsSchemeWork[1].classList.add("bigEntrance");
                    iconsSchemeWork[1].style.animationDelay = "0.5s";

                    iconsSchemeWork[2].classList.add("bigEntrance");
                    iconsSchemeWork[2].style.animationDelay = "0.8s";

                    iconsSchemeWork[3].classList.add("bigEntrance");
                    iconsSchemeWork[3].style.animationDelay = "1.2s";

                    let schemeStepsTitles = document.querySelectorAll('.scheme__step_title');

                    schemeStepsTitles.forEach((item) => {
                        item.classList.add("subtitle_show");
                        item.style.animationDelay = "2s";
                    });
                }

                if (document.querySelector('.ideas__title').getBoundingClientRect().top <= (document.documentElement.clientHeight / 2)) {
                    document.querySelector('.ideas__title').classList.add("subtitle_show");
                }

                let ideasBlocks = document.querySelectorAll('.ideas__item_block');
                if (ideasBlocks[0].getBoundingClientRect().top <= (document.documentElement.clientHeight / 2)) {
                    ideasBlocks[0].style.transform = "translateX(0%)";
                }
                if (ideasBlocks[1].getBoundingClientRect().top <= (document.documentElement.clientHeight / 2)) {
                    ideasBlocks[1].style.transform = "translateX(0%)";
                }
            }


        });
    }


    // Анимация аналитики ==================
    let flagIsCheckPercent = false;

    window.addEventListener("scroll", () => {
        if (window.location.pathname == "/pages/about.html") {
            if (document.querySelector('.analitics__info').getBoundingClientRect().top <= (document.documentElement.clientHeight / 2)) {
                let progress = document.querySelectorAll(".analitics__info_progress");
                progress.forEach((item) => {
                    item.classList.add("analitics__info_progress_anim");
                });

                if (!flagIsCheckPercent) {
                    let percent = document.querySelectorAll('.analitics__info_percent');
                    ChangeProgressBar(percent[0], 80, true);
                    ChangeProgressBar(percent[1], 70, true);
                    ChangeProgressBar(percent[2], 75, true);
                    ChangeProgressBar(percent[3], 40, true);

                    flagIsCheckPercent = true;
                }
            }
        }
    });
    let counterProgress = 0;

    function ChangeProgressBar(item, percent, flag = false) {
        if (flag) {
            counterProgress = 0;
        }
        item.textContent = `${counterProgress}%`;
        if (counterProgress < percent) {
            setTimeout(() => {
                ChangeProgressBar(item, percent);
            }, 40);
            counterProgress++;
        } else {
            item.textContent = `${percent}%`;
        }
    }
    // Анимации (мобильные)=====================================

    if (document.documentElement.offsetWidth <= 576) {
        window.addEventListener("load", () => {
            if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
                document.querySelector('.promo__slider_item_1 .promo__title').classList.add("subtitle_show");
            }
        });

        window.addEventListener("load", () => {
            if (window.location.pathname == "/pages/about.html") {
                document.querySelector('.promo__title').classList.add("subtitle_show");

                window.addEventListener("scroll", () => {
                    let articleTitle = document.querySelector('#about #article .article__title');
                    let analiticsTitle = document.querySelector('.analitics__title');

                    if (articleTitle.getBoundingClientRect().top <= 540) {
                        articleTitle.classList.add("foolishIn");
                    }
                    if (analiticsTitle.getBoundingClientRect().top <= 500) {
                        analiticsTitle.classList.add("foolishIn");
                    }

                    let aboutPhoto = document.querySelectorAll('.gallery__image ');

                    if (aboutPhoto[2].getBoundingClientRect().top <= 500) {
                        aboutPhoto[2].classList.add("photo_show");
                    }
                    if (aboutPhoto[3].getBoundingClientRect().top <= 520) {
                        aboutPhoto[3].classList.add("photo_show");
                    }
                    if (aboutPhoto[4].getBoundingClientRect().top <= 540) {
                        aboutPhoto[4].classList.add("photo_show");
                    }

                });
            }
        });

        let blogTitles = document.querySelectorAll('.blog__title');

        window.addEventListener("load", () => {
            if (window.location.pathname == "/pages/blog.html") {
                blogTitles[0].classList.add("subtitle_show");
            }
        });

        window.addEventListener("scroll", () => {
            if (window.location.pathname == "/pages/blog.html") {

                if (blogTitles[1].getBoundingClientRect().top <= 500) {
                    blogTitles[1].classList.add("subtitle_show");
                }
                if (blogTitles[2].getBoundingClientRect().top <= 500) {
                    blogTitles[2].classList.add("subtitle_show");
                }
                if (blogTitles[3].getBoundingClientRect().top <= 500) {
                    blogTitles[3].classList.add("subtitle_show");
                    blogTitles[3].style.animationDelay = "1.3s";
                }
            }

            if (document.querySelector('.collection__title').getBoundingClientRect().top <= 500) {
                document.querySelector('.collection__title').classList.add("subtitle_show");
            }

            if (document.querySelector('.aesthetic__title').getBoundingClientRect().top <= 500) {
                document.querySelector('.aesthetic__title').classList.add("subtitle_show")
            }
            let iconsSchemeWork = document.querySelectorAll('.scheme__step_icon img');

            if (iconsSchemeWork[0].getBoundingClientRect().top <= 500) {
                iconsSchemeWork[0].classList.add("icons_show");
            }
            if (iconsSchemeWork[1].getBoundingClientRect().top <= 525) {
                iconsSchemeWork[1].classList.add("icons_show");
            }
            if (iconsSchemeWork[2].getBoundingClientRect().top <= 540) {
                iconsSchemeWork[2].classList.add("icons_show");
            }
            if (iconsSchemeWork[3].getBoundingClientRect().top <= 520) {
                iconsSchemeWork[3].classList.add("icons_show");
            }

            let photoHome = document.querySelectorAll('.collage__item');

            if (photoHome[1].getBoundingClientRect().top <= 500) {
                photoHome[1].classList.add("photo_show");
            }
            if (photoHome[3].getBoundingClientRect().top <= 520) {
                photoHome[3].classList.add("photo_show");
            }
            if (photoHome[4].getBoundingClientRect().top <= 540) {
                photoHome[4].classList.add("photo_show");
            }
        });
    }

    // Слайдеры     ==================================

    $('.promo__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
    });
    if (document.documentElement.clientWidth > 576) {
        $('.blog__slider').slick({
            slidesToShow: 1
        });
    } else if (document.documentElement.clientWidth <= 576) {
        $('.blog__slider').slick({
            slidesToShow: 1,
            initialSlide: 1
        });
    }

    $('.contacts__slider').slick({
        slidesToShow: 1,
    });

    // Страницы блога   =============================

    // Клик по 2 странице

    document.querySelector('.blog__page_2').addEventListener("click", (e) => {
        ClickPage(e, 2);
    });

    document.querySelector('.blog__page_next').addEventListener("click", (e) => {
        ClickPage(e, 2);
    });

    // Клик по 1 странице
    document.querySelector('.blog__page_1').addEventListener("click", (e) => {
        ClickPage(e, 1);
    });

    document.querySelector('.blog__page_prev').addEventListener("click", (e) => {
        ClickPage(e, 1);
    });

    // Функции ======================================

    function ClickPage(e, page) {
        e.preventDefault();
        document.querySelector('header').scrollIntoView(true);

        let pageOne = document.querySelector('.page_1'),
            pageTwo = document.querySelector('.page_2'),
            nextArrow = document.querySelector('.blog__page_next'),
            prevArrow = document.querySelector('.blog__page_prev'),
            onePageBtn = document.querySelector('.blog__page_1'),
            twoPageBtn = document.querySelector('.blog__page_2');

        if (page == 2) {
            pageOne.style.display = "none";
            pageTwo.style.display = "block";
            onePageBtn.classList.remove("active_page");
            twoPageBtn.classList.add("active_page");
            nextArrow.style.display = "none";
            prevArrow.style.display = "inline-block";
        } else {
            pageOne.style.display = "block";
            pageTwo.style.display = "none";
            twoPageBtn.classList.remove("active_page");
            onePageBtn.classList.add("active_page");
            prevArrow.style.display = "none";
            nextArrow.style.display = "inline-block";
        }

        $('.slider_comment').slick({
            slidesToShow: 1
        });
    }

});