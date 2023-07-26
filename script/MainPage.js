const playButtons = document.querySelectorAll('.playButton');
const audioPlayer = document.getElementById('audioPlayer');

// Function to set the audio source dynamically
function setAudioSource(audioSrc) {
  audioPlayer.src = audioSrc;
}

// Function to play the audio
function playAudio() {
  audioPlayer.play();
}

// Function to pause the audio
function pauseAudio() {
  audioPlayer.pause();
}

// Function to pause all other songs
function pauseAllOtherSongs(currentButton) {
  playButtons.forEach(button => {
    if (button !== currentButton) {
      button.innerHTML = 'Play';
    }
  });
}

// Add event listeners to each play button
playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const audioSrc = button.dataset.audio;
    if (button.innerHTML === 'Play') {
      setAudioSource(audioSrc);
      playAudio();
      pauseAllOtherSongs(button);
      button.innerHTML = 'Pause';
    } else {
      pauseAudio();
      button.innerHTML = 'Play';
    }
  });
});

function playMusic(){
  const targetElement = document.getElementById("playMusic");
  window.scrollTo(0, targetElement.offsetTop);
}
