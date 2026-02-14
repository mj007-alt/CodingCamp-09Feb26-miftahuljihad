welcomeMessage()

function welcomeMessage() {
  // Show Popup
  let name = prompt("Welcome to Miftahul Travel Agent! What is your name?");
  if (name == null || name.trim() === "") {
    name = "Guest";
  }
  document.getElementById('welcome-speech').innerHTML = 'Welcome to Miftahul Travel Agent.';
 
function validateForm() {}

const select = document.getElementById("negara");
const wrap = select.parentElement;

select.addEventListener("focus", () => {
  wrap.classList.add("open");
});

select.addEventListener("blur", () => {
  wrap.classList.remove("open");
});

// =============================
// 1. Smooth Scroll Navigation
// =============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =============================
// 2. Auto Greeting Berdasarkan Waktu
// =============================
const welcome = document.getElementById("welcome-speech");

const hour = new Date().getHours();
let greeting = "Welcome";

if (hour < 12) greeting = "Good Morning";
else if (hour < 18) greeting = "Good Afternoon";
else greeting = "Good Evening";

if (welcome) {
  welcome.textContent = greeting + " — Your Trusted Travel Agent";
}


// =============================
// 3. Select Option → Isi Textbox
// =============================
const selectBox = document.querySelector(".selectbox");
const textBox = document.querySelector(".textbox");

if (selectBox && textBox) {
  selectBox.addEventListener("change", function() {
    textBox.value = this.value;
  });
}


// =============================
// 4. Validasi Form Contact
// =============================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const tujuan = textBox.value.trim();

    if (nama === "" || email === "" || tujuan === "") {
      alert("Semua field harus diisi!");
      return;
    }

    if (!email.includes("@")) {
      alert("Format email tidak valid");
      return;
    }

    alert("Data berhasil dikirim. Tim kami akan menghubungi Anda.");

    form.reset();
  });
}


// =============================
// 5. Hover Effect Card Destinasi
// =============================
document.querySelectorAll(".list-destination").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.2s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
  });

});


