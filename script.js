/*********************
 NAV – SKJUL / VIS
*********************/
let lastScrollY = window.scrollY;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = currentScrollY;
});

/*********************
 SLIDE-IN ANIMATION
*********************/
const slideItems = document.querySelectorAll(".slide-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

slideItems.forEach((item) => observer.observe(item));

/************* MODAL************ */

const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".modal-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.title;
    modalContent.textContent = btn.dataset.content;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeModalFn() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeModal.addEventListener("click", closeModalFn);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModalFn();
  }
});
