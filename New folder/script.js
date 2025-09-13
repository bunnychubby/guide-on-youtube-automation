// Accordion
const acc = document.querySelectorAll(".accordion-btn");
acc.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
  });
});

// Language toggle
const langBtn = document.getElementById("lang-toggle");
let lang = "en";
langBtn.addEventListener("click", () => {
  lang = (lang === "en") ? "tl" : "en";
  langBtn.textContent = (lang === "en") ? "🇬🇧 EN" : "🇵🇭 TL";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});
