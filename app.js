const img = document.querySelector('.img');
const nameOfSong = document.querySelector('.nameOfSong');
const artist = document.querySelector('.artist');
const slider = document.querySelector('.slider');

const repeat = document.querySelector('.repeat');
const back = document.querySelector('.back');
const play = document.querySelector('.play');
const next = document.querySelector('.next');

const spotify = document.querySelector('.spotify');
const time = document.querySelector('.time');
const heart = document.querySelector('.heart');

const audio = document.querySelector('audio');

let flag = false;

const music = [
    { id: 1, path: './music/song1.mp3', artist: 'The Hardkiss', nameOfSong: 'Кораблі', img: 'background-image: url(./assets/img1.jpg)' },
    { id: 2, path: './music/song2.mp3', artist: 'Monatik', nameOfSong: 'Люді...Кораблі', img: 'background-image: url(./assets/img2.jpg)' },
    { id: 3, path: './music/song3.mp3', artist: 'Jerri Heil feat. Przyłu', nameOfSong: 'Bracia', img: 'background-image: url(./assets/img3.jpg)' }
]

let IndexSong = 0;

play.addEventListener('click', () => {
    audio.src = music[IndexSong].path;
    artist.textContent = music[IndexSong].artist;
    img.style = music[IndexSong].img;
    nameOfSong.textContent = music[IndexSong].nameOfSong;

    if (flag === false) {
        audio.play();
        play.style = 'background-image: url(./assets/pause.svg)';
        flag = true;
    } else {
        audio.pause();
        play.style = 'backround-image: url(./assets/play.png)';
        flag = false;
    }
})

back.addEventListener('click', () => {
    if (IndexSong === 0) return;
    IndexSong--;
    audio.src = music[IndexSong].path;
    artist.textContent = music[IndexSong].artist;
    img.style = music[IndexSong].img;
    nameOfSong.textContent = music[IndexSong].nameOfSong;
    audio.play();
    flag = true;
    play.style = 'background-image:url(./assets/pause.svg)';
})

next.addEventListener('click', () => {
    if (IndexSong === music.length - 1) return;
    IndexSong++;
    audio.src = music[IndexSong].path;
    artist.textContent = music[IndexSong].artist;
    img.style = music[IndexSong].img;
    nameOfSong.textContent = music[IndexSong].nameOfSong;
    audio.play();
    flag = true;
    play.style = 'background-image:url(./assets/pause.svg)';
})

