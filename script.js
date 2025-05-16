
let coins = 100;
let selectedCrop = '🌾';

function startGame() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('gameUI').style.display = 'block';
  updateCoins();
}

function updateCoins() {
  document.getElementById('coinCount').textContent = `💰 ${coins}`;
}

function toggleShop() {
  toggleDisplay('shopMenu');
}
function toggleMap() {
  toggleDisplay('mapMenu');
}
function toggleSettings() {
  toggleDisplay('settingsMenu');
}

function toggleDisplay(id) {
  const menu = document.getElementById(id);
  menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
}

function buyItem(item) {
  if (item === 'wheat' && coins >= 5) {
    selectedCrop = '🌾';
    coins -= 5;
  } else if (item === 'carrot' && coins >= 8) {
    selectedCrop = '🥕';
    coins -= 8;
  } else if (item === 'land' && coins >= 50) {
    unlockNextPlot();
    coins -= 50;
  }
  updateCoins();
}

function unlockNextPlot() {
  const plots = document.querySelectorAll('.plot.farm');
  for (let plot of plots) {
    if (plot.dataset.unlocked === "false") {
      plot.dataset.unlocked = "true";
      plot.innerHTML = "";
      break;
    }
  }
}

function plantCrop(plot) {
  if (plot.dataset.unlocked === "true" && plot.textContent === "") {
    plot.textContent = "🌱🌱";
    setTimeout(() => {
      plot.textContent = selectedCrop;
    }, 3000); // 3 seconds grow time
  }
}

function buyPlot(el) {
  const cost = parseInt(el.dataset.cost);
  const farm = parseInt(el.dataset.farm);
  const animal = parseInt(el.dataset.animal);
  if (coins >= cost) {
    coins -= cost;
    updateCoins();
    alert(`You bought ${farm} farmland and ${animal} animal plots!`);
    // Add more plots dynamically here in a real version
    el.remove();
  } else {
    alert("Not enough coins!");
  }
}

function saveGame() {
  alert("Game saved! (placeholder)");
}
function resetGame() {
  location.reload();
}
