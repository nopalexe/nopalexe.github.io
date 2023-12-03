const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click" , () => {
    question.innerHTML = "Aaaaaa, I like you too";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnrect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnrect.width;
    const maxY = window.innerHeight - noBtnrect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomy = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

})