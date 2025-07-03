window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const main = document.getElementById("main-content");
  setTimeout(() => {
    preloader.classList.add("hidden");
    main.classList.add("block");
  }, 1000);
});

if (document.querySelector(".typing")) {
  let typing = new Typed(".typing", {
    strings: ["Mey", "Wieda"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
}

const fullscreenModal = document.getElementById("fullscreenModal");

if (fullscreenModal) {
  fullscreenModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const imgSrc = button.getAttribute("data-img");
    const imgTitle = button.getAttribute("data-title");

    fullscreenModal.querySelector("#modalImage").src = imgSrc;
    fullscreenModal.querySelector("#modalImageTitle").textContent = imgTitle;
  });
}

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

function sendEmail(e) {
  e.preventDefault();
  const currentTheme = document.body.getAttribute("data-bs-theme") || "light";
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  Swal.fire({
    title: "Sending...",
    text: "Please wait a moment.",
    background: currentTheme === "dark" ? "#1e1e1e" : "#fff",
    color: currentTheme === "dark" ? "#fff" : "#000",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  emailjs.send("service_4uq87m9", "template_df8idwc", templateParams).then(
    (response) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent.",
        confirmButtonColor: currentTheme === "dark" ? "#0d6efd" : "#3085d6",
        background: currentTheme === "dark" ? "#1e1e1e" : "#fff",
        color: currentTheme === "dark" ? "#fff" : "#000",
      });

      document.getElementById("contact-form").reset();
    },
    (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send message. Please try again.",
        confirmButtonColor: currentTheme === "dark" ? "#dc3545" : "#d33",
        background: currentTheme === "dark" ? "#1e1e1e" : "#fff",
        color: currentTheme === "dark" ? "#fff" : "#000",
      });
    }
  );
}
