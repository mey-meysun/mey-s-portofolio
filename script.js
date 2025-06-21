let typing = new Typed(".typing", {
  strings: ["Mey"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

const buttons = document.querySelectorAll(".btn-back-to-top");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const scrollDuration = 600;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  });
});

const fullscreenModal = document.getElementById("fullscreenModal");
fullscreenModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget; 
  const imgSrc = button.getAttribute("data-img");
  const imgTitle = button.getAttribute("data-title");

  fullscreenModal.querySelector("#modalImage").src = imgSrc;
  fullscreenModal.querySelector("#modalImageTitle").textContent = imgTitle;
});

const toggleThemeBtn = document.getElementById("toggleTheme");
const icon = toggleThemeBtn.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
  document.body.setAttribute("data-bs-theme", "dark");
}

function updateIcon() {
  const currentTheme = document.body.getAttribute("data-bs-theme") || "light";
  if (currentTheme === "dark") {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
}

window.addEventListener("load", () => {
  updateIcon();
});

toggleThemeBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-bs-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon();
});
