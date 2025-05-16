
document.getElementById("start-button").onclick = () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-ui").style.display = "block";
  initGrid();
};

document.getElementById("shop-button").onclick = () => {
  document.getElementById("shop-menu").style.display = "block";
};

document.getElementById("map-button").onclick = () => {
  document.getElementById("map-menu").style.display = "block";
  loadMapPlots();
};

document.getElementById("settings-button").onclick = () => {
  document.getElementById("settings-menu").style.display = "block";
};

function closeShop() {
  document.getElementById("shop-menu").style.display = "none";
}

function closeMap() {
  document.getElementById("map-menu").style.display = "none";
}

function closeSettings() {
  document.getElementById("settings-menu").style.display = "none";
}

function goHome() {
  location.reload();
}

function resetGame() {
  alert("Resetting game...");
  location.reload();
}

function initGrid() {
  const grid = document.getElementById("grid");
  for (let i = 0; i < 6; i++) {
    const plot = document.createElement("div");
    plot.className = "plot";
    plot.innerText = i < 2 ? "🌱" : "🔒";
    grid.appendChild(plot);
  }
}

function loadMapPlots() {
  fetch('land_plots.json')
    .then(res => res.json())
    .then(data => {
      const mapDiv = document.getElementById("map-plots");
      mapDiv.innerHTML = "";
      data.forEach(plot => {
        const btn = document.createElement("button");
        btn.textContent = `${plot.name} - 💰${plot.price} (${plot.farmland}F/${plot.animals}A)`;
        btn.onclick = () => alert(`Purchased ${plot.name}`);
        mapDiv.appendChild(btn);
      });
    });
}
