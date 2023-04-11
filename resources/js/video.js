const video = document.getElementById('video');
const btn = document.getElementById('play_btn');


btn.addEventListener('click', function(ev){
    btn.classList.add('none');
    video.play();
})

video.addEventListener('click', function(ev){
    btn.classList.remove('none');
    video.pause();
})