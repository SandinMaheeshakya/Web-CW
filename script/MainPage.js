// Define a dictionary that maps button IDs to song URLs
var songDictionary = {
  playAudio: 'script/song.mp3',
  playAudio2: 'script/song.mp3',
  playAudio3: 'script/song.mp3',
  playAudio4: 'script/song.mp3',
  playAudio5: 'script/song.mp3'
};
// Function to play the song based on the button ID
function playSongFromDictionary(buttonId) {
  var songUrl = songDictionary[buttonId];
  if (songUrl) {
    // Pause all other audio elements before playing the new song
    pauseAllSongs();

    var audio = document.getElementById(buttonId.replace("play", "test"));
    audio.src = songUrl;
    audio.play();

    // Update all play buttons to "Play" state
    document.querySelectorAll(".playbutton").forEach(function (button) {
      button.innerHTML = "Play";
    });
    // Update the clicked button to "Pause" state
    document.getElementById(buttonId).innerHTML = "&#10074;&#10074;";
  }
}

// Add event listeners to play buttons to play the corresponding songs
document.querySelectorAll(".playbutton").forEach(function (button) {
  button.addEventListener("click", function () {
    var buttonId = button.id;
    if (button.innerHTML === "Play") {
      playSongFromDictionary(buttonId);
    } else {
      button.innerHTML = "Play"; // Change button back to play icon
      pauseAudio(buttonId.replace("play", "test"));
    }
  });
});

// Function to pause the audio based on the button ID
function pauseAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.pause();
}

// Function to pause all songs
function pauseAllSongs() {
  document.querySelectorAll("audio").forEach(function (audio) {
    audio.pause();
  });
}
