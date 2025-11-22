// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Smooth scrolling for nav links
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
    if (window.innerWidth <= 720) {
      nav.classList.remove("show");
    }
  });
});

// Appointment form handling
const appointmentForm = document.getElementById("appointmentForm");
const formSuccess = document.getElementById("formSuccess");

appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simple fake submit (no backend)
  appointmentForm.reset();
  formSuccess.hidden = false;

  setTimeout(() => {
    formSuccess.hidden = true;
  }, 3500);
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();