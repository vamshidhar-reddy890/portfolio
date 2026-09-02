const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Typing animation
const roles = [
  "Data Science Student",
  "Java Developer",
  "Full-Stack Developer",
  "AI / ML Enthusiast"
];

const typingText = document.getElementById("typingText");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const current = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeRole, 1400);
      return;
    }
  } else {
    typingText.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 45 : 80);
}

typeRole();

// Scroll reveal
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
