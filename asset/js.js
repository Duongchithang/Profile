const Item = document.querySelectorAll(".navigation-item");
const Items = document.querySelectorAll('.select');
const PlayMusic = document.querySelector('.Music');
const Music = document.querySelector('.music');
const CloseMusic = document.querySelector('.play-close');
PlayMusic.addEventListener('click', function() {
    Music.classList.add('play-music')

})
CloseMusic.addEventListener('click', function() {
    Music.classList.remove('play-music');

})