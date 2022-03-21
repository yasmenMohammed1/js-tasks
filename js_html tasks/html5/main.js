let video = document.getElementById("myvideo");
video.load(); 
video.autoplay = true;


video.addEventListener("mouseover", function () {
    video.style.transform="scale(1.2)";
    video.style.transition="1s";
});
video.addEventListener("mouseout", function () {
    video.style.transform="none";
})
video.addEventListener("click", function () {
    video.pause()
})

function fullScreen() {
    video.requestFullscreen()
}

 
let divs = document.querySelectorAll('.controlBtn')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
        divs[i].style.backgroundColor = "blue";
        let src = divs[i].getAttribute("data-value")
        video.src = src;
    })
    divs[i].addEventListener('blur', () => {
        divs[i].style.backgroundColor = "white"

    })  
    
}
