$(function () {

    /////////////////////////////
    //         SLIDER
    ////////////////////////////
    if (document.documentElement.clientWidth < 576) {
        $('.slider').slick({
            slidesToShow: 1,
        });
    } else {
        $('.slider').slick({
            slidesToShow: 4,
            centerPadding: "100px",
        });
    }
    let arrowPrev = document.createElement("div");
    arrowPrev.textContent = "←";
    arrowPrev.classList.add("new_arrow", "new_arrow_prev");
    document.querySelector('.slick-prev').append(arrowPrev);

    let arrowNext = document.createElement("div");
    arrowNext.textContent = "→";
    arrowNext.classList.add("new_arrow", "new_arrow_next");
    document.querySelector('.slick-next').append(arrowNext);

    /////////////////////////////
    //          VIDEO
    ////////////////////////////
    let playVideoBtn = document.querySelector('.video__btn_play'),
        posterVideo = document.querySelector('.video__poster'),
        videoSource = document.querySelector('#video_source');

    playVideoBtn.addEventListener("click", ()=>{
        console.log('test');
        posterVideo.style.display = "none";
        videoSource.style.display = "block";
        videoSource.src += "?autoplay=1";
    });
    /////////////////////////////
    //        BURGER
    ////////////////////////////
    document.querySelector('.header__burger_wrapper').addEventListener("click", (e) => {
        let burger = document.querySelector('.header__burger');
        let sidebar = document.querySelector('#sidebar');

        if (burger.classList.contains("header__burger_open")) {
            $(sidebar).slideUp();
        } else {
            $(sidebar).slideDown();
            $(sidebar).css("display", "flex");
        }
        burger.classList.toggle("header__burger_open");
    });
    /////////////////////////////
    //       MORE MODAL
    ////////////////////////////
    let moreBtn = document.querySelector('.concept__btn_more'),
        moreModal = document.querySelector('#more'),
        closeModalBtn = document.querySelector('.more__close_btn'),
        openModal = false;

    moreBtn.addEventListener("click", () => {
        if (openModal) {
            moreModal.style.display = "none";
            openModal = false;
        } else {
            document.body.style.overflowY = "hidden";
            moreModal.style.display = "flex";
            openModal = true;
        }
    });

    function CloseModal() {
        moreModal.style.display = "none";
        openModal = false;
        document.body.style.overflowY = "scroll";
    }
    closeModalBtn.addEventListener("click", CloseModal);

    moreModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("more")) {
            CloseModal();
        }
    });

    window.addEventListener("keyup", (e) => {
        if (openModal) {
            if (e.code == "Escape") {
                CloseModal();
            }
        }
    });
});