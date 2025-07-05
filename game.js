let money = parseInt(localStorage.getItem("money")) || 0;

function earnMoney() {
  money += 100;
  localStorage.setItem("money", money);
  updateMoneyDisplay();
}

function updateMoneyDisplay() {
  document.getElementById("money-display").innerText = `Your Balance: ₹${money}`;
}

// On load
updateMoneyDisplay();
