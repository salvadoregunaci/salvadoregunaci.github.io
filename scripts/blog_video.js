$(function () {
    // Видео

    let blogPlayVideoBtn = document.querySelector('#blog .blog__video .video_play_btn'),
        blogVideoFile = document.querySelector('#blog .blog__video .blog__video_source'),
        blogVideoPoster = document.querySelector('#blog .wrapper .page_1 .blog__video .blog__video_poster');



    blogPlayVideoBtn.addEventListener("click", () => {
        blogVideoPoster.style.display = "none";
        blogVideoFile.style.display = "block";
        blogVideoFile.style.width = "100%";
        if(document.documentElement.clientWidth <= 576){
            blogVideoFile.style.height = "315px";
        }
    });
});