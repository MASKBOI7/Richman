function switchTab(tab) {
  const content = document.getElementById("tab-content");
  if (tab === "earning") {
    content.innerHTML = `
      <h3>💰 Earning Tab</h3>
      <p>Click to earn ₹100 each time!</p>
      <button onclick="earnMoney()" style="margin-top:10px;">💵 Earn</button>
      <p id="money" style="margin-top:20px;font-size:18px;"></p>
    `;
    updateMoney();
  }
}

let balance = localStorage.getItem("money") || 0;

function earnMoney() {
  balance = parseInt(balance) + 100;
  localStorage.setItem("money", balance);
  updateMoney();
}

function updateMoney() {
  document.getElementById("money").innerText = `Your Balance: ₹${balance}`;
}
