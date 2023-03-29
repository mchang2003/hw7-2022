let video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// let video = document.getElementById('player1');
	console.log(video)
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	const video = document.getElementById("player1");
	const volumeSpan = document.getElementById("volume");
	console.log(video.volume * 100)
	video.play();
  	volumeSpan.textContent = (video.volume * 100).toFixed(0) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	// const video = document.getElementById("player1");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	// const video = document.getElementById("player1");
	console.log("Current speed: " + video.playbackRate);
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	// const video = document.getElementById("player1");
	console.log("Current speed: " + video.playbackRate);
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    // const video = document.getElementById("player1");
    console.log("Current time: " + video.currentTime);
    const newTime = video.currentTime + 10;
	video.currentTime = newTime;
    if (newTime > video.duration) {
        video.currentTime = 0;
    } 
    console.log("New time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	const muteButton = document.getElementById("mute");
	if (video.muted) {
	  video.muted = false;
	  muteButton.textContent = "Mute";
	} else {
	  video.muted = true;
	  muteButton.textContent = "Unmute";
	}
});

const volumeSlider = document.getElementById("slider");
const volumeSpan = document.getElementById("volume");

volumeSlider.addEventListener("input", function() {
  const videoPlayer = document.getElementById("player1");
  videoPlayer.volume = volumeSlider.value / 100;

  volumeSpan.textContent = videoPlayer.volume * 100  + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});