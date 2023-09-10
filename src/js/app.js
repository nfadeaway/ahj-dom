import Goblin from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".app");

  for (let i = 1; i <= 16; i += 1) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "empty");
    cell.dataset.id = i;
    appContainer.appendChild(cell);
  }

  setInterval(() => {
    const idList = [];
    const emptyCells = document.querySelectorAll(".cell.empty");

    for (const cell of emptyCells) {
      idList.push(cell.dataset.id);
    }
    const targetCell = document.querySelector(
      `[data-id='${getRandEmptyCell(idList)}']`
    );

    let prevActiveCell = document.querySelector(".active");
    if (prevActiveCell) {
      prevActiveCell.innerHTML = ``;
      prevActiveCell.classList.remove("active");
      prevActiveCell.classList.add("empty");
    }

    const img = document.createElement("img");
    img.src = Goblin;
    targetCell.appendChild(img);
    targetCell.classList.remove("empty");
    targetCell.classList.add("active");
  }, 500);
});

function getRandEmptyCell(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
