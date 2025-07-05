let money = parseInt(localStorage.getItem("money")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

function getEarningAmount(level) {
  if (level >= 15) return 5000;
  return 1 + Math.floor((level - 1) * (4999 / 14)); // spread from $1 to $5000
}

function earnMoney() {
  const earned = getEarningAmount(level);
  money += earned;
  localStorage.setItem("money", money);
  updateDisplay();
}

function levelUp() {
  if (level < 15) {
    level++;
    localStorage.setItem("level", level);
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("money-display").innerText = `Your Balance: $${money}`;
  document.getElementById("cardAmount").innerText = `$${money}`;
  document.getElementById("level-display").innerText = `Level ${level} — +$${getEarningAmount(level)} per click`;
}

updateDisplay();
