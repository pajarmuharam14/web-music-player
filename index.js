// ARRAY LIST MUSIC
const allMusic = [
  {
    id: 1,
    name: 'Ariana Grande ft. Nicki Minaj',
    title: 'Side to Side',
    image: 'thumbnail-songs/Ariana-Grande.png',
    music: 'Songs/Ariana Grande ft. Nicki Minaj - Side To Side (Official Video) ft. Nicki Minaj - YouTube.mp3',
  },
  {
    id: 2,
    name: 'Bruno Mars',
    title: '24K Magic',
    image: 'thumbnail-songs/Bruno-Mars.png',
    music: 'Songs/Bruno Mars - 24K Magic (Official Video) - YouTube.mp3',
  },
  {
    id: 3,
    name: 'Craig David',
    title: 'Insomnia',
    image: 'thumbnail-songs/Craig-David.jpg',
    music: 'Songs/Craig David - Insomnia (Official Video) - YouTube.mp3',
  },
  {
    id: 4,
    name: 'Green Day',
    title: 'American Idiot',
    image: 'thumbnail-songs/Green-Day.png',
    music: 'Songs/Green Day - American Idiot lyrics [1080p] - YouTube.mp3',
  },
  {
    id: 5,
    name: 'Jessie J ft. B.o.B',
    title: 'Price Tag',
    image: 'thumbnail-songs/Jessie-J.png',
    music: 'Songs/Jessie J - Price Tag ft. B.o.B - YouTube.mp3',
  },
  {
    id: 6,
    name: 'Justin-Bieber',
    title: 'Love Yourself',
    image: 'thumbnail-songs/Justin-Bieber.png',
    music: 'Songs/Justin Bieber - Love Yourself (Official Music Video) - YouTube.mp3',
  },
  {
    id: 7,
    name: 'Magic',
    title: 'Rude',
    image: 'thumbnail-songs/Rude.png',
    music: 'Songs/MAGIC! - Rude (Official Music Video) - YouTube.mp3',
  },
  {
    id: 8,
    name: 'Linkin Park',
    title: 'Numb',
    image: 'thumbnail-songs/Linkin-Park.jpg',
    music: 'Songs/Numb [Official Music Video] - Linkin Park.mp3',
  },
  {
    id: 9,
    name: 'One Direction',
    title: 'What Makes You Beautiful',
    image: 'thumbnail-songs/One-Direction.jpg',
    music: 'Songs/One Direction - What Makes You Beautiful (Official Video) - YouTube.mp3',
  },
  {
    id: 10,
    name: 'Taylor Swift',
    title: '22',
    image: 'thumbnail-songs/Taylor-Swift.png',
    music: 'Songs/Taylor Swift - 22 - YouTube.mp3',
  },
];
//SELECTOR
const audioContainer = document.querySelector('#audio-container');
const listTitleSongs = document.querySelectorAll('.list-title-songs');
console.log(listTitleSongs);
const thumbnail = document.querySelector('#thumbnail');
const audio = document.querySelector('#audio');
const titleSongs = document.querySelector('#title-songs');
const artist = document.querySelector('#artist');
const prev = document.querySelector('.prev');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progress-container');

let songsIndex = 0;

// CONTEN LOAD
window.addEventListener('DOMContentLoaded', function () {
  const item = allMusic[songsIndex];
  thumbnail.src = item.image;
  audio.src = item.music;
  artist.textContent = item.name;
  titleSongs.textContent = item.title;
});

// SHOW CONTENT
function show(showArtist) {
  const item = allMusic[showArtist];
  thumbnail.src = item.image;
  audio.src = item.music;
  artist.textContent = item.name;
  titleSongs.textContent = item.title;
}

// PLAY SONGS
function playSong() {
  audioContainer.classList.add('play');
  play.querySelector('i.fa-solid').classList.remove('fa-play');
  play.querySelector('i.fa-solid').classList.add('fa-pause');
  audio.play();
}

// PAUSE SONGS
function pauseSong() {
  audioContainer.classList.remove('play');
  play.querySelector('i.fa-solid').classList.add('fa-play');
  play.querySelector('i.fa-solid').classList.remove('fa-pause');
  audio.pause();
}
play.addEventListener('click', function () {
  const isPlaying = audioContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// NEXT SONGS
next.addEventListener('click', function () {
  songsIndex++;
  if (songsIndex > allMusic.length - 1) {
    songsIndex = 0;
  }
  show(songsIndex);
  playSong();
});

audio.addEventListener('ended', function () {
  songsIndex++;
  if (songsIndex > allMusic.length - 1) {
    songsIndex = 0;
  }
  show(songsIndex);
  playSong();
});

// PREV SONGS
prev.addEventListener('click', function () {
  songsIndex--;
  if (songsIndex < 0) {
    songsIndex = allMusic.length - 1;
  }
  show(songsIndex);
  playSong();
});

audio.addEventListener('ended', function () {});

for (let i = 0; i < listTitleSongs.length; i++) {
  listTitleSongs[i].addEventListener('click', function () {
    const item = allMusic[i];
    thumbnail.src = item.image;
    audio.src = item.music;
    artist.textContent = item.name;
    titleSongs.textContent = item.title;
    playSong();
  });
}

// UPDATE PROGRESS BAR
audio.addEventListener('timeupdate', function (e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

// SET PROGRESS BAR
progressContainer.addEventListener('click', function (e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});
