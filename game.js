let money = parseInt(localStorage.getItem("money")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

function getEarningAmount(level) {
  if (level >= 15) return 5000;
  return 1 + Math.floor((level - 1) * (4999 / 14));
}

function getRequiredForNextLevel(level) {
  return 500 + (level - 1) * 1000; // Custom scaling
}

function earnMoney() {
  const earned = getEarningAmount(level);
  money += earned;
  localStorage.setItem("money", money);

  const nextLevelGoal = getRequiredForNextLevel(level);
  if (money >= nextLevelGoal && level < 15) {
    level++;
    localStorage.setItem("level", level);
  }

  updateDisplay();
}

function updateDisplay() {
  const nextLevelGoal = getRequiredForNextLevel(level);
  const progress = Math.min(100, (money / nextLevelGoal) * 100);

  document.getElementById("cardAmount").innerText = `$${money}`;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

updateDisplay();
