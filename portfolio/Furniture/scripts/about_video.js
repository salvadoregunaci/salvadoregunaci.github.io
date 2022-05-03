$(function () {
    // Видео

    let aboutPlayVideoBtn = document.querySelector('#about .video_play_btn'),
        aboutVideoFile = document.querySelector('#about #video_frame');

    aboutPlayVideoBtn.addEventListener("click", () => {
        aboutVideoFile.style.display = "block";
    });
});