

$(function () {
    if(document.documentElement.clientWidth <= 576){
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 310) {
                $('#benefits').slideDown(1000);
                document.querySelector('.benefits__title').style.animation = "1s showFromTopText ease 200ms forwards";
                $('.benefits__item').addClass("anim_benefits");
                $('.benefits__slider').slick({
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                });
            }
        });
        $('.carousel__slider').slick({
            slidesToShow: 1,
            arrows: false,
            dots: true
        });
        $('.catalog__for_run').fadeOut(0);
    $('.catalog__for_triatlone').fadeOut(0);
    let catalogTabs = document.querySelectorAll('.catalog__tab');

    catalogTabs.forEach(item=>{
        item.addEventListener("click", function (e) {
            if (!$(this).hasClass("catalog__active_tab")) {
                const tempElement = document.querySelector('.catalog__active_tab');
                tempElement.classList.remove("catalog__active_tab");
                $(this).toggleClass("catalog__active_tab");
                const tabAttr = $(this).attr("data-from");

                if (tabAttr == "run") {
                    $(".active_tab").fadeOut(200).removeClass("active_tab");
                    $('.catalog__for_run').fadeIn(200).addClass("active_tab");
                }
                if (tabAttr == "fitness") {
                    $(".active_tab").fadeOut(200).removeClass("active_tab");
                    $('.catalog__for_fitness').fadeIn(200).addClass("active_tab");
                }
                if (tabAttr == "triatlone") {
                    $(".active_tab").fadeOut(200).removeClass("active_tab");
                    $('.catalog__for_triatlone').fadeIn(200).addClass("active_tab");
                }
            }
        });
    });
    $('.catalog__card_more').click(function () {
        let catalogCard = this.closest(".catalog__card");

        if (this.textContent == "НАЗАД") {
            catalogCard.firstChild.remove();
            catalogCard.querySelector(".catalog__card_image").style.display = "block";
            catalogCard.querySelector(".catalog__card_title").style.display = "block";
            catalogCard.querySelector(".catalog__card_info").style.display = "block";
            this.textContent = "ПОДРОБНЕЕ";
            return;
        }
        let catalogMore = CreateNewMoreElement();
        catalogCard.querySelector(".catalog__card_image").style.display = "none";
        catalogCard.querySelector(".catalog__card_title").style.display = "none";
        catalogCard.querySelector(".catalog__card_info").style.display = "none";
        this.textContent = "НАЗАД";
        catalogCard.prepend(catalogMore);
    });
    window.addEventListener("scroll",()=>{
        if (window.scrollY >= 5000) {
            console.log('test');
            document.querySelector('.reviews__title').style.animation = "1s showFromTopText ease 500ms forwards";
            $('#reviews').slideDown(1000);
        }
    });
    document.querySelector('.promo__order_btn').addEventListener("click", (e) => {
        $('.modal_order').slideDown(600).css("display", "flex");
        document.body.style.overflowY = "hidden";
    });
    document.querySelector('.close_modal_btn').addEventListener("click", (e) => {
        const modal = e.target.closest(".modal_order");
        if (modal != null) {
            $(modal).slideUp(600);
            document.body.style.overflowY = "scroll";
        } else {
            alert("Произошла ошибка! Не найден элемент модального окна!");
        }
    });
    }
    $('.carousel__slider').slick({
        slidesToShow: 1,
    });

    /////////////////////////////
    //     МОДАЛЬНЫЕ  ОКНА
    ////////////////////////////
    document.querySelector('.promo__order_btn').addEventListener("click", (e) => {
        $('.modal_order').slideDown(600).css("display", "flex");
        document.body.style.overflowY = "hidden";
    });
    document.querySelector('.close_modal_btn').addEventListener("click", (e) => {
        const modal = e.target.closest(".modal_order");
        if (modal != null) {
            $(modal).slideUp(600);
            document.body.style.overflowY = "scroll";
        } else {
            alert("Произошла ошибка! Не найден элемент модального окна!");
        }
    });
    // кнопка перезвоните мне
    document.querySelector('.promo__call_btn').addEventListener("click", ()=>{
        document.querySelector('.order_call_window').style.display = "flex";
        document.body.style.overflowY = "hidden";
    });
    document.querySelector('.order_call_window .close_modal_btn').addEventListener("click", ()=>{
        document.querySelector('.order_call_window').style.display = "none";
        document.body.style.overflowY = "scroll";
    });
    /////////////////////////////
    //         ТАБЫ
    ////////////////////////////
    $('.catalog__for_run').fadeOut(0);
    $('.catalog__for_triatlone').fadeOut(0);
    let catalogTabs = document.querySelectorAll('.catalog__tab');

    catalogTabs.forEach(item=>{
        item.addEventListener("click", function (e) {
            if (!$(this).hasClass("catalog__active_tab")) {
                const tempElement = document.querySelector('.catalog__active_tab');
                tempElement.classList.remove("catalog__active_tab");
                $(this).toggleClass("catalog__active_tab");
                const tabAttr = $(this).attr("data-from");

                if (tabAttr == "run") {
                    $(".active_tab").fadeOut(200).removeClass("active_tab");
                    $('.catalog__for_run').fadeIn(200).addClass("active_tab");
                }
                if (tabAttr == "fitness") {
                    $(".active_tab").fadeOut(200).removeClass("active_tab");
                    $('.catalog__for_fitness').fadeIn(200).addClass("active_tab");
                }
                if (tabAttr == "triatlone") {
                    $(".active_tab").fadeOut(200).removeClass("active_tab");
                    $('.catalog__for_triatlone').fadeIn(200).addClass("active_tab");
                }
            }
        });
    });
    //
    document.querySelector('.catalog__tab').addEventListener("click", function (e) {
        if (!$(this).hasClass("catalog__active_tab")) {
            const tempElement = document.querySelector('.catalog__active_tab');
            tempElement.classList.remove("catalog__active_tab");
            $(this).toggleClass("catalog__active_tab");
            const tabAttr = $(this).attr("data-from");

            if (tabAttr == "run") {
                $(".active_tab").fadeOut(200).removeClass("active_tab");
                $('.catalog__for_run').fadeIn(200).addClass("active_tab");
            }
            if (tabAttr == "fitness") {
                $(".active_tab").fadeOut(200).removeClass("active_tab");
                $('.catalog__for_fitness').fadeIn(200).addClass("active_tab");
            }
            if (tabAttr == "triatlone") {
                $(".active_tab").fadeOut(200).removeClass("active_tab");
                $('.catalog__for_triatlone').fadeIn(200).addClass("active_tab");
            }
        }
    });
    //
    /////////////////////////////
    //    ЛЕНИВАЯ ЗАГРУЗКА
    ////////////////////////////
    window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);

        if (window.pageYOffset >= 800) {
            document.querySelector('.consultation__form>.form_btn').style.animation = "1s orderBtn ease-in-out 500ms 2 alternate";
        }
        if (window.pageYOffset >= 310) {
            $('#benefits').slideDown(1000);
            document.querySelector('.benefits__title').style.animation = "1s showFromTopText ease 200ms forwards";
            $('.benefits__item').addClass("anim_benefits");
        }
        if (window.pageYOffset >= 3350) {
            document.querySelector('.reviews__title').style.animation = "1s showFromTopText ease 500ms forwards";
            $('#reviews').slideDown(1000);
        }
    });
    /////////////////////////////
    //         ПОДВАЛ
    ////////////////////////////
    document.querySelector('#footer').addEventListener("mouseenter", () => {
        window.addEventListener("keydown", (e) => {
            if (e.ctrlKey) {
                $('.footer__info').hide();
            }
        });
        window.addEventListener("keyup", (e) => {
            $('.footer__info').show();
        });
    });
    /////////////////////////////
    //  "ПОДРОБНЕЕ" о товаре
    ////////////////////////////

    $('.catalog__card_more').click(function () {
        let catalogCard = this.closest(".catalog__card");

        if (this.textContent == "НАЗАД") {
            catalogCard.firstChild.remove();
            catalogCard.querySelector(".catalog__card_image").style.display = "block";
            catalogCard.querySelector(".catalog__card_title").style.display = "block";
            catalogCard.querySelector(".catalog__card_info").style.display = "block";
            this.textContent = "ПОДРОБНЕЕ";
            return;
        }
        let catalogMore = CreateNewMoreElement();
        catalogCard.querySelector(".catalog__card_image").style.display = "none";
        catalogCard.querySelector(".catalog__card_title").style.display = "none";
        catalogCard.querySelector(".catalog__card_info").style.display = "none";
        this.textContent = "НАЗАД";
        catalogCard.prepend(catalogMore);
    });



    function CreateNewMoreElement() {
        let catalogMore = document.createElement("ul");
        catalogMore.classList.add(".catalog__more_info");
        catalogMore.innerHTML = `
        <li class="catalog__more_item"><span>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</span></li>
        <li class="catalog__more_item"><span>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</span></li>
        <li class="catalog__more_item"><span>Также Вы увидите информацию о расходе калорий за тренировку;</span></li>
        <li class="catalog__more_item"><span>Вы сможете посмотреть данные по 10 тренировкам.</span></li>
    `;
        return catalogMore;
    }
});