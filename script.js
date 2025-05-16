
let coins = 0;
let season = "Spring";
let day = 1;
let music = new Audio();
let isMuted = false;

document.getElementById("start-btn").onclick = () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-ui").style.display = "block";
  playMusicForSeason();
};

document.getElementById("sell-btn").onclick = () => {
  coins += 10;
  updateUI();
};

document.getElementById("mute-btn").onclick = () => {
  isMuted = !isMuted;
  music.muted = isMuted;
};

document.getElementById("volume-slider").oninput = (e) => {
  music.volume = e.target.value / 100;
};

function updateUI() {
  document.getElementById("coin-count").innerText = "💰 " + coins;
  document.getElementById("season-label").innerText = getSeasonEmoji(season) + " " + season + " - Day " + day;
}

function playMusicForSeason() {
  music.src = "assets/" + season.toLowerCase() + "_music.mp3"; // placeholder
  music.loop = true;
  music.volume = 0.5;
  music.play();
}

function getSeasonEmoji(season) {
  return {
    "Spring": "🌸",
    "Summer": "🌞",
    "Fall": "🍂",
    "Winter": "❄️"
  }[season];
}

updateUI();
