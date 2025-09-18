
// Run only after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // === Mobile Nav Toggle ===
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active'); 
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // === Testimonial Slider ===
  const track = document.getElementById("testimonial-track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (track) {
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
  }

  // === Contact form  ===
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent reload
      alert("✅ Thank you! Your message has been sent successfully!.");
      this.reset(); // clear form fields
    });
  }

  // === Auto-update year in footer ===
  const yearFooter = document.getElementById("year-footer");
  if (yearFooter) {
    yearFooter.textContent = new Date().getFullYear();
  }
});

