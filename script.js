
document.addEventListener("DOMContentLoaded", () => {
  const farmGrid = document.getElementById("farmGrid");
  const mapMenu = document.getElementById("mapMenu");
  const shopMenu = document.getElementById("shopMenu");
  const settingsMenu = document.getElementById("settingsMenu");

  // Start with 6 plots (2 animal, 4 farm) and 2 wheat crops
  for (let i = 0; i < 6; i++) {
    const plot = document.createElement("div");
    plot.className = "plot";
    if (i < 2) {
      plot.textContent = "🐄"; // Placeholder animal
    } else if (i < 4) {
      plot.textContent = "🌱🌱"; // Initial wheat
    } else {
      plot.textContent = "🔒";
    }
    farmGrid.appendChild(plot);
  }

  document.getElementById("mapButton").onclick = () => {
    mapMenu.classList.toggle("hidden");
  };

  document.getElementById("shopButton").onclick = () => {
    shopMenu.classList.toggle("hidden");
  };

  document.getElementById("settingsButton").onclick = () => {
    settingsMenu.classList.toggle("hidden");
  };
});

function closeMenu(menuId) {
  document.getElementById(menuId).classList.add("hidden");
}
