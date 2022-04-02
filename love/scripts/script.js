document.addEventListener("DOMContentLoaded", ()=>{
    let heart = document.querySelector('.heart'),
        finishText = document.querySelector('.finish_text'),
        goText = document.querySelector('.gooo');
        loveText = document.querySelectorAll('.love_text');

    let standartWidth = 100;
    heart.addEventListener("click", ()=>{
        standartWidth -= 5;
        heart.style.width = `${standartWidth}%`;
        if(standartWidth<=50){
            goText.style.display = "block";
        }
        if(standartWidth <= 5){
            Finish();
        }
    });

    function Finish(){
        heart.src = "./img/finish.jpg";
        heart.style.width = "100%";
        heart.removeEventListener("click", ()=>{});
        finishText.classList.add("showText");
        goText.style.display = "none";

        setTimeout(()=>{
            loveText[0].style.display = "block";
        },1500);
        setTimeout(()=>{
            loveText[1].style.display = "block";
        },3000);
        setTimeout(()=>{
            loveText[2].style.display = "block";
        },4000);
        setTimeout(()=>{
            loveText[3].style.display = "block";
        },5000);
    }
});