document.getElementById("startImage").onclick = () => {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameUI").style.display = "block";
};

document.getElementById("shopButton").onclick = () => {
    const menu = document.getElementById("shopMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

document.getElementById("settingsButton").onclick = () => {
    const menu = document.getElementById("settingsMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};
