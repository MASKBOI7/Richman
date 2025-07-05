window.onload = function () {
  const remembered = localStorage.getItem("remember") === "true";
  const current = localStorage.getItem("currentUser");

  if (remembered && current) {
    window.location.href = "dashboard.html";
  } else {
    showLogin();
  }
};

function showLogin() {
  document.getElementById('form-box').innerHTML = `
    <input type="text" id="username" placeholder="Username" />
    <input type="password" id="password" placeholder="Password" />
    <div class="remember">
      <input type="checkbox" id="rememberMe" />
      <label for="rememberMe">Remember me</label>
    </div>
    <button onclick="login()">Login</button>
  `;
}

function showSignup() {
  document.getElementById('form-box').innerHTML = `
    <input type="text" id="newUsername" placeholder="Create Username" />
    <input type="password" id="newPassword" placeholder="Create Password" />
    <button onclick="signup()">Sign Up</button>
  `;
}

function signup() {
  const u = document.getElementById('newUsername').value;
  const p = document.getElementById('newPassword').value;
  if (u && p) {
    localStorage.setItem(u, p);
    document.getElementById("msg").innerText = "Account created!";
  } else {
    document.getElementById("msg").innerText = "Please fill all fields.";
  }
}

function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  const stored = localStorage.getItem(u);
  const remember = document.getElementById('rememberMe').checked;

  if (stored === p) {
    localStorage.setItem("currentUser", u);
    localStorage.setItem("remember", remember);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Invalid credentials.";
  }
}
