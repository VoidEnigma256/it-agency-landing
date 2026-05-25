const animatedElements = document.querySelectorAll('.fade-in');

function showOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();


// Модальное окно
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalClose = document.querySelector(".modal-close");

// Открытие модалки
document.querySelectorAll(".service-card, .portfolio-item").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalText.textContent = card.querySelector("p").textContent;
    modal.classList.add("active");
  });
});

// Закрытие
modalClose.addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});


// Флип отзывов
document.querySelectorAll(".flip").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip-active");
  });
});