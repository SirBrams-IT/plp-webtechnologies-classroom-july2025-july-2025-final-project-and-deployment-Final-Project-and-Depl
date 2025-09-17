// Main JS for interactivity and utilities

// === Mobile Nav Toggle ===
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // CSS handles show/hide
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

// === Testimonial Slider ===
const track = document.getElementById("testimonial-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const total = track.children.length;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn?.addEventListener("click", () => {
  index = (index + 1) % total;
  updateSlide();
});

prevBtn?.addEventListener("click", () => {
  index = (index - 1 + total) % total;
  updateSlide();
});

// Auto-play every 6s
setInterval(() => {
  index = (index + 1) % total;
  updateSlide();
}, 6000);

 // Contact form submission
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent reload
    alert("✅ Thank you! Your message has been sent.");
    this.reset(); // clear form fields
  });
  
// === Scroll animations ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll('.animate-on-scroll')
  .forEach((el) => observer.observe(el));

 // Auto-update year in footer
  document.getElementById("year-contact").textContent = new Date().getFullYear();  
