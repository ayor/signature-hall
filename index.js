// Page Navigation
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active', 'page-enter');
    setTimeout(() => target.classList.remove('page-enter'), 500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Mobile Menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Cookie Banner
function closeCookie() {
  document.getElementById('cookieBanner').classList.add('hidden');
}

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10,10,10,0.99)';
  } else {
    nav.style.background = 'linear-gradient(to bottom, rgba(10,10,10,0.98), rgba(10,10,10,0.85))';
  }
});

// Form submission handler
function handleSubmit(btn) {
  btn.textContent = 'Message Sent ✦';
  btn.style.background = 'linear-gradient(135deg, #2D5A1B, #4A8B2A)';
  setTimeout(() => {
    btn.textContent = 'Send Enquiry';
    btn.style.background = '';
  }, 4000);
}

// Animate features on scroll (simple)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .room-card, .event-card, .testimonial-card, .promo-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Show initial elements
setTimeout(() => {
  document.querySelectorAll('.feature-card, .room-card, .event-card, .testimonial-card, .promo-card').forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, i * 80);
  });
}, 300);

// Carousel
let carouselIndex = 0;

function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  if (!track) return;
  const slides = track.querySelectorAll('.carousel-slide');

  dotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsWrap.appendChild(dot);
  });

  // Auto-advance every 5s
  clearInterval(window.carouselInterval);
  if (slides.length > 1) {
    window.carouselInterval = setInterval(() => moveCarousel(1), 5000);
  }
}

function moveCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  const slides = track.querySelectorAll('.carousel-slide');
  carouselIndex = (carouselIndex + direction + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(i) {
  carouselIndex = i;
  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

// Init on load
document.addEventListener('DOMContentLoaded', initCarousel);
initCarousel();

(function () {
  var PHONE_NUMBER = "2347079340801"; // ← replace with your number
  var DEFAULT_MESSAGE = "Hello! I'd like to ask about a reservation.";

  var link = document.getElementById("concierge-whatsapp-link");
  link.href =
    "https://wa.me/" + PHONE_NUMBER + "?text=" + encodeURIComponent(DEFAULT_MESSAGE);
})();